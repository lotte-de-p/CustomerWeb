import { TestBed } from '@angular/core/testing';
import { NavigationMenuService } from './navigation-menu-service';
import { expect } from '@jest/globals';

describe('NavigationMenuService', () => {
  let navigationMenuService: NavigationMenuService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
    });
    navigationMenuService = TestBed.inject(NavigationMenuService);
  });

  it('should be created', () => {
    expect(navigationMenuService).toBeTruthy();
  });

  describe('Toggle NavigationMenu', () => {
    it('should verify toggleNavMenu to be true if nav status is set to true ', () => {
      navigationMenuService.setToggleNavMenu(true);
      navigationMenuService.getToggleNavMenu().subscribe((response) => {
        expect(response).toBe(true);
      });
    });

    it('should verify toggleNavMenu to be false if nav status is set to true ', () => {
      navigationMenuService.setToggleNavMenu(false);
      navigationMenuService.getToggleNavMenu().subscribe((response) => {
        expect(response).toBe(false);
      });
    });
  });
});
