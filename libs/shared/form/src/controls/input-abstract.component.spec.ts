import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '@telenet/ng-lib-page';
import { FormsModule, NgControl } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { InputAbstractComponent } from '.';
import { FormErrorService, MessageGroupDirective } from '../errors';

const messageGroup = 'test-message-group';
describe('InputAbstractComponent', () => {
  let component: InputAbstractComponent;
  let fixture: ComponentFixture<InputAbstractComponent>;
  const formControlSpy = {
    get valueChanges() {
      return of(true);
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputAbstractComponent, MessageGroupDirective],
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
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(InputAbstractComponent);
    component = fixture.componentInstance;
    jest.spyOn(formControlSpy, 'valueChanges', 'get').mockReturnValue(new Observable());
    fixture.detectChanges();
  });

  describe('initMessageGroup', () => {
    it('should not change the message group when it is set', () => {
      component.messageGroup = messageGroup;
      component.initMessageGroup();
      expect(component.messageGroup).toBe(messageGroup);
    });

    it('should set the form directives messageGroup if one exists and no message group is set', () => {
      component.messageGroup = '';
      component.initMessageGroup();
      expect(component.messageGroup).toEqual('');
    });
  });

  describe('setError', () => {
    it('should set the error message', () => {
      component.setError({ required: true });
      expect(component.error).toBe('required');
    });
  });
});
