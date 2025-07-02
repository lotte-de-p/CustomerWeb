import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { ScrollFocusInvalidInputDirective } from '.';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('FocusInvalidInputDirective', () => {
  let directive: ScrollFocusInvalidInputDirective;
  const mockElementRef: ElementRef = {
    nativeElement: {
      querySelector: () => {
        // empty method
      },
    },
  };

  const mockElem = {
    focus: () => {
      // empty method
    },
    getBoundingClientRect: () => ({ top: 200 }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollFocusInvalidInputDirective],
      providers: [
        { provide: ElementRef, useClass: mockElementRef },
        { provide: 'Window', useValue: window },
      ],
    });
    directive = new ScrollFocusInvalidInputDirective(mockElementRef);
  });

  describe('onFormSubmit', () => {
    it('should focus element when error element found', () => {
      jest.spyOn(mockElementRef.nativeElement, 'querySelector').mockReturnValue(mockElem);
      window.scroll = jest.fn();
      mockElem.focus = jest.fn();
      directive.onFormSubmit();
      expect(mockElem.focus).toHaveBeenCalled();
      expect(window.scroll).toHaveBeenCalled();
    });

    it('should not focus element when error element is null', () => {
      jest.spyOn(mockElementRef.nativeElement, 'querySelector').mockReturnValue(null);
      window.scroll = jest.fn();
      mockElem.focus = jest.fn();
      directive.onFormSubmit();
      expect(mockElem.focus).toHaveBeenCalledTimes(0);
      expect(window.scroll).not.toHaveBeenCalled();
    });
  });

  describe('onClick', () => {
    it('should focus element when target element has error element', () => {
      jest.spyOn(document, 'querySelector').mockReturnValue(mockElem as HTMLElement);
      window.scroll = jest.fn();
      mockElem.focus = jest.fn();
      directive.onClick(mockElementRef.nativeElement);
      expect(mockElem.focus).toHaveBeenCalled();
      expect(window.scroll).toHaveBeenCalled();
    });

    it('should not focus element when target element has no error element', () => {
      jest.spyOn(document, 'querySelector').mockReturnValue(null);
      window.scroll = jest.fn();
      mockElem.focus = jest.fn();
      directive.onClick(mockElementRef.nativeElement);
      expect(mockElem.focus).toHaveBeenCalledTimes(0);
      expect(window.scroll).not.toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
