import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AlignRecommendationHtmlElementsDirective } from './align-recommendation-html-elements.directive';

class MockElementRef implements ElementRef {
  nativeElement: unknown;
}

@Component({
  template: ` <div [tgSalesProductFinderAlignRecommendationHtmlElements]="'badges'"></div> `,
})
export class TestComponent {}

describe('AlignRecommendationHtmlElementsDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: AlignRecommendationHtmlElementsDirective;
  const className = 'badges';

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      providers: [
        AlignRecommendationHtmlElementsDirective,
        Renderer2,
        { provide: ElementRef, useClass: MockElementRef },
      ],
    }).createComponent(TestComponent);
    directive = fixture.debugElement.injector.get(AlignRecommendationHtmlElementsDirective);

    directive.className = className;

    fixture.detectChanges();
  });

  describe('ngAfterViewInit', () => {
    it('should align badges HTML elements', () => {
      const firstBadge: HTMLElement = document.createElement('div');
      firstBadge.className = className;
      document.body.append(firstBadge);
      Object.defineProperty(firstBadge, 'scrollHeight', { configurable: true, value: 1000 });

      const secondBadge: HTMLElement = document.createElement('div');
      secondBadge.className = className;
      document.body.append(secondBadge);

      const htmlElements: HTMLElement[] = Array.from(document.getElementsByClassName(className)).map(
        (element: Element) => element as HTMLElement
      );

      directive.ngAfterViewInit();

      expect(htmlElements.every((htmlElement: HTMLElement) => htmlElement.style.height === '1000px')).toBe(true);
    });
  });

  describe('onResize', () => {
    it('should align badges HTML elements', () => {
      const firstCaption: HTMLElement = document.createElement('div');
      firstCaption.className = className;
      document.body.append(firstCaption);
      Object.defineProperty(firstCaption, 'scrollHeight', { configurable: true, value: 1000 });

      const secondCaption: HTMLElement = document.createElement('div');
      secondCaption.className = className;
      document.body.append(secondCaption);

      const htmlElements: HTMLElement[] = Array.from(document.getElementsByClassName(className)).map(
        (element: Element) => element as HTMLElement
      );

      directive.onResize();

      expect(htmlElements.every((htmlElement: HTMLElement) => htmlElement.style.height === '1000px')).toBe(true);
    });
  });
});
