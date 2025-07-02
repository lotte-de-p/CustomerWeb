import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorMessageWithLoginButtonComponent } from './error-message-with-login-button.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ErrorMessageWithLoginButtonComponent', () => {
  let component: ErrorMessageWithLoginButtonComponent;
  let fixture: ComponentFixture<ErrorMessageWithLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageWithLoginButtonComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageWithLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('login', () => {
    it('should emit login event', () => {
      jest.spyOn(component.loginEmitter, 'emit');
      component.login();
      expect(component.loginEmitter.emit).toHaveBeenCalled();
    });
  });
});
