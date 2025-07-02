import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PremiumServicesHeaderComponent } from './premium-services-header.component';
import { TranslateModule } from '@ngx-translate/core';

describe('PremiumServicesHeaderComponent', () => {
  let component: PremiumServicesHeaderComponent;
  let fixture: ComponentFixture<PremiumServicesHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumServicesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display premium service limits', () => {
    const headingElement = fixture.debugElement.query(By.css('.heading--nomargin'));
    expect(headingElement.nativeElement.textContent).toContain('ng.mobile-usage-limits.title.premium-services-limit');
  });
});
