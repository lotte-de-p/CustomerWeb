import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchedForComponent } from './searched-for.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@general/data-access-search';

describe('SearchedForComponent', () => {
  let component: SearchedForComponent;
  let fixture: ComponentFixture<SearchedForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchedForComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: window },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchedForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
