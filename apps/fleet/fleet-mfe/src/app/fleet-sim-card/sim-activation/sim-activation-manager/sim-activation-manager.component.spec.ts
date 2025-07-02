import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimActivationManagerComponent } from './sim-activation-manager.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { MessageService, SuccessMessage } from '@telenet/ng-lib-message';
import { LoaderService } from '@telenet/ng-lib-page';
import { FormBuilder, Validators } from '@angular/forms';
import { SingleSimActivationRequest } from './model/sim-activation.model';
import { SimActivationConstants } from './constants/sim-activation.constants';
import { SimActivationDataLayerService } from './services/sim-activation-datalayer.service';
import { SingleSimActivationService } from './services/single-sim-activation.service';
import { expect, jest } from '@jest/globals';
import { SimDetailsService } from '../../../shared/common/services/sim-details/sim-details.service';
import { SimDetailsModel } from '../../../shared/common/models/sim-details.model';

describe('SimActivationManagerComponent', () => {
  let component: SimActivationManagerComponent;
  let fixture: ComponentFixture<SimActivationManagerComponent>;
  let dataLayerService: SimActivationDataLayerService;
  let singleSimActivationService: SingleSimActivationService;
  let messageService: MessageService;
  let loader: LoaderService;
  let mobileService: SimDetailsService;
  let formBuilder: FormBuilder;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        DatePipe,
        FormBuilder,
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });
    singleSimActivationService = TestBed.inject(SingleSimActivationService);
    messageService = TestBed.inject(MessageService);
    dataLayerService = TestBed.inject(SimActivationDataLayerService);
    loader = TestBed.inject(LoaderService);
    mobileService = TestBed.inject(SimDetailsService);
    formBuilder = TestBed.inject(FormBuilder);
    jest.spyOn(dataLayerService, 'addPageEvent').mockReturnValue();
    jest.spyOn(dataLayerService, 'sendDataLayerEvent');
    jest.spyOn(messageService, 'clearMessages');
    jest.spyOn(messageService, 'addMessage');
    jest.spyOn(loader, 'start');
    jest.spyOn(loader, 'stop');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimActivationManagerComponent);
    component = fixture.componentInstance;
    component.dateRange = 60;
    component.msisdns = ['0945834593412'];
    component.form = formBuilder.group({
      simActivationDateFormControl: [null, [Validators.required]],
    });
    fixture.detectChanges();
    jest.spyOn(component.closeOverlayEvent, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call sim details service', () => {
      const simDetails = {
        sim: '0945834593412',
        puk: '03457483',
        status: 'ACTIVE',
        iccid: '0945834593412',
      } as SimDetailsModel;

      jest.spyOn(mobileService, 'getSimDetailsByMsisdn').mockReturnValue(of([simDetails]));

      component.ngOnInit();

      expect(mobileService.getSimDetailsByMsisdn).toHaveBeenCalledWith(
        SimActivationConstants.MESSAGE_GROUP,
        '0945834593412'
      );
      expect(dataLayerService.addPageEvent).toHaveBeenCalled();
      expect(dataLayerService.sendDataLayerEvent).toHaveBeenCalled();
      expect(messageService.clearMessages).toHaveBeenCalledWith(SimActivationConstants.MESSAGE_GROUP);
      expect(component.iccid).toBe('0945834593412');
    });
  });

  it('Given single msisdn and activation date, SingleSimActivationService should be called on activate', () => {
    const msisdn: SingleSimActivationRequest[] = [
      {
        msisdnList: [{ msisdn: '0945834593412' }],
        futureDate: new Date('2022-08-30T04:18:15.000Z'),
        iccid: 'iccid',
      },
    ];
    component.form
      .get('simActivationDateFormControl')
      ?.setValue(new Date('Tue Aug 30 2022 09:48:15 GMT+0530 (India Standard Time)'));
    component.iccid = msisdn[0].iccid;
    component.simCardActivationDate = new Date('2022-08-30T04:18:15.000Z');
    jest.spyOn(singleSimActivationService, 'activateSim').mockReturnValue(of({ status: 200 }));
    component.activateSim();

    expect(singleSimActivationService.activateSim).toHaveBeenCalledWith(
      msisdn[0].msisdnList,
      component.simCardActivationDate,
      component.iccid
    );
    expect(dataLayerService.sendDataLayerEvent).toHaveBeenCalledWith('sim activated', 'self-service-flow-end');
    expect(messageService.clearMessages).toHaveBeenCalled();
    expect(messageService.addMessage).toHaveBeenCalledWith(
      new SuccessMessage(
        SimActivationConstants.MESSAGE_GROUP,
        SimActivationConstants.MESSAGE_GROUP + '.response-success-activate'
      )
    );
    expect(component.closeOverlayEvent.emit).toHaveBeenCalledWith('overlay:close');
  });
});
