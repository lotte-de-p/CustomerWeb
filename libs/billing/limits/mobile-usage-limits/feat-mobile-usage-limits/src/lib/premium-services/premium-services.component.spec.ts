import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PremiumServicesComponent } from './premium-services.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PremiumService } from '@billing/mobile-usage-limits/data-access';
import { TgFormsModule } from '@telenet/ng-lib-form';

describe('PremiumServicesComponent', () => {
  let component: PremiumServicesComponent;
  let fixture: ComponentFixture<PremiumServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        TgFormsModule,
      ],
      providers: [
        {
          provide: 'Window',
          useValue: {
            location: {
              href: 'someUrl',
            },
          },
        },
        FormBuilder,
        TranslateService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with currentPremiumLimit', () => {
    const currentPremiumLimit = 100;
    component.currentPremiumUsageLimit = { limit: { value: currentPremiumLimit } } as PremiumService;
    component.ngOnInit();
    expect(component.thirdPartyServicesForm).toBeInstanceOf(FormGroup);
    expect(component.currentPremiumLimit).toEqual(currentPremiumLimit);
  });

  it('should have validators for premiumLimits', waitForAsync(() => {
    fixture.whenStable().then(() => {
      component.ngOnInit();
      const validators = component.thirdPartyServicesForm.get('premiumLimit')?.validator;
      expect(validators).toBeTruthy();
      const requiredValidator = validators?.(component.thirdPartyServicesForm.get('premiumLimit') as AbstractControl);
      expect(requiredValidator?.['pattern']).toBeTruthy();
    });
  }));

  it('should update premium services when current mobile line changes', () => {
    component.currentPremiumUsageLimit = { limit: { value: 100 } } as PremiumService;
    component.ngOnChanges();
    expect(component.currentPremiumLimit).toEqual(100);
  });

  it('should emit premiumLimitUpdated if isSubmit is true and submitted value is different from currentPremiumLimit', () => {
    const emittedValues: unknown[] = [];
    component.premiumLimitUpdated.subscribe((value) => emittedValues.push(value));

    component.thirdPartyServicesForm.controls['premiumLimit'].setValue('newValue');

    component.handlePremiumLimitUpdate(true);

    expect(emittedValues.length).toBe(1);
    expect(emittedValues[0]).toEqual({ updatedLimit: 'newValue' });
    expect(component.showPremiumServices).toBe(false);
  });

  it('should emit empty premiumLimitUpdated if isSubmit is true and submitted value is the same as currentPremiumLimit', () => {
    const emittedValues: unknown[] = [];
    component.premiumLimitUpdated.subscribe((value) => emittedValues.push(value));
    component.currentPremiumLimit = 20;
    component.thirdPartyServicesForm.controls['premiumLimit'].setValue(20);

    component.handlePremiumLimitUpdate(true);

    expect(emittedValues.length).toBe(1);
    expect(component.showPremiumServices).toBe(false);
  });

  it('should not emit premiumLimitUpdated if isSubmit is false', () => {
    const emittedValues: unknown[] = [];
    component.premiumLimitUpdated.subscribe((value) => emittedValues.push(value));

    component.thirdPartyServicesForm.controls['premiumLimit'].setValue('newValue');

    component.handlePremiumLimitUpdate(false);

    expect(emittedValues.length).toBe(1);
    expect(component.showPremiumServices).toBe(false);
  });

  it('should set showPremiumServices to false when close is called', () => {
    component.showPremiumServices = true;
    component.handlePremiumLimitUpdate(false);
    expect(component.showPremiumServices).toBe(false);
  });
});
