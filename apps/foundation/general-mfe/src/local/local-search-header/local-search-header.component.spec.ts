import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSearchHeaderComponent } from './local-search-header.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@general/data-access-search';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('HeaderComponent', () => {
  let component: LocalSearchHeaderComponent;
  let fixture: ComponentFixture<LocalSearchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LocalSearchHeaderComponent,
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

    jest.spyOn(console, 'info').mockImplementation(jest.fn);

    fixture = TestBed.createComponent(LocalSearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
