import { Actions } from '@ngrx/effects';
import { ServiceCaseDatalayerEffects } from './service-case-datalayer.effects';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { ServiceCasesDatalayerService } from '../services/service-cases-datalayer.service';
import { ServiceCasesConstants } from '../constants/service-cases.constants';
import { ServiceCase, Status, Type } from '../entitities/service-case.interface';
import { MockProvider } from 'ng-mocks';
import { loadServiceCasesSuccess, selectServiceCase, toggleHistoryAction } from './service-case.actions';

const pageViewAction = {
  type: '[service-case] serviceCasesPageView',
};

describe('ServiceCaseDatalayerEffects', () => {
  let actions$: Actions;
  let effects: ServiceCaseDatalayerEffects;
  let serviceCasesDatalayerService: ServiceCasesDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServiceCaseDatalayerEffects,
        MockProvider(ServiceCasesDatalayerService),
        provideMockActions(() => actions$),
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    });
    effects = TestBed.inject(ServiceCaseDatalayerEffects);
    serviceCasesDatalayerService = TestBed.inject(ServiceCasesDatalayerService);
    jest.spyOn(serviceCasesDatalayerService, 'addPageEvent');
    jest.spyOn(serviceCasesDatalayerService, 'sendDataLayerEventWithAttributes');
  });

  describe('serviceCaseSelected$', () => {
    const mockedServiceCases = [
      {
        id: '000001',
        type: Type.MOVE,
        status: Status.RESOLVED,
        creationDate: new Date(2023, 12, 4),
        productType: 'Internet, DTV, fixed line',
      },
      {
        id: '123456',
        type: Type.MOVE,
        status: Status.OPEN,
        creationDate: new Date(2023, 8, 18),
        productType: 'Internet, DTV, fixed line',
      },
      {
        id: '987654',
        type: Type.TAKEOVER,
        status: Status.OPEN,
        creationDate: new Date(2023, 3, 2),
        productType: 'Internet, DTV',
      },
    ];

    it('should send event if page is loaded and no service cases', (done) => {
      actions$ = of(
        loadServiceCasesSuccess({
          serviceCases: [],
        }),
        pageViewAction
      );

      effects.serviceCasesLoaded$.subscribe(() => {
        expect(serviceCasesDatalayerService.addPageEvent).toHaveBeenCalled();
        expect(serviceCasesDatalayerService.sendDataLayerEventWithAttributes).toHaveBeenCalled();
        done();
      });
    });

    it('should send event if page is loaded and open service cases', (done) => {
      actions$ = of(
        loadServiceCasesSuccess({
          serviceCases: [
            {
              id: '12345',
              status: Status.OPEN,
              type: Type.MOVE,
            } as ServiceCase,
          ],
        }),
        pageViewAction
      );
      effects.serviceCasesLoaded$.subscribe(() => {
        expect(serviceCasesDatalayerService.addPageEvent).not.toHaveBeenCalled();
        expect(serviceCasesDatalayerService.sendDataLayerEventWithAttributes).toHaveBeenCalledWith(
          ServiceCasesConstants.SERVICE_CASE_NAVIGATION_VIEWED_EVENT_NAME,
          ServiceCasesConstants.EVENT_INFO_TYPE_IMPRESSION,
          Status.OPEN,
          Type.MOVE
        );
        done();
      });
    });

    it('should send event if page is loaded and resolved service cases', (done) => {
      actions$ = of(
        loadServiceCasesSuccess({
          serviceCases: [
            {
              id: '12345',
              status: Status.RESOLVED,
              type: Type.MOVE,
            } as ServiceCase,
          ],
        }),
        pageViewAction
      );

      effects.serviceCasesLoaded$.subscribe(() => {
        expect(serviceCasesDatalayerService.addPageEvent).not.toHaveBeenCalled();
        expect(serviceCasesDatalayerService.sendDataLayerEventWithAttributes).not.toHaveBeenCalled();
        done();
      });
    });

    it('should not send event', () => {
      jest.spyOn(serviceCasesDatalayerService, 'addPageEvent');
      jest.spyOn(serviceCasesDatalayerService, 'sendDataLayerEventWithAttributes');
      actions$ = of(
        loadServiceCasesSuccess({
          serviceCases: [],
        })
      );
      expect(serviceCasesDatalayerService.addPageEvent).not.toHaveBeenCalled();
      expect(serviceCasesDatalayerService.sendDataLayerEventWithAttributes).not.toHaveBeenCalled();
    });

    it('should send datalayer event on select case', (done) => {
      actions$ = of(selectServiceCase({ selectedServiceCase: mockedServiceCases[1] }));
      effects.serviceCaseSelected$.subscribe(() => {
        expect(serviceCasesDatalayerService.sendDataLayerEventWithAttributes).toHaveBeenCalledWith(
          ServiceCasesConstants.SERVICE_CASE_NAVIGATION_VIEWED_EVENT_NAME,
          ServiceCasesConstants.EVENT_INFO_TYPE_IMPRESSION,
          mockedServiceCases[1].status,
          mockedServiceCases[1].type
        );
        done();
      });
    });

    it('should send datalayer event of for toggle history', (done) => {
      actions$ = of(
        toggleHistoryAction({
          isToggleHistory: true,
        })
      );
      effects.toggleHistory$.subscribe(() => {
        expect(serviceCasesDatalayerService.sendDataLayerEventWithAttributes).toHaveBeenCalledWith(
          ServiceCasesConstants.SERVICE_CASE_NAVIGATION_CLICK_EVENT_NAME,
          ServiceCasesConstants.EVENT_INFO_TYPE_CLICK,
          ServiceCasesConstants.SERVICE_CASE_SHOW_HISTORY,
          ''
        );
        done();
      });
    });
  });
});
