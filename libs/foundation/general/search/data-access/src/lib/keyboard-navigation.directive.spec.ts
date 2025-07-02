import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { KeyboardNavigationDirective } from './keyboard-navigation.directive';
import { KeyboardNavigationService } from './services/keyboard-navigation.service';

export class MockElementRef extends ElementRef {
  override nativeElement = {};
}

describe('KeyboardNavigationDirective', () => {
  let keyboardNavigationService: KeyboardNavigationService;
  let keyboardNavigationDirective: KeyboardNavigationDirective;
  let mockWrapper: HTMLElement;
  let mockFocusedList: HTMLElement;
  let mockSecondList: HTMLElement;
  let mockFocusedElement: HTMLElement;
  let mockElement: HTMLElement;

  beforeEach(() => {
    mockWrapper = document.createElement('div');
    mockFocusedList = document.createElement('ul');
    mockSecondList = document.createElement('ul');
    mockFocusedElement = document.createElement('li');
    mockElement = document.createElement('li');

    mockWrapper.appendChild(mockFocusedList);
    mockWrapper.appendChild(mockSecondList);
    mockSecondList.appendChild(mockElement);

    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        KeyboardNavigationDirective,
        KeyboardNavigationService,
        {
          provide: ElementRef,
          useClass: MockElementRef,
        },
      ],
      imports: [],
    }).compileComponents();

    keyboardNavigationService = TestBed.inject(KeyboardNavigationService);
    keyboardNavigationDirective = TestBed.inject(KeyboardNavigationDirective);

    keyboardNavigationDirective['wrapper'] = mockWrapper;
    keyboardNavigationDirective['focusedList'] = mockFocusedList;
    keyboardNavigationDirective['focusedElement'] = mockFocusedElement;
  });

  it('should be created', () => {
    expect(keyboardNavigationDirective).toBeTruthy();
    expect(keyboardNavigationService).toBeTruthy();
    expect(keyboardNavigationDirective['wrapper']).toBe(mockWrapper);
    expect(keyboardNavigationDirective['focusedList']).toBe(mockFocusedList);
    expect(keyboardNavigationDirective['focusedElement']).toBe(mockFocusedElement);
  });

  it('should initialize wrapper, focusedList, and focusedElement on ngAfterViewChecked', () => {
    jest.spyOn(keyboardNavigationService, 'getFocusedList').mockReturnValue(mockFocusedList);
    jest.spyOn(keyboardNavigationService, 'getFocusedElement').mockReturnValue(mockFocusedElement);

    keyboardNavigationDirective.ngAfterViewChecked();

    expect(keyboardNavigationDirective['focusedList']).toBe(mockFocusedList);
    expect(keyboardNavigationDirective['focusedElement']).toBe(mockFocusedElement);
  });

  it('should handle Tab key correctly', () => {
    const mockEvent = new KeyboardEvent('keydown', { key: 'Tab' });

    const preventDefaultSpy = jest.spyOn(mockEvent, 'preventDefault');
    const setFocusedListSpy = jest.spyOn(keyboardNavigationService, 'setFocusedList');
    const setFocusedElementSpy = jest.spyOn(keyboardNavigationService, 'setFocusedElement');

    keyboardNavigationDirective.handleKeyboardEvent(mockEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(setFocusedListSpy).toHaveBeenCalledWith(mockSecondList);
    expect(setFocusedElementSpy).toHaveBeenCalledWith(mockElement);
  });

  it('should handle ArrowUp key correctly', () => {
    const mockEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    const mockListItems = [document.createElement('li'), document.createElement('li')];

    const preventDefaultSpy = jest.spyOn(mockEvent, 'preventDefault');
    const setFocusedElementSpy = jest.spyOn(keyboardNavigationService, 'setFocusedElement');

    // @ts-expect-error FIXME: Should not be escaped
    mockFocusedList.querySelectorAll = jest.fn(() => mockListItems);
    Array.from = jest.fn(() => mockListItems);

    keyboardNavigationDirective.handleKeyboardEvent(mockEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(setFocusedElementSpy).toHaveBeenCalledWith(mockListItems[1]);
  });

  it('should handle ArrowDown key correctly', () => {
    const mockEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    const mockListItems = [document.createElement('li'), document.createElement('li')];

    const preventDefaultSpy = jest.spyOn(mockEvent, 'preventDefault');
    const setFocusedElementSpy = jest.spyOn(keyboardNavigationService, 'setFocusedElement');

    // @ts-expect-error FIXME: Should not be escaped
    mockFocusedList.querySelectorAll = jest.fn(() => mockListItems);
    Array.from = jest.fn(() => mockListItems);

    keyboardNavigationDirective.handleKeyboardEvent(mockEvent);
    keyboardNavigationDirective.handleKeyboardEvent(mockEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(setFocusedElementSpy).toHaveBeenCalledWith(mockListItems[1]);
  });
});
