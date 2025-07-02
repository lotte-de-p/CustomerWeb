import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PremiumServicesMemberNotificationComponent } from './premium-services-member-notification.component';
import { TranslateModule } from '@ngx-translate/core';

describe('PremiumServicesMemberNotificationComponent', () => {
  let component: PremiumServicesMemberNotificationComponent;
  let fixture: ComponentFixture<PremiumServicesMemberNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumServicesMemberNotificationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current premium limit', () => {
    component.currentPremiumLimit = 100;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const premiumLimitContent = element.querySelector('.text-weight--l')?.textContent;
    expect(premiumLimitContent).toBe(' ng.mobile-usage-limits.lbl.limit ');
  });
});
