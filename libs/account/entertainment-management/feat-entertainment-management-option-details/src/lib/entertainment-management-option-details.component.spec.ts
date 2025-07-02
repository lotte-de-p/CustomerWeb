import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntertainmentManagementOptionDetailsComponent } from './entertainment-management-option-details.component';
import { EntertainmentManagementFacade } from '@entertainment-management/data-access';
import { UrlService } from '@telenet/ng-lib-page';

describe('EntertainmentManagementOptionDetailsComponent', () => {
  let component: EntertainmentManagementOptionDetailsComponent;
  let fixture: ComponentFixture<EntertainmentManagementOptionDetailsComponent>;
  let facade: EntertainmentManagementFacade;
  let urlService: UrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EntertainmentManagementOptionDetailsComponent,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
      ],
      providers: [{ provide: 'Window', useValue: window }],
    }).compileComponents();

    fixture = TestBed.createComponent(EntertainmentManagementOptionDetailsComponent);
    facade = TestBed.inject(EntertainmentManagementFacade);
    urlService = TestBed.inject(UrlService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initAfterLoggedIn', () => {
    it('should call loadEntertainmentOptionDetails when there is no productId in the query params', () => {
      jest.spyOn(urlService, 'getParamsValueFromUrl').mockReturnValue('');
      jest.spyOn(facade, 'loadEntertainmentOptionDetails');

      component.initAfterLoggedIn();

      expect(facade.loadEntertainmentOptionDetails).toHaveBeenCalled();
    });
  });

  describe('navigateToOptions', () => {
    it('should navigate to options page', () => {
      jest.spyOn(urlService, 'redirectTo');

      component.navigateToOptions();

      expect(urlService.redirectTo).toHaveBeenCalledWith('/');
    });
  });
});
