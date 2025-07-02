import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { PremiumServicesDescriptionComponent } from './premium-services-description.component';
import { DebugElement } from '@angular/core';

describe('PremiumServiceDescriptionComponent', () => {
  let component: PremiumServicesDescriptionComponent;
  let fixture: ComponentFixture<PremiumServicesDescriptionComponent>;
  let descriptionElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumServicesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    descriptionElement = getDescriptionElement(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display premium service limits', () => {
    expect(descriptionElement.nativeElement.textContent.toString().trim()).toContain(
      'ng.mobile-usage-limits.lbl.premium-services-description'
    );
  });

  it('should display premium services description if not a member', () => {
    component.isMember = false;
    fixture.detectChanges();
    expect(descriptionElement.nativeElement.textContent.toString().trim()).toContain(
      'ng.mobile-usage-limits.lbl.premium-services-description'
    );
  });

  it('should display premium services description if a member', () => {
    component.isMember = true;
    fixture.detectChanges();
    const descriptionElement = getDescriptionElement(fixture);
    expect(descriptionElement.nativeElement.textContent.toString().trim()).toContain(
      'ng.mobile-usage-limits.lbl.member-premium-services-description'
    );
  });

  function getDescriptionElement(fixture: ComponentFixture<PremiumServicesDescriptionComponent>) {
    return fixture.debugElement.query(By.css('.font--body-regular'));
  }
});
