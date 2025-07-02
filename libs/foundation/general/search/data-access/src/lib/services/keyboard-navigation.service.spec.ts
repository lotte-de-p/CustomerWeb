import { TestBed } from '@angular/core/testing';
import { KeyboardNavigationService } from './keyboard-navigation.service';

describe('KeyboardNavigationService', () => {
  let keyboardNavigationService: KeyboardNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    keyboardNavigationService = TestBed.inject(KeyboardNavigationService);
  });

  it('should be created', () => {
    expect(keyboardNavigationService).toBeTruthy();
  });

  it('should set and get focused list correctly', () => {
    const mockElement = document.createElement('div');
    keyboardNavigationService.setFocusedList(mockElement);
    expect(keyboardNavigationService.getFocusedList()).toBe(mockElement);
  });

  it('should set and get focused element correctly', () => {
    const mockElement = document.createElement('a');
    keyboardNavigationService.setFocusedElement(mockElement);
    expect(keyboardNavigationService.getFocusedElement()).toBe(mockElement);
  });
});
