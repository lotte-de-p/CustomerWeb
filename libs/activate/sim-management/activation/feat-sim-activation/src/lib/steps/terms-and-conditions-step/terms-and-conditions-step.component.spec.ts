import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimManagementTermsAndConditionsStepComponent } from './terms-and-conditions-step.component';
import {
  ActivationStep,
  ActivationType,
  ImageSrcInterceptorDirective,
  SimManagementFacade,
} from '@sim-management/data-access';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SimManagementSkeletonComponent, SimManagementNotificationComponent } from '@sim-management/ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SimManagementTermsAndConditionsStepComponent', () => {
  let component: SimManagementTermsAndConditionsStepComponent;
  let fixture: ComponentFixture<SimManagementTermsAndConditionsStepComponent>;
  let facade: SimManagementFacade;

  beforeEach(() => {
    const facadeMock = {
      actionResultMessage$: of(undefined),
      activateSim: jest.fn(),
      setActivationStep: jest.fn(),
      setActionResultMessage: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        TranslateModule.forRoot(),
        EffectsModule.forRoot(),
        SimManagementSkeletonComponent,
        SimManagementNotificationComponent,
        StoreModule.forRoot(),
        HttpClientTestingModule,
        ImageSrcInterceptorDirective,
      ],
      providers: [
        { provide: SimManagementFacade, useValue: facadeMock },
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SimManagementTermsAndConditionsStepComponent);
    component = fixture.componentInstance;
    component.activationParams = {
      msisdn: '0468436',
      accountNumberThirdParty: '',
      accountType: '',
      type: ActivationType.E_SIM,
      orderNumber: '',
      iccidThirdParty: '',
      iccid: '',
    };
    facade = TestBed.inject(SimManagementFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize actionResultMessage$ on ngOnInit', () => {
    component.ngOnInit();
    expect(component.actionResultMessage$).toBe(facade.actionResultMessage$);
  });

  it('should call activateSim on onSubmitClick', () => {
    component.onSubmitClick();
    expect(facade.activateSim).toHaveBeenCalledWith(component.activationParams);
  });

  it('should go PORTING on onBackClick when type = E_SIM', () => {
    component.activationParams.type = ActivationType.E_SIM;
    component.onBackClick();

    expect(facade.setActivationStep).toHaveBeenCalledWith(ActivationStep.PORTING);
  });
});
