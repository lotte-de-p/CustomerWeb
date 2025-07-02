import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LanguageService } from '@telenet/ng-lib-page';
import { AbstractStepComponent } from '../abstract-step.component';
import { CreateFleetLineState } from '../../state/create-line-flow.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CreateFleetLineFlowUtil } from '../../utils/create-line-flow.util';
import { InputInterface } from '../../models/input.interface';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataLayerService } from '@telenet/ng-lib-datalayer';
import { MessageService } from '@telenet/ng-lib-message';
import { CreateFleetLineConstants } from '../../constants/create-line.constants';
import { SimNumberComponent } from './sim-number.component';
import { CreateFleetLineFlowSelectors } from '../../state/create-line-flow.selectors';
import { SimCardNumberValidator } from '../../validators/sim-card-number-validator';
import { StepBuilder, StepFlowState } from '@telenet/ng-lib-step-flow';
import { expect, jest } from '@jest/globals';
import { of } from 'rxjs';
import { SimValidationService } from '../../services/sim-validation.service';
import { SimStatusService } from '../../services/sim-status.service';
import { TgFormsModule } from '@telenet/ng-lib-form';

const successfulValidationMock = require('../../../../../../../../../fixtures/http/fleet/create-fleet-line/sim-swap-validation.json');
describe('SimNumberComponent', () => {
  let component: SimNumberComponent;
  let fixture: ComponentFixture<SimNumberComponent>;
  let store: Store;
  let formBuilder: FormBuilder;
  let dataLayerService: DataLayerService;
  let messageService: MessageService;
  let simValidationService: SimValidationService;
  let simStatusService: SimStatusService;
  const SIM_NUMBER = 'sim-number';

  const mockDialogRef = {
    close: jest.fn(() => 'close'),
    afterClosed: jest.fn()('afterClosed'),
  };

  const mockDialog = {
    open: () => mockDialogRef,
  };

  const mockParent = {
    ngOnInit: () => null,
  };

  const mockLanguageService = {
    getLanguage: () => 'EN',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        Store,
        FormBuilder,
        { provide: 'Window', useValue: {} },
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MatDialog, useValue: mockDialog },
        { provide: LanguageService, useValue: mockLanguageService },
        { provide: AbstractStepComponent, useValue: mockParent },
      ],
      imports: [
        SimNumberComponent,
        NgxsModule.forRoot([CreateFleetLineState]),
        HttpClientTestingModule,
        TgFormsModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        NgxsModule.forRoot([CreateFleetLineState]),
      ],
    }).compileComponents();

    store = TestBed.inject(Store);

    jest.spyOn(CreateFleetLineFlowUtil, 'getInputDataForStep').mockImplementation(() => {
      return {} as InputInterface;
    });
    const firstStep = StepBuilder.builder(SIM_NUMBER).build();

    jest.spyOn(store, 'selectSnapshot').mockImplementation((param: object) => {
      if (param === StepFlowState.currentStep) {
        return firstStep;
      } else if (param === CreateFleetLineFlowSelectors.orderSimUrl) {
        return 'url';
      }
      return null;
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimNumberComponent);
    component = fixture.componentInstance;
    formBuilder = new FormBuilder();
    component.simNumberPrefix = '893203';
    component.form = formBuilder.group({
      'sim-number': new FormControl('', [
        SimCardNumberValidator.isValidSimCardWithIccidNumber(component.simNumberPrefix),
        Validators.maxLength(13),
      ]),
    });
    dataLayerService = TestBed.inject(DataLayerService);
    messageService = TestBed.inject(MessageService);
    simValidationService = TestBed.inject(SimValidationService);
    simStatusService = TestBed.inject(SimStatusService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('step component', () => {
    it('should initialize the component', () => {
      jest.spyOn(messageService, 'clearMessages');
      jest.spyOn(dataLayerService, 'addStepViewEvent');
      component.initializeStepComponent();

      expect(component.orderSimUrl).toBe('url');
      expect(dataLayerService.addStepViewEvent).toHaveBeenCalledWith({
        stepId: CreateFleetLineConstants.STEP_ID_SIM_SETUP,
        intent: CreateFleetLineConstants.EVENT_ATTRIBUTE_INTENT_CREATE_LINE,
      });
      expect(messageService.clearMessages).toHaveBeenCalledWith(CreateFleetLineConstants.MESSAGE_GROUP);
    });
  });

  describe('setStepData', () => {
    it('should set step data', () => {
      component.form.get(SIM_NUMBER)!.setValue('0003205646833');

      const result: string = component.setStepData();

      expect(result).toBe('0003205646833');
    });
  });

  describe('onStepSubmit', () => {
    it('should fail to submit', waitForAsync(() => {
      component.form.get(SIM_NUMBER)!.setValue(null);

      component.onStepSubmit().subscribe((success) => {
        expect(success).toBeFalsy();
      });
    }));

    it('should return true to submit', waitForAsync(() => {
      component.form.get(SIM_NUMBER)!.setValue('0003205646833');
      component.simNumberPrefix = '893203';

      // @ts-ignore
      jest
        .spyOn(simValidationService, 'validateSimIccid')
        .mockReturnValue(of(successfulValidationMock.getSuccessfulValidationMock));
      // @ts-ignore
      jest
        .spyOn(simStatusService, 'getSimStatus')
        .mockReturnValue(of(successfulValidationMock.getSuccessfulValidationMock));

      component.onStepSubmit().subscribe((success) => {
        expect(success).toBe(true);
      });

      expect(simValidationService.validateSimIccid).toHaveBeenCalledWith(
        'create-fleet-line',
        component.simNumberPrefix + component.iccid
      );
      expect(simStatusService.getSimStatus).toHaveBeenCalledWith(
        'create-fleet-line',
        component.simNumberPrefix + component.iccid
      );
    }));
  });
});
