import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ManageLimitsComponent } from '../manage-limits/manage-limits.component';

describe('ManageLimitsComponent', () => {
  let component: ManageLimitsComponent;
  let fixture: ComponentFixture<ManageLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit true when onClick is called', () => {
    const event = new Event('click');
    jest.spyOn(event, 'stopPropagation');
    jest.spyOn(component.clickEvent, 'emit');

    component.onClick(event);

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(component.clickEvent.emit).toHaveBeenCalledWith(true);
  });
});
