import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasySwitchSelectionOptionComponent } from './easy-switch-selection-option.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('EasySwitchSelectionOptionComponent', () => {
  let component: EasySwitchSelectionOptionComponent;
  let fixture: ComponentFixture<EasySwitchSelectionOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasySwitchSelectionOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not display badgeText when it is null', () => {
    component.badgeText = null;
    fixture.detectChanges();

    const badgeElement = fixture.debugElement.query(By.css('.badge-class-selector'));
    expect(badgeElement).toBeNull(); // Expect no badge element rendered
  });
});
