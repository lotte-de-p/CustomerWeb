import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FormsModule, NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DatepickerComponent } from '..';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerComponent],
      providers: [
        LanguageService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });

    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  }));

  describe('getLabel', function () {
    it('should get the option label', fakeAsync(() => {
      component.messageGroup = 'product-journey-flow';
      component.key = 'datepicker-test';
      component.customLabel = true;
      component.getLabel();
      expect(component.getLabel()).toBe('ng.product-journey-flow.datepicker-test.lbl');
    }));
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should set the selected date when writevalue is called', fakeAsync(() => {
    component.writeValue('23/01/2020');
    expect(component.value).toEqual('23/01/2020');
  }));
});
