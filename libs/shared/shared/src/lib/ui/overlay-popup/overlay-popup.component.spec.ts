import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPopupComponent } from './overlay-popup.component';

describe('OverlayPopupComponent', () => {
  let component: OverlayPopupComponent;
  let fixture: ComponentFixture<OverlayPopupComponent>;

  function primaryButton() {
    return fixture.nativeElement.querySelector('.button--primary');
  }

  function secondaryButton() {
    return fixture.nativeElement.querySelector('.button--secondary');
  }

  function closeButton() {
    return fixture.nativeElement.querySelector('.icon-cross');
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverlayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should show elements when text not blank', () => {
    it('case title', () => {
      component.title = 'title';
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.overlay__section__content__title').textContent).toEqual('title');
    });
    it('case subtitle', () => {
      component.subtitle = 'subtitle';
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.overlay__section__content__sub-title').textContent).toEqual(
        'subtitle'
      );
    });
    it('case content', () => {
      component.content = 'content';
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.overlay__section__content__description').textContent).toEqual(
        'content'
      );
    });
    it('case primaryButtonText', () => {
      component.primaryButtonText = 'primaryButtonText';
      fixture.detectChanges();
      expect(primaryButton().textContent).toEqual('primaryButtonText');
    });
    it('case secondaryButtonText', () => {
      component.secondaryButtonText = 'secondaryButtonText';
      fixture.detectChanges();
      expect(secondaryButton().textContent).toEqual('secondaryButtonText');
    });
    it('case enableClose', () => {
      component.enableClose = true;
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.overlay__section__content__close')).toBeTruthy();
    });
  });

  describe('should hide elements when text blank', () => {
    it('case title', () => {
      component.title = '';
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.overlay__section__content__title')).toBeFalsy();
    });
    it('case subtitle', () => {
      component.subtitle = '';
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.overlay__section__content__sub-title')).toBeFalsy();
    });
    it('case content', () => {
      component.content = '';
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.overlay__section__content__description')).toBeFalsy();
    });
    it('case primaryButtonText', () => {
      component.primaryButtonText = '';
      fixture.detectChanges();
      expect(secondaryButton()).toBeFalsy();
    });
    it('case secondaryButtonText', () => {
      component.secondaryButtonText = '';
      fixture.detectChanges();
      expect(primaryButton()).toBeFalsy();
    });
    it('case enableClose', () => {
      component.enableClose = false;
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.overlay__section__content__close')).toBeFalsy();
    });
  });

  describe('should emit event when button clicked', () => {
    it('case primary button', () => {
      component.primaryButtonText = 'primaryButtonText';
      jest.spyOn(component.primaryButtonClicked, 'emit');
      fixture.detectChanges();
      primaryButton().click();
      expect(component.primaryButtonClicked.emit).toHaveBeenCalled();
    });
    it('case secondary button', () => {
      component.secondaryButtonText = 'secondaryButtonText';
      jest.spyOn(component.secondaryButtonClicked, 'emit');
      fixture.detectChanges();
      secondaryButton().click();
      expect(component.secondaryButtonClicked.emit).toHaveBeenCalled();
    });
    it('case close button', () => {
      jest.spyOn(component.closeButtonClicked, 'emit');
      fixture.detectChanges();
      closeButton().click();
      expect(component.closeButtonClicked.emit).toHaveBeenCalled();
    });
  });
});
