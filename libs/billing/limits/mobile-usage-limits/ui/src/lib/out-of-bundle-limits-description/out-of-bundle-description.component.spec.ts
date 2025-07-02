import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { OutOfBundleLimitsDescriptionComponent } from './out-of-bundle-limits-description.component';
import { DebugElement } from '@angular/core';

describe('OutOfBundleLimitsDescriptionComponent', () => {
  let component: OutOfBundleLimitsDescriptionComponent;
  let fixture: ComponentFixture<OutOfBundleLimitsDescriptionComponent>;
  let descriptionElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfBundleLimitsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    descriptionElement = getDescriptionElement(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display out of bundle limits', () => {
    expect(descriptionElement.nativeElement.textContent.toString().trim()).toContain(
      'ng.mobile-usage-limits.lbl.out-of-bundle-description'
    );
  });

  it('should display out of bundle description if not a member', () => {
    component.isMember = false;
    fixture.detectChanges();
    expect(descriptionElement.nativeElement.textContent.toString().trim()).toContain(
      'ng.mobile-usage-limits.lbl.out-of-bundle-description'
    );
  });

  it('should display out of bundle description if a member', () => {
    component.isMember = true;
    fixture.detectChanges();
    descriptionElement = getDescriptionElement(fixture);
    expect(descriptionElement.nativeElement.textContent.toString().trim()).toContain(
      'ng.mobile-usage-limits.lbl.member-out-of-bundle-description'
    );
  });

  function getDescriptionElement(fixture: ComponentFixture<OutOfBundleLimitsDescriptionComponent>) {
    return fixture.debugElement.query(By.css('.font--body-regular'));
  }
});
