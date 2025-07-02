import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentPageComponent } from './content-page.component';
import { ElasticSearchService, SearchApiServiceProvider } from '@general/data-access-search';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

describe('ContentPageComponent', () => {
  let component: ContentPageComponent;
  let fixture: ComponentFixture<ContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPageComponent],
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

    fixture = TestBed.createComponent(ContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
