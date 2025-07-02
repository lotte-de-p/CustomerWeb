import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AbstractCardComponent } from './abstract-card.component';

const parentCard = {
  dispatchEvent: jest.fn(),
};

const elementRef = {
  nativeElement: {
    closest: jest.fn(),
  },
};

@Component({
  template: '',
})
class TestCardComponent extends AbstractCardComponent {
  constructor() {
    super(elementRef, {} as Document);
  }
}

fdescribe('CardComponent', () => {
  let component: TestCardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCardComponent],
      imports: [],
      providers: [],
    }).compileComponents();
    component = TestBed.createComponent(TestCardComponent).componentInstance;
    jest.spyOn(parentCard, 'dispatchEvent').mockReturnValue(null);
  });

  describe('parent card available', () => {
    beforeAll(() => {
      jest.spyOn(elementRef.nativeElement, 'closest').mockReturnValue(parentCard);
    });

    it('should hide the card', fakeAsync(() => {
      component.hideCard();
      tick(800);
      expect(parentCard.dispatchEvent).toHaveBeenCalledWith(new CustomEvent('card:hide', { bubbles: true }));
    }));

    it('should show the simple card', fakeAsync(() => {
      component.showSimpleCard();
      tick(800);
      expect(parentCard.dispatchEvent).toHaveBeenCalledWith(
        new CustomEvent('card:show-simple-view', { bubbles: true })
      );
    }));

    it('should hide the simple card', fakeAsync(() => {
      component.hideSimpleCard();
      tick(800);
      expect(parentCard.dispatchEvent).toHaveBeenCalledWith(
        new CustomEvent('card:hide-simple-view', { bubbles: true })
      );
    }));

    it('should show card with data', fakeAsync(() => {
      component.showCardWithData({ test: 'this is a test' });
      tick(800);
      expect(parentCard.dispatchEvent).toHaveBeenCalledWith(
        new CustomEvent('card:show-data', {
          bubbles: true,
          detail: { test: 'this is a test' },
        })
      );
    }));

    it('should update card target', fakeAsync(() => {
      component.updateCardTarget('http://thisisaurl');
      tick(800);
      expect(parentCard.dispatchEvent).toHaveBeenCalledWith(
        new CustomEvent('card:updateTarget', {
          bubbles: true,
          detail: 'http://thisisaurl',
        })
      );
    }));

    it('should process click', fakeAsync(() => {
      component.processClick('http://thisisalsoalink');
      tick(800);
      expect(parentCard.dispatchEvent).toHaveBeenCalledWith(
        new CustomEvent('card:click', {
          bubbles: true,
          detail: { url: 'http://thisisalsoalink' },
        })
      );
    }));
  });

  describe('parent card not available', () => {
    beforeAll(() => {
      jest.spyOn(elementRef.nativeElement, 'closest').mockReturnValue(undefined);
      parentCard.dispatchEvent.mockReset();
    });

    it('should hide the card', fakeAsync(() => {
      component.hideCard();
      tick(800);
      expect(parentCard.dispatchEvent).not.toHaveBeenCalled();
    }));

    it('should show the simple card', fakeAsync(() => {
      component.showSimpleCard();
      tick(800);
      expect(parentCard.dispatchEvent).not.toHaveBeenCalled();
    }));

    it('should hide the simple card', fakeAsync(() => {
      component.hideSimpleCard();
      tick(800);
      expect(parentCard.dispatchEvent).not.toHaveBeenCalled();
    }));

    it('should show card with data', fakeAsync(() => {
      component.showCardWithData({ test: 'this is a second test' });
      tick(800);
      expect(parentCard.dispatchEvent).not.toHaveBeenCalled();
    }));

    it('should update card target', fakeAsync(() => {
      component.updateCardTarget('http://thisisalsoanurl');
      tick(800);
      expect(parentCard.dispatchEvent).not.toHaveBeenCalled();
    }));

    it('should process click', fakeAsync(() => {
      component.processClick('http://thisisalink');
      tick(800);
      expect(parentCard.dispatchEvent).not.toHaveBeenCalled();
    }));
  });
});
