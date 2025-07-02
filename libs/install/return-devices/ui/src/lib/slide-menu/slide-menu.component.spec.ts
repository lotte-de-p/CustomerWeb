import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideMenuComponent } from './slide-menu.component';

describe('SlideMenuComponent', () => {
  let component: SlideMenuComponent;
  let fixture: ComponentFixture<SlideMenuComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(SlideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closeMenu event when close is called', () => {
    jest.spyOn(component.closeMenu, 'emit');
    component.close();
    expect(component.closeMenu.emit).not.toHaveBeenCalled();
    component.showMenu = true;
    component.close();
    expect(component.closeMenu.emit).toHaveBeenCalled();
  });
});
