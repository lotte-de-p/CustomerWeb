import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PremiumServicesAdjustLimitComponent } from './premium-services-adjust-limit.component';
import { TranslateModule } from '@ngx-translate/core';

describe('PremiumServicesAdjustLimitComponent', () => {
  let component: PremiumServicesAdjustLimitComponent;
  let fixture: ComponentFixture<PremiumServicesAdjustLimitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumServicesAdjustLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit isAdjustLimitClicked event with isEditMode true onEdit', () => {
    const onEditSpy = jest.spyOn(component.isAdjustLimitClicked, 'emit');
    const linkElement = fixture.debugElement.query(By.css('.link'));
    linkElement.nativeElement.click();
    expect(onEditSpy).toHaveBeenCalledWith({ isEditMode: true });
  });

  it('should prevent default action onEdit', () => {
    const eventMock: Partial<Event> = { preventDefault: jest.fn() };
    component.onEdit(eventMock as Event);
    expect(eventMock.preventDefault).toHaveBeenCalled();
  });

  it('should display currentPremiumLimit in the template', () => {
    component.currentPremiumLimit = 100;
    fixture.detectChanges();
    const priceElement = fixture.debugElement.query(By.css('.mobile-usage-limits__premium-edit .text-weight--l'));
    expect(priceElement.nativeElement.textContent).toContain(' ng.mobile-usage-limits.lbl.limit ');
  });

  it('should emit isAdjustLimitClicked event with isEditMode true onEdit', () => {
    const onEditSpy = jest.spyOn(component.isAdjustLimitClicked, 'emit');
    const linkElement = fixture.debugElement.query(By.css('.link'));
    linkElement.nativeElement.click();
    expect(onEditSpy).toHaveBeenCalled();
  });

  it('should have a link with href="javascript:void(0)"', () => {
    const linkElement = fixture.debugElement.query(By.css('.link'));
    expect(linkElement.nativeElement.href).toBe('javascript:void(0)');
  });

  it('should have a link with "Edit" text', () => {
    const linkElement = fixture.debugElement.query(By.css('.link'));
    expect(linkElement.nativeElement.textContent).toContain('ng.mobile-usage-limits.lnk.edit');
  });
});
