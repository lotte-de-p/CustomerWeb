import { TestBed } from '@angular/core/testing';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { ClickPreventDefaultDirective } from '.';

describe('ClickPreventDefaultDirective', () => {
  let directive: ClickPreventDefaultDirective;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickPreventDefaultDirective],
    });
    directive = new ClickPreventDefaultDirective();
  });

  describe('onClick', () => {
    it('should prevent default when target element has directive attribute', () => {
      const mouseEvent = {} as MouseEvent;
      mouseEvent.preventDefault = jest.fn();
      directive.onClick(mouseEvent);
      expect(mouseEvent.preventDefault).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
