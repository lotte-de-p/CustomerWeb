import { Actions } from '@ngrx/effects';
import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReturnDevicesEffects } from './return-devices.effects';
import { ReturnDevicesService } from '../services/return-devices.service';
import { of, throwError } from 'rxjs';
import {
  getReturnDevicesAndAddressLineDetails,
  getReturnDevicesAndAddressLineDetailsFailure,
  getReturnDevicesAndAddressLineDetailsSuccess,
  getReturnLabelFailure,
  getReturnLabelSuccess,
} from './return-devices.actions';

const mockReturnDevices = require('../mock/return-devices-mock.json');
const mockReturnDevicesAddressSelector = require('../mock/return-devices-address-selector-mock.json');

describe('ReturnDevicesEffects', () => {
  let actions$: Actions;
  let effects: ReturnDevicesEffects;
  let service: ReturnDevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReturnDevicesEffects,
        MockProvider(ReturnDevicesService),
        provideMockActions(() => actions$),
        { provide: 'Window', useValue: {} },
      ],
    });
    effects = TestBed.inject(ReturnDevicesEffects);
    service = TestBed.inject(ReturnDevicesService);
  });

  describe('returnLabel$', () => {
    it('should dispatch getReturnLabelSuccess in getReturnLabel', (done) => {
      const returnLabel = { label: 'label details' };
      jest.spyOn(service, 'getReturnLabel').mockReturnValue(of(returnLabel));
      actions$ = of({ type: '[return-devices] get return label' });
      effects.returnLabel$.subscribe((action) => {
        expect(action).toEqual(getReturnLabelSuccess({ returnLabel }));
        done();
      });
    });

    it('should dispatch getReturnLabelFailure in getReturnLabel', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'getReturnLabel').mockReturnValue(throwError(() => error));
      actions$ = of({ type: '[return-devices] get return label' });
      effects.returnLabel$.subscribe((action) => {
        expect(action).toEqual(getReturnLabelFailure({ error }));
        done();
      });
    });
  });

  describe('returnDevicesAddressLines$', () => {
    it('should dispatch getReturnDevicesAddressSelectorSuccess in returnDevicesAddressLines', (done) => {
      jest.spyOn(service, 'getAddressSelector').mockReturnValue(of(mockReturnDevicesAddressSelector));
      jest.spyOn(service, 'getReturnDevices').mockReturnValue(of(mockReturnDevices));
      actions$ = of(getReturnDevicesAndAddressLineDetails());
      effects.returnDevicesAndAddressLineDetails$.subscribe((action) => {
        expect(action).toEqual(
          getReturnDevicesAndAddressLineDetailsSuccess({
            addressLines: mockReturnDevicesAddressSelector,
            devices: mockReturnDevices,
          })
        );
        done();
      });
    });

    it('should dispatch getReturnDevicesAddressSelectorFailure in returnDevicesAddressLines', (done) => {
      const error = new Error('Error');
      jest.spyOn(service, 'getAddressSelector').mockReturnValue(throwError(() => error));
      jest.spyOn(service, 'getReturnDevices').mockReturnValue(of(mockReturnDevices));
      actions$ = of(getReturnDevicesAndAddressLineDetails());

      effects.returnDevicesAndAddressLineDetails$.subscribe((action) => {
        expect(action).toEqual(getReturnDevicesAndAddressLineDetailsFailure({ error }));
        done();
      });
    });
  });
});
