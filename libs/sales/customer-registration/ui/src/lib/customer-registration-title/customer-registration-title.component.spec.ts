import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegistrationTitleComponent } from './customer-registration-title.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('CustomerRegistrationTitleComponent', () => {
  let component: CustomerRegistrationTitleComponent;
  let fixture: ComponentFixture<CustomerRegistrationTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerRegistrationTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
