import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DtvBoxSlideMenuComponent } from './dtv-box-slide-menu.component';

describe('DtvBoxSlideMenuComponent', () => {
  let component: DtvBoxSlideMenuComponent;
  let fixture: ComponentFixture<DtvBoxSlideMenuComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(DtvBoxSlideMenuComponent);
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
