import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HardwarePageComponent } from './hardware-page.component';
import {
  ElasticSearchService,
  HardwarePlanService,
  SearchApiServiceProvider,
  SearchResultItem,
} from '@general/data-access-search';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

describe('HardwarePageComponent', () => {
  let component: HardwarePageComponent;
  let fixture: ComponentFixture<HardwarePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: HardwarePlanService,
          useValue: {
            getHardwarePlan: () => of(''),
          },
        },
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
      imports: [
        HardwarePageComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HardwarePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getHardwareDetailsUrl', () => {
    it('should return the hardwaredetails url', function () {
      component.detailsPagePath = 'path/to/hardware/detail';
      component.searchResultItem = { product: { id: '52' } } as SearchResultItem;

      const actual = component.getHardwareDetailsUrl();

      expect(actual).toBe('path/to/hardware/detail?productId=52');
    });
  });
});
