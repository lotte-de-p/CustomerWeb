import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DiscountFormComponent } from './discount-form.component';
import { BrowserModule } from '@angular/platform-browser';

describe('DiscountFormComponent', () => {
  let component: DiscountFormComponent;
  let fixture: ComponentFixture<DiscountFormComponent>;
  let formBuilder: FormBuilder;
  let fbGroup: FormGroup;

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
    fixture = TestBed.createComponent(DiscountFormComponent);
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
      component.parentForm.addControl = jest.fn();
      component.ngOnInit();
      expect(component.parentForm.addControl).toHaveBeenCalledTimes(2);
    });
  });

  describe('ngOnDestroy', function () {
    it('should remove controls', () => {
      component.parentForm = fbGroup;
      component.parentForm.removeControl = jest.fn();
      component.ngOnDestroy();
      expect(component.parentForm.removeControl).toHaveBeenCalledTimes(2);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
