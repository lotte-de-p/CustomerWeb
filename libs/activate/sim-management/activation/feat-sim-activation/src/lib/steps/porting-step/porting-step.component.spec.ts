import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimManagementPortingStepComponent } from './porting-step.component';
import { ImageSrcInterceptorDirective, SimManagementFacade } from '@sim-management/data-access';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { SimManagementSkeletonComponent, SimManagementNotificationComponent } from '@sim-management/ui';

describe('SimManagementPortingStepComponent', () => {
  let component: SimManagementPortingStepComponent;
  let fixture: ComponentFixture<SimManagementPortingStepComponent>;

  beforeEach(async () => {
    const facadeMock = {
      actionResultMessage$: of(undefined),
      activateSim: jest.fn(),
      setActivationStep: jest.fn(),
      setActionResultMessage: jest.fn(),
    };

    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: SimManagementFacade, useValue: facadeMock },
        {
          provide: 'Window',
          useValue: {},
        },
      ],
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimManagementPortingStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('SimManagementPortingStepComponent', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
  });
});
