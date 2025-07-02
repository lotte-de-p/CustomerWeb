import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { ContactCustomerServiceComponent } from './contact-customer-service.component';

describe('ContactCustomerServiceComponent', () => {
  let component: ContactCustomerServiceComponent;
  let fixture: ComponentFixture<ContactCustomerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TgTranslateTestingModule.forRoot()],
    }).compileComponents();
    fixture = TestBed.createComponent(ContactCustomerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
