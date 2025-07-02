import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { OutOfBundleLimitsDetailsComponent } from './out-of-bundle-limits-details.component';
import { OutOfBundle } from '@billing/mobile-usage-limits/data-access';

describe('OutOfBundleLimitsDetailsComponent', () => {
  let component: OutOfBundleLimitsDetailsComponent;
  let fixture: ComponentFixture<OutOfBundleLimitsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CommonModule,
        TgFormsModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [FormBuilder, TranslateService, { provide: 'Window', useValue: {} }, FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfBundleLimitsDetailsComponent);
    component = fixture.componentInstance;
    component.outOfBundleLimits = ['50', '100', '200', 'NO LIMIT'];
    component.ngOnInit();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get out of bundle limit correctly when limit is enabled', () => {
    const outOfBundle: OutOfBundle = {
      currentUsage: 10,
      limit: {
        enabled: true,
        value: 100,
      },
    };
    const limit = component.getOutOfBundleLimit(outOfBundle);
    expect(limit).toBe('100');
  });

  it('should get "NO LIMIT" correctly when limit is not enabled', () => {
    const outOfBundle: OutOfBundle = {
      currentUsage: 10,
      limit: {
        enabled: false,
        value: 100,
      },
    };
    const limit = component.getOutOfBundleLimit(outOfBundle);
    expect(limit).toBe('NO LIMIT');
  });

  it('should not show OOB details when cancel is called', () => {
    component.handleLimitUpdate(false);
    expect(component.showOutOfBundleLimit).toBe(false);
  });

  it('should emit outOfBundleLimitUpdated if isSubmit is true and submitted value is different from initialOutOfBundleLimit and not empty', () => {
    const emittedValues: unknown[] = [];
    component.outOfBundleLimitUpdated.subscribe((value) => emittedValues.push(value));

    component.outOfBundleLimitsForm.controls['selectedLimit'].setValue('newValue');

    component.handleLimitUpdate(true);

    expect(emittedValues.length).toBe(1);
    expect(emittedValues[0]).toEqual({ limits: 'newValue' });
    expect(component.showOutOfBundleLimit).toBe(false);
  });

  it('should emit empty outOfBundleLimitUpdated if isSubmit is true and submitted value is the same as initialOutOfBundleLimit', () => {
    const emittedValues: unknown[] = [];
    component.outOfBundleLimitUpdated.subscribe((value) => emittedValues.push(value));
    component.initialOutOfBundleLimit = 'initialValue';
    component.outOfBundleLimitsForm.controls['selectedLimit'].setValue('initialValue');

    component.handleLimitUpdate(true);

    expect(emittedValues.length).toBe(1);
    expect(component.showOutOfBundleLimit).toBe(false);
  });

  it('should emit empty outOfBundleLimitUpdated if isSubmit is true and submitted value is empty', () => {
    const emittedValues: unknown[] = [];
    component.outOfBundleLimitUpdated.subscribe((value) => emittedValues.push(value));

    component.outOfBundleLimitsForm.controls['selectedLimit'].setValue('');

    component.handleLimitUpdate(true);

    expect(emittedValues.length).toBe(1);
    expect(component.showOutOfBundleLimit).toBe(false);
  });

  it('should not emit outOfBundleLimitUpdated if isSubmit is false', () => {
    const emittedValues: unknown[] = [];
    component.outOfBundleLimitUpdated.subscribe((value) => emittedValues.push(value));

    component.outOfBundleLimitsForm.controls['selectedLimit'].setValue('newValue');

    component.handleLimitUpdate(false);

    expect(emittedValues.length).toBe(1);
    expect(component.showOutOfBundleLimit).toBe(false);
  });
});
