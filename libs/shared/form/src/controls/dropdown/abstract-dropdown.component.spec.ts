import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FormErrorService } from '../../errors';
import { AbstractDropdownComponent } from './abstract-dropdown.component';

describe('AbstractDropdownComponent', () => {
  let component: AbstractDropdownComponent;
  let fixture: ComponentFixture<AbstractDropdownComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [AbstractDropdownComponent],
      providers: [
        FormErrorService,
        LanguageService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });
    fixture = TestBed.createComponent(AbstractDropdownComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    component.key = 'test-dropdown';
    fixture.detectChanges();
  });

  it('should create', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should set the selected option when writevalue is called', waitForAsync(() => {
    component.writeValue('test');
    expect(component.value).toEqual('test');
  }));
});
