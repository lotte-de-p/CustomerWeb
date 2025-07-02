import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopResultComponent } from './top-result.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ElasticSearchService, SearchApiServiceProvider, Product } from '@general/data-access-search';
import { provideMockStore } from '@ngrx/store/testing';

describe('TopResultComponent', () => {
  let component: TopResultComponent;
  let fixture: ComponentFixture<TopResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TopResultComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        SearchApiServiceProvider,
        {
          provide: ElasticSearchService,
          useFactory: (http: HttpClient) => {
            return new ElasticSearchService(http, 'url');
          },
          deps: [HttpClient],
        },
        HttpClient,
        HttpHandler,
        provideMockStore({}),
        { provide: 'Window', useValue: window },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TopResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getCategoryLabel', () => {
    it('should return blank string when no tags', () => {
      component.item = {
        name: 'name',
        type: 'type',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [],
        id: 'id',
      };
      expect(component.getCategoryLabel()).toBe('');
    });

    it('should return blank string when no category tag', () => {
      component.item = {
        name: 'name',
        type: 'type',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [{ name: 'notcategory', value: ['test'] }],
        id: 'id',
      };
      expect(component.getCategoryLabel()).toBe('');
    });

    it('should return blank string when no category tag value', () => {
      component.item = {
        name: 'name',
        type: 'type',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [{ name: 'category', value: [''] }],
        id: 'id',
      };
      expect(component.getCategoryLabel()).toBe('');
    });

    it('should return category label when category tag value', () => {
      component.item = {
        name: 'name',
        type: 'type',
        url: 'url',
        content: 'content',
        displayUrl: 'displayUrl',
        product: {} as Product,
        tags: [{ name: 'category', value: ['my-services'] }],
        id: 'id',
      };
      expect(component.getCategoryLabel()).toBe('tags.category.my-services');
    });
  });
});
