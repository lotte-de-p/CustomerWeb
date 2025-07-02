import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { InputComponent } from './input.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      providers: [
        LanguageService,
        { provide: 'Window', useValue: {} },
        { provide: NgControl, useValue: formControlSpy },
        provideEnvironmentNgxMask(),
      ],
      imports: [
        FormsModule,
        NgxMaskDirective,
        NgxMaskPipe,
        CommonModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    component.key = 'test-input';
    fixture.detectChanges();
  }));

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));

  it('should set the selected option when writevalue is called', fakeAsync(() => {
    component.writeValue('test');
    expect(component.value).toEqual('test');
  }));

  describe('updateValue', () => {
    it('should update call eventEmitter', () => {
      const changeInputSpy = jest.spyOn(component.changeInput, 'emit');
      component.updateValue('someValue');
      expect(changeInputSpy).toHaveBeenCalledWith('someValue');
    });
  });
});
