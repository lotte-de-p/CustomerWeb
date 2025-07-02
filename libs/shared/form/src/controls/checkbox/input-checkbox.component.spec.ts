import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { InputCheckboxComponent } from './input-checkbox.component';
import { FormErrorService } from '../../errors';

describe('InputCheckboxComponent', () => {
  let component: InputCheckboxComponent;
  let fixture: ComponentFixture<InputCheckboxComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputCheckboxComponent],
      providers: [
        LanguageService,
        FormErrorService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        FormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });

    fixture = TestBed.createComponent(InputCheckboxComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  }));

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should set the selected option when writevalue is called', fakeAsync(() => {
    component.writeValue('test');
    expect(component.value).toEqual('test');
  }));
});
