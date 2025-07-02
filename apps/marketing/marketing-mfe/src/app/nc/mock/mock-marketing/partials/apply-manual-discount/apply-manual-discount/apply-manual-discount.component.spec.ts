import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

import { ApplyManualDiscountComponent } from './apply-manual-discount.component';
import { BrowserModule } from '@angular/platform-browser';
const spyOn = jest.spyOn;

describe('ApplyManualDiscountComponent', () => {
  let formBuilder: FormBuilder;
  let fbGroup: FormGroup;
  let component: ApplyManualDiscountComponent;
  let fixture: ComponentFixture<ApplyManualDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [FormBuilder, { provide: 'Window', useValue: window }],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyManualDiscountComponent);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    fbGroup = formBuilder.group({});
    component.parentForm = fbGroup;
    component.idx = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', function () {
    it('should add controls', () => {
      component.parentForm = fbGroup;
      spyOn(component.parentForm, 'addControl');
      component.ngOnInit();
      expect(component.parentForm.addControl).toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', function () {
    it('should remove controls', () => {
      component.parentForm = fbGroup;
      spyOn(component.parentForm, 'removeControl');
      component.ngOnDestroy();
      expect(component.parentForm.removeControl).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
