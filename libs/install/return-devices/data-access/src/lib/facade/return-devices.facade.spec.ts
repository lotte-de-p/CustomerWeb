import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ReturnDevicesFacade } from './return-devices.facade';
import { EffectsModule } from '@ngrx/effects';
import { ReturnDevicesNgrxModule } from '../+state/return-devices-ngrx.module';
import { ReturnDevicesService } from '../services/return-devices.service';
import { of, skip, throwError } from 'rxjs';
import { ReturnLabel } from '../entities/return-label.model';
import { PdfService } from '../services/pdf.service';

describe('ReturnDevicesFacade', () => {
  let facade: ReturnDevicesFacade;
  let returnDevicesService: ReturnDevicesService;
  let returnLabel: ReturnLabel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), EffectsModule.forRoot(), ReturnDevicesNgrxModule],
      providers: [
        ReturnDevicesFacade,
        {
          provide: ReturnDevicesService,
          useValue: {
            getReturnDevices: jest.fn(),
            getReturnLabel: jest.fn(),
          },
        },
        { provide: 'Window', useValue: {} },
        PdfService,
      ],
    });
    facade = TestBed.inject(ReturnDevicesFacade);
    returnDevicesService = TestBed.inject(ReturnDevicesService);
    returnLabel = { label: 'label detail' };
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe(`when loadReturnLabel is called`, () => {
    const addressId = '1234567';
    it('should set the return label', (done) => {
      const getReturnLabelSpy = jest.spyOn(returnDevicesService, 'getReturnLabel');

      getReturnLabelSpy.mockReturnValue(of(returnLabel));

      facade.returnLabel$.pipe(skip(1)).subscribe((returnDevices) => {
        expect(getReturnLabelSpy).toHaveBeenCalled();
        expect(returnDevices).toBe('label detail');
        done();
      });

      facade.loadReturnLabel(addressId);
    });

    it('should set the error when getting return label fails', (done) => {
      const error = new Error('Error');
      const getReturnLabelSpy = jest.spyOn(returnDevicesService, 'getReturnLabel');

      getReturnLabelSpy.mockReturnValue(throwError(() => error));

      facade.returnDevicesFailure$.pipe(skip(1)).subscribe((error) => {
        expect(getReturnLabelSpy).toHaveBeenCalled();
        expect(error).toEqual(error);
        done();
      });

      facade.loadReturnLabel(addressId);
    });

    it('when return label byte array is called convert string to Uint8Array', inject(
      [PdfService],
      (pdfService: PdfService) => {
        const getReturnLabelSpy = jest.spyOn(returnDevicesService, 'getReturnLabel');
        const convertBase64ToByteArraySpy = jest.spyOn(pdfService, 'convertBase64ToByteArray');

        getReturnLabelSpy.mockReturnValue(of(returnLabel));
        convertBase64ToByteArraySpy.mockReturnValue(new Uint8Array());

        facade.returnLabelByteArray$.subscribe((result) => {
          expect(convertBase64ToByteArraySpy).toEqual(result);
        });

        facade.loadReturnLabel(addressId);
      }
    ));
  });
});
