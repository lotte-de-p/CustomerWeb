import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullContentPagesComponent } from './full-content-pages.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState, Product, SearchFacadeService, SearchResultItem } from '@general/data-access-search';

describe('ContentPageComponent', () => {
  let component: FullContentPagesComponent;
  let fixture: ComponentFixture<FullContentPagesComponent>;
  let facadeService: SearchFacadeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullContentPagesComponent],
      providers: [
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: window },
      ],
    }).compileComponents();

    facadeService = TestBed.inject(SearchFacadeService);
    fixture = TestBed.createComponent(FullContentPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getCategoryLabel', () => {
    it('should return blank string when no tags', () => {
      const searchResultItem: SearchResultItem = {
        name: 'name',
        type: 'type',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      };

      expect(component.getCategoryLabel(searchResultItem)).toBe('');
    });

    it('should return blank string when no category tag', () => {
      const searchResultItem: SearchResultItem = {
        name: 'name',
        type: 'type',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [{ name: 'notcategory', value: ['test'] }],
        id: 'id',
      };

      expect(component.getCategoryLabel(searchResultItem)).toBe('');
    });

    it('should return blank string when no category tag value', () => {
      const searchResultItem: SearchResultItem = {
        name: 'name',
        type: 'type',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [{ name: 'category', value: [''] }],
        id: 'id',
      };

      expect(component.getCategoryLabel(searchResultItem)).toBe('');
    });

    it('should return category label when category tag value', () => {
      const searchResultItem: SearchResultItem = {
        name: 'name',
        type: 'type',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [{ name: 'category', value: ['my-services'] }],
        id: 'id',
      };

      expect(component.getCategoryLabel(searchResultItem)).toBe('tags.category.my-services');
    });

    describe('contentPagesPageChanged', () => {
      it('should call the facade', () => {
        const spy = jest.spyOn(facadeService, 'selectContentPagesPage');

        component.contentPagesPageChanged(1);
        expect(spy).toBeCalledWith(1);
      });
    });
  });
});
