import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DomainNameComponent } from './domain-name.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('DomainNameComponent', () => {
  let component: DomainNameComponent;
  let fixture: ComponentFixture<DomainNameComponent>;
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
        HttpClientTestingModule,
      ],
      providers: [FormBuilder, { provide: 'Window', useValue: window }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainNameComponent);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    fbGroup = formBuilder.group({});
    component.parentForm = fbGroup;
    component.idx = 1;
    fixture.detectChanges();
  });

  it('should create the component', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));

  describe('ngOnInit', function () {
    it('should add controls', () => {
      component.parentForm = fbGroup;
      component.parentForm.addControl = jest.fn();
      component.ngOnInit();
      expect(component.parentForm.addControl).toHaveBeenCalledTimes(3);
    });
  });

  describe('ngOnDestroy', function () {
    it('should remove controls', () => {
      component.parentForm = fbGroup;
      component.parentForm.removeControl = jest.fn();
      component.ngOnDestroy();
      expect(component.parentForm.removeControl).toHaveBeenCalledTimes(3);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
