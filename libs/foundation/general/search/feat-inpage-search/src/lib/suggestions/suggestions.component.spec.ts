import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsComponent } from './suggestions.component';
import { defaultState, KeyboardNavigationService, SearchFacadeService } from '@general/data-access-search';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

describe('SuggestionsComponent', () => {
  let component: SuggestionsComponent;
  let fixture: ComponentFixture<SuggestionsComponent>;
  let facadeService: SearchFacadeService;
  let keyboardNavigationService: KeyboardNavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SuggestionsComponent,
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
    keyboardNavigationService = TestBed.inject(KeyboardNavigationService);

    fixture = TestBed.createComponent(SuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('select', () => {
    it('should emit event and trigger navigation when a suggestion is selected', () => {
      const suggestion = { text: 'text', highlight: 'highlight' };
      const anchor = document.createElement('a');
      anchor.href = 'https://www.telenet.be/dummy';

      const preventDefault = jest.fn();
      const event = {
        preventDefault,
        currentTarget: anchor,
      } as unknown as MouseEvent;

      const suggestionSelected = jest.spyOn(facadeService, 'selectSuggestionInPage');

      component.select(event, suggestion);

      expect(preventDefault).toHaveBeenCalled();
      expect(suggestionSelected).toHaveBeenCalledWith(suggestion, 'https://www.telenet.be/dummy');
    });
  });

  describe('getDeepLink', () => {
    it('should call SearchFacadeService', () => {
      const spyInstance = jest.spyOn(facadeService, 'getSearchResultsPageForInPage');
      component.getDeepLink('query');
      expect(spyInstance).toHaveBeenCalledWith('query');
    });
  });

  describe('setFocus', () => {
    it('should call KeyboardNavigationService', () => {
      jest.spyOn(keyboardNavigationService, 'setFocusedElement');
      const mockElement = document.createElement('div');
      component.setFocus(mockElement);
      expect(keyboardNavigationService.setFocusedElement).toBeCalledWith(mockElement);
    });
  });
});
