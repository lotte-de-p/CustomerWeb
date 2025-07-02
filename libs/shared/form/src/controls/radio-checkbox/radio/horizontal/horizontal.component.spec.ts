import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgControl } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { FormErrorService, InputRadioHorizontalComponent } from '../../../../index';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HorizontalComponent', () => {
  let component: InputRadioHorizontalComponent;
  let fixture: ComponentFixture<InputRadioHorizontalComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  const languageService = new LanguageService({} as Window);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRadioHorizontalComponent],
      providers: [
        FormErrorService,
        { provide: LanguageService, useValue: languageService },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRadioHorizontalComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
