import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSelectorComponent } from './account-selector.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateService } from '@ngx-translate/core';

describe('PriceChangeAccountSelectorComponent', () => {
  let component: AccountSelectorComponent;
  let fixture: ComponentFixture<AccountSelectorComponent>;
  let billingAccount: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [TranslateService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule, AccountSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    billingAccount = '123456';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isActive', () => {
    it('should return true when account number is the same', () => {
      component.accountSelected = billingAccount;
      const result = component.isActive(billingAccount);
      expect(result).toBe(true);
    });

    it('should return false when account number is different', () => {
      component.accountSelected = 'otherAccountNumber';
      const result = component.isActive(billingAccount);
      expect(result).toBe(false);
    });
  });

  describe('onSelectAccount', () => {
    it('should selected account', () => {
      component.onSelectAccount(billingAccount);
      expect(component.accountSelected).toEqual(billingAccount);
    });
  });
});
