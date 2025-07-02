import { TestBed } from '@angular/core/testing';
import { ReturnDevicesOverviewComponent } from './return-devices-overview.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Device, PdfService, ReturnDevicesFacade, ReturnStatusEnum } from '@return-devices/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { of, skip } from 'rxjs';
import FileSaver from 'file-saver';
import { TextEncoder } from 'util';

describe('ReturnDevicesOverviewComponent', () => {
  let component: ReturnDevicesOverviewComponent;
  let facade: ReturnDevicesFacade;
  let pdfService: PdfService;

  const addressSelector = [
    {
      id: '9165639325413885482',
      country: 'België',
      countryCode: 'BE',
      city: 'Mechelen',
      postalCode: '2800',
      street: 'Darwin Loadteststraat',
      houseNumber: '7606',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent(ReturnDevicesOverviewComponent)],
      imports: [
        TranslateModule.forRoot(),
        CommonModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [
        MockProvider(ReturnDevicesFacade, {
          returnLabel$: of('returnLabel'),
          returnLabelByteArray$: of(Uint8Array.from([5, 6, 4, 6, 5, 4, 6])),
          selectedAddressLine$: of(addressSelector[0]),
        }),
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    }).compileComponents();

    component = TestBed.createComponent(ReturnDevicesOverviewComponent).componentInstance;
    facade = TestBed.inject(ReturnDevicesFacade);
    pdfService = TestBed.inject(PdfService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`when component gets loaded after login`, () => {
    it('should call facade action after login', () => {
      jest.spyOn(facade, 'loadReturnLabel');
      const pdfSpy = jest.spyOn(pdfService, 'convertByteArrayToBlob');

      facade.returnLabelByteArray$.pipe(skip(1)).subscribe((byteArray) => {
        expect(byteArray).toEqual(Uint8Array.from([5, 6, 4, 6, 5, 4, 6]));
      });

      component.initAfterLoggedIn();
      expect(facade.loadReturnLabel).toHaveBeenCalled();
      expect(pdfSpy).toHaveBeenCalled();
    });
  });

  describe(`when trying to download the return label`, () => {
    it('should download return label through filesaver', () => {
      const returnLabel = 'returnLabel';
      const byteArray = new TextEncoder().encode(returnLabel);
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      jest.spyOn(pdfService, 'convertBase64ToByteArray').mockReturnValue(byteArray);
      jest.spyOn(pdfService, 'convertByteArrayToBlob').mockReturnValue(blob);
      jest.spyOn(FileSaver, 'saveAs').mockImplementation(jest.fn());
      jest.useFakeTimers().setSystemTime(new Date('2024-01-01'));

      component.download(byteArray);
      expect(FileSaver.saveAs).toHaveBeenCalledWith(blob, `Telenet_ReturnLabel_${new Date().getTime()}.pdf`);
    });
  });

  describe(`when trying to toggle device`, () => {
    it('facade gets called to toggle device', () => {
      const device: Device = {
        addressId: '',
        lateFee: 0,
        locationId: '',
        parentId: '',
        returnDueDate: '',
        returnStatus: ReturnStatusEnum.TO_BE_EXPECTED,
        serialNumber: '',
        status: '',
        typeImageName: '',
        name: '',
        type: '',
      };
      jest.spyOn(facade, 'toggleDevice');

      component.toggleDevice(device);

      expect(facade.toggleDevice).toHaveBeenCalledWith(device);
    });
  });

  describe(`when opening/closing print dialog`, () => {
    it('should toggle showDialog property', () => {
      expect(component.showDialog).toBeFalsy();

      component.showReturnLabelDialog();
      expect(component.showDialog).toBeTruthy();

      component.close();
      expect(component.showDialog).toBeFalsy();
    });
  });

  describe('when opening/closing address selection menu', () => {
    it('should set showMenu to true when openAddressSelection is called', () => {
      component.openAddressSelection();
      expect(component.showMenu).toBeTruthy();
    });

    it('should set showMenu to false when closeMenu is called', () => {
      component.closeMenu();
      expect(component.showMenu).toBeFalsy();
    });
  });
});
