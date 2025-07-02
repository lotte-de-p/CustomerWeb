import { SlideMenuComponent } from './slide-menu.component';

describe('SlideMenuComponent as Standalone with Jest', () => {
  let component: SlideMenuComponent;

  beforeEach(() => {
    // Directly instantiate the component as standalone components do not need module setup
    component = new SlideMenuComponent();
  });

  it('should emit closeMenu event when close is called, showMenu is true, and cancelClickOutside is false', () => {
    component.showMenu = true;
    component.cancelClickOutside = false;
    const closeMenuSpy = jest.spyOn(component.closeMenu, 'emit');
    component.close();
    expect(closeMenuSpy).toHaveBeenCalled();
  });

  it('should not emit closeMenu event when showMenu is false', () => {
    component.showMenu = false;
    const closeMenuSpy = jest.spyOn(component.closeMenu, 'emit');
    component.close();
    expect(closeMenuSpy).not.toHaveBeenCalled();
  });

  it('should not emit closeMenu event when cancelClickOutside is true', () => {
    component.showMenu = true;
    component.cancelClickOutside = true;
    const closeMenuSpy = jest.spyOn(component.closeMenu, 'emit');
    component.close();
    expect(closeMenuSpy).not.toHaveBeenCalled();
  });
});
