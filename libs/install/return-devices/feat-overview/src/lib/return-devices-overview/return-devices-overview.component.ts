import { ChangeDetectionStrategy, Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LetDirective } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { LoginModule } from '@telenet/ng-lib-ocapi';
import { CustomerBrandEnum, LoaderModule, PathCategorisationService } from '@telenet/ng-lib-page';
import { MessagesModule } from '@telenet/ng-lib-message';
import {
  AddressSelectorModel,
  Device,
  FormatAddressPipe,
  PdfService,
  ReturnDevicesFacade,
  ReturnDevicesNgrxModule,
} from '@return-devices/data-access';
import {
  PrintReturnLabelDialogComponent,
  ReturnDevicesAddressSelectorComponent,
  ReturnDevicesDetailComponent,
  ReturnDevicesFooterComponent,
  ReturnDevicesHeaderComponent,
  ReturnDevicesSkeletonComponent,
} from '@return-devices/ui';
import FileSaver from 'file-saver';
import { AdobeAnalyticsDirective, DatalayerEventNames } from '@telenet/ng-lib-datalayer';

@UntilDestroy()
@Component({
  selector: 'tg-return-devices-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    LoginModule,
    ReturnDevicesNgrxModule,
    LetDirective,
    ReturnDevicesDetailComponent,
    ReturnDevicesFooterComponent,
    ReturnDevicesHeaderComponent,
    ReturnDevicesAddressSelectorComponent,
    PrintReturnLabelDialogComponent,
    TranslateModule,
    LoaderModule,
    MessagesModule,
    AdobeAnalyticsDirective,
    ReturnDevicesSkeletonComponent,
    FormatAddressPipe,
  ],
  providers: [AdobeAnalyticsDirective],
  templateUrl: './return-devices-overview.component.html',
  styleUrl: './return-devices-overview.component.scss',
})
export class ReturnDevicesOverviewComponent {
  private readonly facade: ReturnDevicesFacade = inject(ReturnDevicesFacade);
  private readonly pdfService: PdfService = inject(PdfService);
  private readonly pathCategorisationService: PathCategorisationService = inject(PathCategorisationService);

  readonly scopes = ['fixedphonerestriction'];
  readonly returnDevices$ = this.facade.selectedDevicesList$;
  readonly returnLabelByteArray$ = this.facade.returnLabelByteArray$;
  readonly returnDevicesFailure$ = this.facade.returnDevicesFailure$;
  readonly returnDevicesAddressLines$ = this.facade.returnDevicesAddressLines$;
  readonly selectDeviceDetailsLoaded$ = this.facade.selectDeviceDetailsLoaded$;

  selectedAddressLine$ = this.facade.selectedAddressLine$;
  selectedAddressLine: AddressSelectorModel | null;
  protected readonly DatalayerEventNames = DatalayerEventNames;
  protected readonly messageGroupName = 'return-devices';
  showDialog: boolean;
  isBaseCustomer: boolean;

  @ViewChild('returnLabelIframe') returnLabelIframe: ElementRef;

  @Input() returnPointUrl: string;
  @Input() telenetStoreUrl: string;
  @Input() imagePath: string;
  @Input() enableLoader: boolean;
  @Input() enableMask: boolean;
  @Input() pageType: string;
  showMenu = false;

  initAfterLoggedIn() {
    this.loadReturnLabel();
    this.facade.getAddressSelector();
    this.onReturnLabelByteArrayChange();
    this.selectedAddressLine$
      .pipe(untilDestroyed(this))
      .subscribe((selectedAddress) => this.onSelectAddressLine(selectedAddress));

    this.isBaseCustomer = this.pathCategorisationService.isCustomerOfBrand(CustomerBrandEnum.BRAND_BASE);
  }

  onSelectAddressLine(selectedAddress: AddressSelectorModel | null): void {
    this.selectedAddressLine = selectedAddress;
    return this.facade.selectedAddress(this.selectedAddressLine);
  }

  showReturnLabelDialog(): void {
    this.showDialog = true;
  }

  toggleDevice(device: Device): void {
    this.facade.toggleDevice(device);
  }

  print(): void {
    this.returnLabelIframe?.nativeElement?.contentWindow?.print();
  }

  download(byteArray: Uint8Array): void {
    const fileName = this.isBaseCustomer
      ? `Base_ReturnLabel_${new Date().getTime()}.pdf`
      : `Telenet_ReturnLabel_${new Date().getTime()}.pdf`;
    FileSaver.saveAs(this.convertToBlob(byteArray), fileName);
  }

  close(): void {
    this.showDialog = false;
  }

  private loadReturnLabel() {
    this.selectedAddressLine$.pipe(untilDestroyed(this)).subscribe((selectedAccount) => {
      if (selectedAccount) {
        this.facade.loadReturnLabel(selectedAccount.id);
      }
    });
  }

  private onReturnLabelByteArrayChange() {
    this.returnLabelByteArray$.pipe(untilDestroyed(this)).subscribe((returnLabel) => {
      if (returnLabel) {
        const blob = this.pdfService.convertByteArrayToBlob(returnLabel);
        const blobUrl = URL.createObjectURL(blob);
        if (this.returnLabelIframe) {
          this.returnLabelIframe.nativeElement.src = blobUrl;
        }
      }
    });
  }

  private convertToBlob(byteArray: Uint8Array) {
    return this.pdfService.convertByteArrayToBlob(byteArray);
  }

  openAddressSelection() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }
}
