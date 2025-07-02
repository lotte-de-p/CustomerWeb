import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectorRef, Component, ElementRef, NO_ERRORS_SCHEMA, Renderer2, Type } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { LoadPageDirective } from './load-page.directive';
import { DOCUMENT } from '@angular/common';

@Component({
  template: ` <div [tgLoadPage]="url"></div> `,
})
class TestComponent {
  url: string;
}

interface MockLoadDirective {
  onClick($event: Event): void;
  showOverlayContent(): void;
  recompileAngularJS(): void;
  isOverlay(url: string): boolean;
}

class MockElementRef implements ElementRef {
  nativeElement: {
    parentElement: { someKey: 'someValue' };
  };
}

const mockWindow = {
  ...window,
  open: jest.fn,
  angular: {
    element: () => {
      // empty method
    },
  },
};

const overlayUrl = 'link.overlay-content';
const noneOverlayUrl = 'link';

describe('LoadPageDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directive: LoadPageDirective | MockLoadDirective;
  let renderer2: Renderer2;
  let httpMock: HttpTestingController;
  let doc: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadPageDirective, TestComponent],
      providers: [
        LanguageService,
        LoadPageDirective,
        Renderer2,
        ChangeDetectorRef,
        { provide: 'Window', useValue: mockWindow },
        { provide: ElementRef, useClass: MockElementRef },
      ],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
    });

    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    fixture = TestBed.createComponent(TestComponent);

    renderer2 = TestBed.inject(Renderer2);
    component = fixture.componentInstance;
    directive = TestBed.inject(LoadPageDirective);
    httpMock = TestBed.inject(HttpTestingController);
    renderer2 = fixture.componentRef.injector.get(Renderer2 as Type<Renderer2>);
    jest.spyOn(renderer2, 'setAttribute').mockImplementation();
    doc = TestBed.inject(DOCUMENT);

    fixture.detectChanges();
  });

  describe('element clicked', () => {
    beforeEach(() => {
      directive = fixture.debugElement
        .query(By.directive(LoadPageDirective))
        .injector.get(LoadPageDirective) as LoadPageDirective;
    });

    it('should call showOverlayContent if the url contains overlay identifier', () => {
      const isOverlay = jest.spyOn(directive as MockLoadDirective, 'isOverlay');
      const showOverlayContent = jest.spyOn(directive as MockLoadDirective, 'showOverlayContent');

      component.url = overlayUrl;
      fixture.detectChanges();

      const clickEvent = new MouseEvent('click');
      directive.onClick(clickEvent);

      expect(directive['isOverlay']).toHaveBeenCalled();
      expect(isOverlay).toBeTruthy();
      expect(showOverlayContent).toHaveBeenCalled();
    });

    it('should open the link if the url does not contain an overlay identifier', () => {
      const isOverlay = jest.spyOn(directive as MockLoadDirective, 'isOverlay');
      jest.spyOn(directive['window'] as Window, 'open');

      component.url = noneOverlayUrl;
      fixture.detectChanges();

      const clickEvent = new MouseEvent('click');
      directive.onClick(clickEvent);

      console.log(isOverlay);
      expect(directive['isOverlay']).toHaveBeenCalled();
      expect(directive['window'].open).toHaveBeenCalledWith('link', '_self');
    });
  });

  describe('show Overlay', () => {
    beforeEach(() => {
      directive = fixture.debugElement
        .query(By.directive(LoadPageDirective))
        .injector.get(LoadPageDirective) as LoadPageDirective;
    });

    it('should return true if link contains an overlay identifier', () => {
      const isOverlay = directive['isOverlay'](overlayUrl);

      expect(isOverlay).toBeTruthy();
    });

    it('should return false if link does not contain an overlay identifier', () => {
      const isOverlay = directive['isOverlay'](noneOverlayUrl);

      expect(isOverlay).toBeFalsy();
    });
  });

  describe('isOverlay', () => {
    beforeEach(() => {
      directive = fixture.debugElement
        .query(By.directive(LoadPageDirective))
        .injector.get(LoadPageDirective) as LoadPageDirective;
    });

    it('should create an overlay element', () => {
      const isOverlay = directive['isOverlay'](overlayUrl);

      expect(isOverlay).toBeTruthy();
    });

    it('should fill the overlay element with data', () => {
      const isOverlay = directive['isOverlay'](noneOverlayUrl);

      expect(isOverlay).toBeFalsy();
    });
  });

  describe('showOverlayContent', () => {
    beforeEach(() => {
      directive = fixture.debugElement
        .query(By.directive(LoadPageDirective))
        .injector.get(LoadPageDirective) as LoadPageDirective;
    });

    it('should create an element and add an id to it', () => {
      jest.spyOn(renderer2, 'createElement');
      jest.spyOn(renderer2, 'setProperty');
      directive['showOverlayContent'](noneOverlayUrl);

      expect(renderer2.createElement).toHaveBeenCalledWith('div');
      expect(renderer2.setProperty).toHaveBeenCalledTimes(2);
    });

    it('should call http and add set layoutcontainer innerHTML', () => {
      const dummyElement = document.createElement('div');

      jest.spyOn(renderer2, 'removeChild').mockImplementation(jest.fn);
      jest.spyOn(renderer2, 'appendChild').mockImplementation(jest.fn);
      jest.spyOn(directive as MockLoadDirective, 'recompileAngularJS');
      jest.spyOn(doc, 'querySelector').mockReturnValue(dummyElement);
      jest.spyOn(doc, 'dispatchEvent');

      directive['showOverlayContent'](noneOverlayUrl);

      const req = httpMock.expectOne('link');

      expect(req.request.method).toEqual('GET');
      req.flush('mock data');

      httpMock.verify();
      expect(renderer2.removeChild).toHaveBeenCalled();
      expect(renderer2.appendChild).toHaveBeenCalled();
      expect(doc.dispatchEvent).toHaveBeenCalled();
      expect(directive['recompileAngularJS']).toHaveBeenCalled();
    });
  });

  describe('storeUrlParamsInSessionStorage', () => {
    beforeEach(() => {
      directive = fixture.debugElement
        .query(By.directive(LoadPageDirective))
        .injector.get(LoadPageDirective) as LoadPageDirective;
    });

    it('should store URL parameters in sessionStorage', () => {
      const testUrl = 'https://example.com?param1=value1&param2=value2';
      directive['storeUrlParamsInSessionStorage'](testUrl);

      expect(sessionStorage.getItem('param1')).toEqual('value1');
      expect(sessionStorage.getItem('param2')).toEqual('value2');
    });
  });
});
