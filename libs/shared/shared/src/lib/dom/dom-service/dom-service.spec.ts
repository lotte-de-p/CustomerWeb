import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DomService } from './dom-service';
import { cleanStylesFromDom } from '../../style/clean-style-tags.util';

const SECTION_TIME = 'section-time';
const CLASS_SECTION_TIME = '.section-time';
describe('DomService', () => {
  let domService: DomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomService],
    });
    domService = TestBed.inject(DomService);
  });

  describe('scrollToElement', () => {
    it('should scroll to selected element', fakeAsync(() => {
      const dummyElement = document.createElement('div');
      dummyElement.className = SECTION_TIME;
      jest.spyOn(document, 'querySelector').mockReturnValue(dummyElement);
      dummyElement.scrollIntoView = jest.fn();
      domService.scrollToElement(CLASS_SECTION_TIME);
      tick();
      expect(dummyElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' });
    }));
  });

  describe('scrollToStartElement', () => {
    it('should scroll to selected element at start', fakeAsync(() => {
      const dummyElement = document.createElement('div');
      dummyElement.className = SECTION_TIME;
      jest.spyOn(document, 'querySelector').mockReturnValue(dummyElement);
      dummyElement.scrollIntoView = jest.fn();
      domService.scrollToStartElement(CLASS_SECTION_TIME);
      tick();
      expect(dummyElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    }));
  });

  describe('scrollToTop', () => {
    it('should scroll to selected top element', fakeAsync(() => {
      const dummyElement = document.createElement('div');
      dummyElement.id = 'app';
      jest.spyOn(document, 'querySelector').mockReturnValue(dummyElement);
      dummyElement.scrollIntoView = jest.fn();
      domService.scrollToTop();
      tick();
      expect(dummyElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    }));
  });

  describe('getDomElement', () => {
    it('should return the called DOM element', fakeAsync(() => {
      const dummyElement = document.createElement('div');
      dummyElement.id = 'app';

      jest.spyOn(document, 'querySelector').mockReturnValue(dummyElement);
      dummyElement.scrollIntoView = jest.fn();

      const actual = domService.getDomElement('#app');

      tick();
      expect(actual).toBeDefined();
      expect(actual?.id).toEqual('app');
    }));
  });

  describe('toggleBodyOverflow', () => {
    it('should toggle the overflow to hidden when passed true', fakeAsync(() => {
      const bodyElement = document.createElement('body');
      bodyElement.style.overflow = '';

      jest.spyOn(document, 'querySelector').mockReturnValue(bodyElement);

      domService.toggleBodyOverflow(true);

      tick();
      expect(bodyElement.style.overflow).toEqual('hidden');
    }));

    it('should not toggle the overflow when passed false', fakeAsync(() => {
      const bodyElement = document.createElement('body');
      bodyElement.style.overflow = '';

      jest.spyOn(document, 'querySelector').mockReturnValue(bodyElement);

      domService.toggleBodyOverflow(false);

      tick();
      expect(bodyElement.style.overflow).toBe('');
    }));
  });

  describe('scrollElementToTop', () => {
    it('should scroll the element to top', fakeAsync(() => {
      const dummyElement = document.createElement('div');
      dummyElement.className = SECTION_TIME;
      jest.spyOn(document, 'querySelector').mockReturnValue(dummyElement);
      dummyElement.scrollIntoView = jest.fn();

      domService.scrollElementToTop(CLASS_SECTION_TIME);

      tick();
      expect(dummyElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    }));
  });

  describe('getDomElement', () => {
    it('should get the body html element', () => {
      const htmlBodyElement = document.createElement('body');
      jest.spyOn(document, 'querySelector').mockReturnValue(htmlBodyElement);
      expect(domService.getDomElement('body')?.outerHTML).toContain('body');
    });
    it('should get dom element based on selector', () => {
      const dummyHtmlElement = document.createElement('div');
      dummyHtmlElement.className = 'anySelector';
      jest.spyOn(document, 'querySelector').mockReturnValue(dummyHtmlElement);
      expect(domService.getDomElement('.anySelector')?.className).toBe('anySelector');
    });
  });

  describe('scrollIntoViewBasedOnId', () => {
    it('should scroll into view based on id', () => {
      const dummyElement = document.createElement('div');
      dummyElement.id = '123';
      jest.spyOn(document, 'getElementById').mockReturnValue(dummyElement);
      dummyElement.scrollIntoView = jest.fn();
      domService.scrollIntoViewBasedOnId('123');
      expect(dummyElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' });
    });
  });
  xdescribe('toggleBodyOverflow', () => {
    it('should hide body overflow when param is true', function () {
      domService.toggleBodyOverflow(true);
      expect(domService.getDomElement('body')?.outerHTML).toContain('overflow: hidden;');
    });
    it('should reset body overflow when param is false', function () {
      domService.toggleBodyOverflow(false);
      expect(domService.getDomElement('body')?.outerHTML).not.toContain('overflow: hidden');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
