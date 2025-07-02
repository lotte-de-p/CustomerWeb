import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { MockComponent } from 'ng-mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DateOfBirthPickerComponent } from '.';
import { InputComponent } from '../..';

describe('DateOfBirthPickerComponent', () => {
  let fixture: ComponentFixture<DateOfBirthPickerComponent>;
  let formBuilder: FormBuilder;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [LanguageService],
      declarations: [DateOfBirthPickerComponent, MockComponent(InputComponent)],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateOfBirthPickerComponent);
    formBuilder = TestBed.inject(FormBuilder);
    fixture.componentInstance.form = formBuilder.group({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
