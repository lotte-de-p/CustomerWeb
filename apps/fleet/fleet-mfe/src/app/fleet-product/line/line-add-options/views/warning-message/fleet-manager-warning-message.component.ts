import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import isEmpty from 'lodash-es/isEmpty';
import isUndefined from 'lodash-es/isUndefined';
import filter from 'lodash-es/filter';
import uniq from 'lodash-es/uniq';
import { finalize } from 'rxjs/operators';
import { MessageService } from '@telenet/ng-lib-message';
import { AbstractBaseComponent, AssetService, LoaderService } from '@telenet/ng-lib-page';
import { CoreService } from '../../../shared/services/core.service';
import { ProductDatalayerService } from '../../../shared/services/datalayer/product-datalayer.service';
import { FleetMessageService } from '../../../shared/services/message/fleet-message.service';
import { LineAddOptionsConstants } from '../../../shared/constants/line-add-options.constants';
import { SalesOrder } from '../../../shared/models/sales-order/sales-order.model';
import { ManageModifyProductsInterface } from '../../../shared/interfaces/manage-modify-products.interface';
import { Offer, OfferAction } from '../../../shared/interfaces/offer.interface';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'tg-fleet-manager-warning-message',
  standalone: true,
  templateUrl: './fleet-manager-warning-message.component.html',
  imports: [CommonModule, TranslateModule, InlineSVGModule],
})
export class FleetManagerWarningMessageComponent extends AbstractBaseComponent implements OnInit {
  @Input() isShowWarning = false;
  @Input() selectedLines = [];
  @Input() optionProducts = [];
  @Input() salesOrderResponse;
  @Input() category;
  @Input() messageGroup: string;

  @Output() closedOverLay: EventEmitter<boolean> = new EventEmitter<boolean>();

  centralSuccessIllustration: string;

  constructor(
    private readonly coreService: CoreService,
    private readonly messageService: MessageService,
    private readonly productDatalayerService: ProductDatalayerService,
    private readonly loaderService: LoaderService,
    private readonly fleetMessageService: FleetMessageService
  ) {
    super();
  }

  ngOnInit() {
    this.centralSuccessIllustration = AssetService.getImagePath(
      'FLEET_ADD_OPTIONS',
      'central-success-illustration.svg'
    );
  }

  closeOverLay(): void {
    this.closedOverLay.emit();
  }

  public cancelAddAction(): void {
    this.isShowWarning = false;
    this.closeOverLay();
  }

  public submitOptions(): void {
    this.isShowWarning = false;
    this.loaderService.start();
    this.obs(
      this.coreService
        .modifyProducts(LineAddOptionsConstants.MESSAGE_GROUP, this.getAddOptionsPostData())
        .pipe(finalize(() => this.loaderService.stop()))
      // eslint-disable-next-line rxjs-angular/prefer-takeuntil
    ).subscribe({
      next: (salesOrder: SalesOrder) => {
        if (!isEmpty(salesOrder) && salesOrder.id) {
          const payload = {
            salesOrderId: salesOrder.id,
            messageGroup: LineAddOptionsConstants.MESSAGE_GROUP,
          };
          this.messageService.clearMessages(LineAddOptionsConstants.MESSAGE_GROUP);
          // eslint-disable-next-line rxjs/no-nested-subscribe,rxjs-angular/prefer-takeuntil
          this.coreService.submitSalesOrder(payload).subscribe({
            next: (response) => {
              if (response && response.success) {
                this.productDatalayerService.addEventToUDL(
                  LineAddOptionsConstants.EVENT_ATTRIBUTE_INTENT_ADD_OPTION,
                  LineAddOptionsConstants.EVENT_TYPE_SELF_SERVICE_FLOW_END,
                  response,
                  {},
                  {},
                  false
                );
                const mutuallyExclusiveGroup = this.getMutuallyExclusiveGroup();
                if (mutuallyExclusiveGroup.length > 0) {
                  this.productDatalayerService.addEventToUDL(
                    LineAddOptionsConstants.EVENT_ATTRIBUTE_INTENT_ADD_OPTION,
                    LineAddOptionsConstants.EVENT_TYPE_SELF_SERVICE_FLOW_END,
                    response,
                    {},
                    {},
                    true
                  );
                }
                this.fleetMessageService.showSuccess(this.messageGroup, LineAddOptionsConstants.SUCCESS_MESSAGE);
                this.closeOverLay();
              }
            },
            error: (error) => {
              this.fleetMessageService.showError(error, this.messageGroup);
              this.closeOverLay();
            },
          });
        } else {
          this.closeOverLay();
        }
      },
      error: (error) => {
        this.fleetMessageService.showError(error, this.messageGroup);
        this.closeOverLay();
      },
    });
  }

  private getAddOptionsPostData(): ManageModifyProductsInterface[] {
    return filter(
      this.selectedLines.map((selectedLine) => {
        if (!isEmpty(selectedLine.options) && selectedLine.isAffected) {
          return this.createProductOptions(selectedLine);
        }
      }),
      (option) => !isUndefined(option)
    );
  }

  getMutuallyExclusiveGroup(): unknown[] {
    return uniq(
      this.optionProducts.map((option) => {
        if (option.productInfo.subcategory && !!option.productInfo.subcategory.mutualExclusion) {
          return option.productInfo.subcategory.name;
        }
      })
    );
  }

  private createProductOptions(selectedLine): ManageModifyProductsInterface {
    const productOption = {};
    productOption['productIdentifier'] = selectedLine.identifier;
    productOption['offers'] = this.mapOptionsToOfferWithActionAdd(selectedLine.options);
    if (selectedLine.isUpgraded) {
      this.calculateDisconnectOffer(selectedLine, productOption);
    }
    return productOption;
  }

  private mapOptionsToOfferWithActionAdd(options): unknown[] {
    return filter(
      options.map((option) => {
        if (option['isSelected'] === true) {
          return this.createOffer(option['id'], LineAddOptionsConstants.ADD);
        }
      }),
      (option) => !isUndefined(option)
    );
  }

  private calculateDisconnectOffer(selectedLine, productOption): void {
    const mutuallyExclusiveGroup = this.getMutuallyExclusiveGroup();
    selectedLine.options.forEach((option) => {
      if (mutuallyExclusiveGroup.includes(option.category) || this.hasOptionToBeReplaced(selectedLine)) {
        const newlyAddOptions = selectedLine.options.filter((optionData) => {
          return optionData.isSelected && optionData.status === LineAddOptionsConstants.STATUS_INACTIVE;
        });
        newlyAddOptions.forEach((newOption) => {
          if (option.category === newOption.category && option.status === LineAddOptionsConstants.STATUS_ACTIVE) {
            productOption.offers.push(this.createOffer(option.productId, LineAddOptionsConstants.DISCONNECT));
          }
        });
      }
    });
  }

  private hasOptionToBeReplaced(selectedLine): boolean {
    return selectedLine.options.some(
      (option) => option.optionCategory === LineAddOptionsConstants.OPTION_CATEGORY_REPLACED
    );
  }

  private createOffer(id: string, action: OfferAction): Offer {
    return {
      id,
      action,
      type: LineAddOptionsConstants.OPTION_TYPE,
    };
  }
}
