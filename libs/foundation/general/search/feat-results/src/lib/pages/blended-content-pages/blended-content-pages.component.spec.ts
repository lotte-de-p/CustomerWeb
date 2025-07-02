import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlendedContentPagesComponent } from './blended-content-pages.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@general/data-access-search';

describe('BlendedContentPagesComponent', () => {
  let component: BlendedContentPagesComponent;
  let fixture: ComponentFixture<BlendedContentPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlendedContentPagesComponent, TgTranslateTestingModule],
      providers: [
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: window },
      ],
    }).compileComponents();

    jest.spyOn(console, 'log').mockImplementation(jest.fn);

    fixture = TestBed.createComponent(BlendedContentPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
