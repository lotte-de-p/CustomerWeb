import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { FormErrorService } from '../../errors';
import { ScrollToErrorDirective } from './scroll-to-error.directive';

@Component({
  template:
    `<form name='form1' scrollToError><input type='text' class='ng-invalid'/></form>` +
    `<form name='form2' scrollToError><input type='text'/></form>`,
})
class TestComponent {}

describe('ScrollToErrorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let formErrorService: FormErrorService;

  beforeEach(waitForAsync(() => {
    window.scroll = jest.fn();
    fixture = TestBed.configureTestingModule({
      declarations: [ScrollToErrorDirective, TestComponent],
      providers: [FormErrorService, { provide: 'Window', useValue: { scroll: jest.fn() } }],
      imports: [
        FormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(TestComponent);
    formErrorService = TestBed.inject(FormErrorService);
    fixture.detectChanges();
  }));

  describe('ScrollToFirstInvalidControl', function () {
    it('should scroll to first invalid input when form is submitted', () => {
      jest.spyOn(window, 'scroll');
      const element: HTMLElement = fixture.nativeElement.querySelector(`form[name='form1'] input`);
      const classes = element.classList;
      expect(classes.length).toBe(1);
      expect(classes).toContain('ng-invalid');
      formErrorService.submit$.subscribe(() => {
        expect(window.scroll).toHaveBeenCalled();
      });
    });

    it('should not scroll to when the form has no invalid inputs', () => {
      jest.spyOn(window, 'scroll');
      const element: HTMLElement = fixture.nativeElement.querySelector(`form[name='form2'] input`);
      const classes = element.classList;
      expect(classes.length).toBe(0);
      formErrorService.submit$.subscribe(() => {
        expect(window.scroll).not.toHaveBeenCalled();
      });
    });
  });

  describe('scrollToFirstInvalidControl', () => {
    it('should ', function () {
      const elementRef = new ElementRef(fixture.nativeElement);
      const scrollToErrorDirective = new ScrollToErrorDirective(elementRef, formErrorService);
      const unsubscribe = jest.spyOn(scrollToErrorDirective.formSubscription, 'unsubscribe');

      formErrorService.submit$.next(new Event('something happened'));
      scrollToErrorDirective.ngOnDestroy();

      expect(unsubscribe).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
