import { TestBed } from '@angular/core/testing';
import { Factors } from '@profile-management/data-access';
import { ManageAuthenticatorsIconComponent } from './manage-authenticators-icon.component';

describe('ManageAuthenticatorsIconComponent', () => {
  let component: ManageAuthenticatorsIconComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ManageAuthenticatorsIconComponent],
    });
    component = TestBed.createComponent(ManageAuthenticatorsIconComponent).componentInstance;
  });

  it('should map the type to the correct icon class', () => {
    expect(component.getIcon(Factors.ITSME)).toBe('itsme');
    expect(component.getIcon(Factors.PASSKEY)).toBe('icon-user-key');
    expect(component.getIcon(Factors.AUTHENTICATOR)).toBe('icon-qr-code-scan');
    expect(component.getIcon(Factors.SMS)).toBe('icon-message-dots');
  });
});
