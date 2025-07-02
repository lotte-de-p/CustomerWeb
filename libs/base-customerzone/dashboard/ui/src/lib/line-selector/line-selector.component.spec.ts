import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineSelectorComponent } from './line-selector.component';
import { MobileLine } from '@mybase-dashboard/data-access';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

describe('LineSelectorComponent', () => {
  let component: LineSelectorComponent;
  let fixture: ComponentFixture<LineSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService],
    });

    fixture = TestBed.createComponent(LineSelectorComponent);
    component = fixture.componentInstance;
    component.data = [
      { msisdn: '123', productName: 'abc', default: true, addressId: '91257569926662096', dataOnly: false },
    ];
    fixture.detectChanges();
  });

  afterEach(() => {
    window.sessionStorage.removeItem(LineSelectorComponent.SESSION_STORAGE_KEY);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('data sessionStorage', () => {
    it('should read line from session storage when present', () => {
      const storedLine = '456';

      window.sessionStorage.setItem(LineSelectorComponent.SESSION_STORAGE_KEY, storedLine);
      component.data = [
        { msisdn: '123', productName: 'abc', default: true, addressId: '91257569926662096', dataOnly: false },
        { msisdn: '456', productName: 'def', default: false, addressId: '91257569926662096', dataOnly: false },
      ];
      window.sessionStorage.removeItem(LineSelectorComponent.SESSION_STORAGE_KEY);

      expect(component.selectedMsisdn).toEqual({
        msisdn: '456',
        productName: 'def',
        default: false,
        addressId: '91257569926662096',
        dataOnly: false,
      });
    });

    it('should ignore line from session storage when not present in lines', () => {
      const storedLine = '789';

      window.sessionStorage.setItem(LineSelectorComponent.SESSION_STORAGE_KEY, storedLine);
      component.data = [
        { msisdn: '123', productName: 'abc', default: true, addressId: '91257569926662096', dataOnly: false },
        { msisdn: '456', productName: 'def', default: false, addressId: '91257569926662096', dataOnly: false },
      ];
      window.sessionStorage.removeItem(LineSelectorComponent.SESSION_STORAGE_KEY);

      expect(component.selectedMsisdn).toEqual({
        msisdn: '123',
        productName: 'abc',
        default: true,
        addressId: '91257569926662096',
        dataOnly: false,
      });
    });

    it('should proceed as usual if no line from session storage is present but still update session storage with default line', () => {
      component.data = [
        { msisdn: '123', productName: 'abc', default: true, addressId: '91257569926662096', dataOnly: false },
        { msisdn: '456', productName: 'def', default: false, addressId: '91257569926662096', dataOnly: false },
      ];

      expect(component.selectedMsisdn).toEqual({
        msisdn: '123',
        productName: 'abc',
        default: true,
        addressId: '91257569926662096',
        dataOnly: false,
      });
      expect(window.sessionStorage.getItem(LineSelectorComponent.SESSION_STORAGE_KEY)).toEqual('123');
    });
  });

  describe('selectLine sessionStorage', () => {
    it('should update the sessionStorage when selected a line', () => {
      const line: MobileLine = {
        msisdn: '123',
        productName: 'abc',
        default: true,
        addressId: '91257569926662096',
        dataOnly: false,
      };
      component.selectLine(line);
      expect(window.sessionStorage.getItem(LineSelectorComponent.SESSION_STORAGE_KEY)).toEqual('123');
      expect(window.sessionStorage.getItem(LineSelectorComponent.ADDRESS_SESSION_STORAGE_KEY)).toEqual(
        '91257569926662096'
      );
    });
  });

  it('should emit selected line and close', () => {
    component.selectedMsisdn = {
      msisdn: '',
      productName: '',
      default: false,
      addressId: '91257569926662096',
      dataOnly: false,
    } as MobileLine;
    jest.spyOn(component.selectMsisdn, 'emit');
    jest.spyOn(component, 'slideMenu');
    const line = {
      msisdn: '0499887766',
      productName: 'product',
      default: false,
      addressId: '91257569926662096',
      dataOnly: false,
    };

    component.selectLine(line);

    expect(component.selectedMsisdn).toEqual({
      msisdn: '0499887766',
      productName: 'product',
      default: false,
      addressId: '91257569926662096',
      dataOnly: false,
    });
    expect(component.selectMsisdn.emit).toHaveBeenCalledWith(line);
    expect(component.slideMenu).toHaveBeenCalledWith(false);
  });

  it('should open or close menu', () => {
    component.showMenu = false;
    const event = new Event('click');
    jest.spyOn(event, 'stopPropagation');

    component.slideMenu(true, event);

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(component.showMenu).toEqual(true);
  });
});
