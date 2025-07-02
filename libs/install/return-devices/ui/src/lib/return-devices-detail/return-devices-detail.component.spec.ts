import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { expect, jest } from '@jest/globals';
import { LanguageService } from '@telenet/ng-lib-page';
import { ReturnDevicesDetailComponent } from './return-devices-detail.component';
import { ReturnStatusEnum } from '@return-devices/data-access';

describe('ReturnDevicesDetailComponent', () => {
  let component: ReturnDevicesDetailComponent;
  let fixture: ComponentFixture<ReturnDevicesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
        {
          provide: LanguageService,
          useValue: {
            getLanguage: () => 'EN',
            getLocaleString: () => 'en-BE',
          },
        },
      ],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnDevicesDetailComponent);
    component = fixture.componentInstance;
    component.device = {
      name: 'HD Digicorder',
      type: 'DTV Box',
      addressId: '9165643348913614617',
      locationId: '9168859531813775410',
      serialNumber: '966313491313',
      parentId: '9168859549413779743',
      returnDueDate: '2024-01-19',
      lateFee: 249,
      status: 'Disconnected',
      returnStatus: ReturnStatusEnum.EXPIRED,
      typeImageName: 'dtvbox',
    };

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  describe('onToggleClick', () => {
    it('should emit the toggle click event', () => {
      jest.spyOn(component.toggleDeviceClick, 'emit');
      component.onToggleClick();

      expect(component.toggleDeviceClick.emit).toHaveBeenCalled();
    });
  });

  describe('onToggleClick', () => {
    it('should emit the toggle click event', () => {
      jest.spyOn(component.printReturnLabelClick, 'emit');
      component.onGenerateReturnLabelClick();

      expect(component.printReturnLabelClick.emit).toHaveBeenCalled();
    });
  });
});
