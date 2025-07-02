import { ErrorComponent } from '@sales/error/feat-error';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { TgFormsModule } from '@telenet/ng-lib-form';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UrlService, windowFactory } from '@telenet/ng-lib-page';
import { EventFacade } from '@sales/events/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import { SimpleChange } from '@angular/core';
import { errorStepLoaded } from './error..constants';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let urlService: UrlService;
  let eventFacade: EventFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: windowFactory() }, provideMockStore()],
      imports: [TranslateModule.forRoot(), TgFormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    urlService = TestBed.inject(UrlService);
    eventFacade = TestBed.inject(EventFacade);
    component = fixture.componentInstance;

    jest.spyOn(eventFacade, 'triggerEvent');
    jest.spyOn(eventFacade, 'triggerAnalyticsClickEvent');
    jest.spyOn(eventFacade, 'triggerAnalyticsErrorEvent');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('redirect', () => {
    it('should redirect given a redirect url', () => {
      component.error = {
        key: 'string',
        titleKey: 'string',
        descriptionKey: 'string',
        buttonTextKey: 'string',
        redirectUrl: 'redirectUrl',
        image: 'string',
        mobileImage: 'string',
        description: 'error description',
      };
      jest.spyOn(urlService, 'redirectTo');
      component.redirect();
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({ name: 'contact button clicked' });
      expect(urlService.redirectTo).toHaveBeenCalledWith('redirectUrl');
    });

    it('should not redirect given no redirect url', () => {
      component.error = {
        key: 'string',
        titleKey: 'string',
        descriptionKey: 'string',
        buttonTextKey: 'string',
        image: 'string',
        mobileImage: 'string',
        description: 'error description',
      };
      jest.spyOn(urlService, 'redirectTo');
      component.redirect();
      expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({ name: 'contact button clicked' });
      expect(urlService.redirectTo).not.toHaveBeenCalled();
    });
  });

  describe('ngOnChange', () => {
    it('if error changes, stepLoadedEvent and analyticsErrorEvent should be triggered', () => {
      const error = {
        key: 'error key',
        description: 'error description',
        apiRequest: 'api request',
      };
      const changes: SimpleChange = new SimpleChange(null, error, true);
      component.ngOnChanges({ error: changes });
      expect(eventFacade.triggerEvent).toHaveBeenCalledWith(errorStepLoaded);
      expect(eventFacade.triggerAnalyticsErrorEvent).toHaveBeenCalledWith({
        name: 'error occurred',
        statusMessage: 'error key',
        attributes: { itemName: error.description, itemGroup: error.apiRequest },
      });
    });

    it('should not trigger events if error does not change', () => {
      const changes: SimpleChange = new SimpleChange(null, null, false);
      component.ngOnChanges({ some: changes });
      expect(eventFacade.triggerEvent).not.toHaveBeenCalled();
      expect(eventFacade.triggerAnalyticsErrorEvent).not.toHaveBeenCalled();
    });
  });
});
