import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalInpageSearchComponent } from './local-inpage-search.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@general/data-access-search';

describe('LocalInpageSearchComponent', () => {
  let component: LocalInpageSearchComponent;
  let fixture: ComponentFixture<LocalInpageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LocalInpageSearchComponent,
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

    fixture = TestBed.createComponent(LocalInpageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
