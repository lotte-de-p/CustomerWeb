import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MessageService, MessagesModule, SuccessMessage } from '@telenet/ng-lib-message';
import { AnalyticsConstants, DataLayerService } from '@telenet/ng-lib-datalayer';
import { SimActivationConstants } from './constants/sim-activation.constants';
import { SimActivationDataLayerService } from './services/sim-activation-datalayer.service';
import { SingleSimActivationService } from './services/single-sim-activation.service';
import { takeUntil } from 'rxjs/operators';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { MsisdnInterface } from './interfaces/msisdn.interface';
import { Page, PageInfo } from 'udl';
import { SimDetailsService } from '../../../shared/common/services/sim-details/sim-details.service';
import { DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';

@Component({
  selector: 'tg-sim-activation-manager',
  templateUrl: './sim-activation-manager.component.html',
  standalone: true,
  imports: [MessagesModule, TgFormsModule, ReactiveFormsModule, TranslateModule, DatePipe],
})
export class SimActivationManagerComponent extends AbstractBaseComponent implements OnInit {
  @Input() msisdns: string[] = [];
  @Input() dateRange: number;
  @Output() closeOverlayEvent = new EventEmitter<string>();
  form: FormGroup;
  fromDate: Date;
  toDate: Date;
  iccid?: string;
  messageGroupName = SimActivationConstants.MESSAGE_GROUP;
  simCardActivationDate: Date;
  customLabel = true;

  constructor(
    private readonly singleSimActivationService: SingleSimActivationService,
    private readonly simActivationDataLayerService: SimActivationDataLayerService,
    private readonly messageService: MessageService,
    private readonly mobileService: SimDetailsService,
    private readonly formBuilder: FormBuilder,
    private readonly dataLayerService: DataLayerService
  ) {
    super();
  }

  ngOnInit(): void {
    this.setPageProperties();
    this.form = this.formBuilder.group({
      simActivationDateFormControl: [null, [Validators.required]],
    });
    this.simActivationDataLayerService.addPageEvent();
    this.simActivationDataLayerService.sendDataLayerEvent(
      AnalyticsConstants.EVENT_NAME_SIM_ACTIVATION_START,
      AnalyticsConstants.EVENT_TYPE_SELF_SERVICE_FLOW_START
    );
    this.fromDate = new Date();
    this.toDate = new Date();
    this.toDate.setDate(this.toDate.getDate() + this.dateRange);
    this.messageService.clearMessages(this.messageGroupName);
    this.getSimDetails();
  }

  getSimDetails() {
    this.mobileService
      .getSimDetailsByMsisdn(SimActivationConstants.MESSAGE_GROUP, this.msisdns[0])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((simDetailsResponse) => {
        this.iccid = simDetailsResponse[0].iccid;
      });
  }

  activateSim() {
    this.doSingleSimActivation();
    this.closeOverlayEvent.emit('overlay:close');
  }

  private doSingleSimActivation() {
    this.simCardActivationDate = this.form.get('simActivationDateFormControl')?.value.toISOString();
    this.singleSimActivationService
      .activateSim(this.createMsisdnList(), this.simCardActivationDate, this.iccid!)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.messageService.clearMessages(SimActivationConstants.MESSAGE_GROUP);
        this.messageService.addMessage(
          new SuccessMessage(
            SimActivationConstants.MESSAGE_GROUP,
            SimActivationConstants.MESSAGE_GROUP + '.response-success-activate'
          )
        );
        this.simActivationDataLayerService.sendDataLayerEvent(
          AnalyticsConstants.EVENT_NAME_SIM_ACTIVATED,
          AnalyticsConstants.EVENT_TYPE_SELF_SERVICE_FLOW_END
        );
      });
  }

  createMsisdnList() {
    const msisdnList: MsisdnInterface[] = [];
    this.msisdns.forEach((msisdnData) => {
      const msisdn = { msisdn: msisdnData };
      msisdnList.push(msisdn);
    });
    return msisdnList;
  }

  private setPageProperties(): void {
    const pageInfo = new PageInfo();
    pageInfo.setPageID('sim_activation_manager_id');
    pageInfo.setPageName('sim_activation_manager_name');
    const pageJSON = {
      pageInfo: pageInfo,
    };
    const page = new Page(pageJSON);
    this.dataLayerService.setPage(page);
  }
}
