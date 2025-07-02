import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [TranslateModule.forRoot(), LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prevent login if form is not valid', () => {
    expect(component.loginForm.valid).toBe(false);
    expect(component.loginForm.touched).toBe(false);
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(component.loginForm.touched).toBe(true);
  });

  it('should send event if form is valid', () => {
    jest.spyOn(component.login, 'emit');
    expect(component.loginForm.valid).toBe(false);
    component.loginForm.setValue({
      customerNumber: '123456',
      lastName: 'Test',
    });
    fixture.detectChanges();
    expect(component.loginForm.valid).toBe(true);
    fixture.nativeElement.querySelector('button').click();
    expect(component.login.emit).toHaveBeenCalledWith({
      customerNumber: '123456',
      lastName: 'Test',
    });
  });
});
