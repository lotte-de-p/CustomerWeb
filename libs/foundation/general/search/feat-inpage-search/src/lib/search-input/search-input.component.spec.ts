import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState, SearchFacadeService } from '@general/data-access-search';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;
  let facadeService: SearchFacadeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchInputComponent,
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: { location: { href: '' } } },
      ],
    }).compileComponents();

    facadeService = TestBed.inject(SearchFacadeService);

    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      jest.spyOn(facadeService, 'setQueryForInPage');
      jest.spyOn(component.queryFormControl, 'setValue');
    });

    it('should check the set the query on the formcontrol', () => {
      component.query = 'test';

      component.ngOnInit();

      expect(component.queryFormControl.setValue).toBeCalledWith('test');
    });
    it('should check the query and do nothing when no query', () => {
      component.query = '';

      component.ngOnInit();

      expect(component.queryFormControl.setValue).not.toBeCalled();
    });
  });

  describe('onValueChanged', () => {
    it('should be able to update the search query', () => {
      const setQueryForInPageSpy = jest.spyOn(facadeService, 'setQueryForInPage');
      const componentSpy = jest.spyOn(component, 'onValueChanged');

      component.onValueChanged('query', true);

      expect(setQueryForInPageSpy).toHaveBeenCalledTimes(1);
      expect(componentSpy).toHaveBeenCalledWith('query', true);
    });
    it('should be able to clear inpage when search query is smaller than 2 characters', () => {
      const clearInPageSpy = jest.spyOn(facadeService, 'clearInPage');
      const componentSpy = jest.spyOn(component, 'onValueChanged');

      component.onValueChanged('qu', true);

      expect(clearInPageSpy).toHaveBeenCalledTimes(1);
      expect(componentSpy).toHaveBeenCalledWith('qu', true);
    });
  });

  describe('goToResults', () => {
    it('should to navigate to InPage Results', () => {
      const spyInstance = jest.spyOn(facadeService, 'navigateToInPageResults');

      component.queryFormControl.setValue('query');
      component.goToResults();

      expect(spyInstance).toBeCalledWith('query');
    });
    it('should not navigate to InPage Results when no query is set', () => {
      const spyInstance = jest.spyOn(facadeService, 'navigateToInPageResults');

      component.queryFormControl.setValue('');
      component.goToResults();

      expect(spyInstance).toHaveBeenCalledTimes(0);
    });
  });

  describe('clear', () => {
    it('should call the searchFacade clearInPage function', () => {
      jest.spyOn(facadeService, 'clearInPage');

      component.clear();

      expect(facadeService.clearInPage).toBeCalled();
    });
  });

  describe('clear', () => {
    it('should call the searchFacade clearInPage function for noFocus', () => {
      jest.spyOn(facadeService, 'clearInPage');

      component.clearNoFocus();

      expect(facadeService.clearInPage).toBeCalled();
    });
  });

  describe('onKeydownHandler', () => {
    it('when escape is pushed it should clear the search results and query', () => {
      jest.spyOn(facadeService, 'clearInPage');
      const mockEvent = new KeyboardEvent('keydown', { key: 'Escape' });

      component.onKeydownHandler(mockEvent);

      expect(facadeService.clearInPage).toBeCalled();
      expect(component.getSearchTerm()).toBe('');
    });
  });
});
