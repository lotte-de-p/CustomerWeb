import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { InputRadioWithInputVerticalComponent } from '.';
import { MarginDirective, FormErrorService } from '../../../../../';
import { AbstractRadioComponent } from '../..';
import { MockDirective } from 'ng-mocks';

describe('InputRadioWithInputVerticalComponent', () => {
  let component: InputRadioWithInputVerticalComponent;
  let fixture: ComponentFixture<InputRadioWithInputVerticalComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRadioWithInputVerticalComponent, AbstractRadioComponent, MockDirective(MarginDirective)],
      providers: [
        FormErrorService,
        LanguageService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputRadioWithInputVerticalComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
