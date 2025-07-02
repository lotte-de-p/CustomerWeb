import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { CookieService } from 'ngx-cookie-service';
import { CustomerRegistrationLocalComponent } from './customer-registration-local.component';

describe('CustomerRegistrationLocalComponent', () => {
  let component: CustomerRegistrationLocalComponent;
  let fixture: ComponentFixture<CustomerRegistrationLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [TranslateModule.forRoot(), StoreModule.forRoot(), EffectsModule.forRoot(), HttpClientModule],
      providers: [CookieService, { provide: 'Window', useValue: Window }],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerRegistrationLocalComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'customer-registration'`, () => {
    expect(component.title).toEqual('customer-registration');
  });
});
