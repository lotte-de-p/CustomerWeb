import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoResultsComponent } from './no-results.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { defaultState, SearchFacadeService } from '@general/data-access-search';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { ExperienceFragmentService } from '@telenet/ng-lib-page';

describe('NoResultsComponent', () => {
  let component: NoResultsComponent;
  let fixture: ComponentFixture<NoResultsComponent>;
  let experienceFragmentService: ExperienceFragmentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoResultsComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        SearchFacadeService,
        ExperienceFragmentService,
        HttpClient,
        HttpHandler,
        provideMockStore({ initialState: { searchFeature: defaultState } }),
        { provide: 'Window', useValue: { location: { href: '' } } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NoResultsComponent);
    experienceFragmentService = TestBed.inject(ExperienceFragmentService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init', () => {
    jest.spyOn(experienceFragmentService, 'fetchExpFragment');

    component.noResultsExpFragmentLocation = '/location/name';
    component.ngOnInit();

    expect(experienceFragmentService.fetchExpFragment).toHaveBeenCalledWith('name', '/location');
  });
});
