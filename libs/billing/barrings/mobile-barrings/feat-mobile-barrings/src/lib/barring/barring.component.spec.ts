import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BarringComponent } from './barring.component';
import {
  MobileBarringGroup,
  MobileBarringSettings,
  MobileBarringsDatalayer,
} from '@billing/barrings/mobile-barrings/data-access';

describe('BarringComponent', () => {
  let component: BarringComponent;
  let fixture: ComponentFixture<BarringComponent>;

  const mockBarringGroup: MobileBarringGroup = {
    code: 'general',
    disabledByFraud: false,
    barringSettings: [
      { id: '1', code: 'code', isBarred: true, mutualExclusiveBarringIds: [], isSetByFraudManager: false },
      { id: '2', code: 'sms-barring', isBarred: false, mutualExclusiveBarringIds: [], isSetByFraudManager: false },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: { window, udlObjectName: 'digitalData' } }],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BarringComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set barringGroup and update activeBarrings', () => {
    component.barringGroup = { group: mockBarringGroup, savedBarring: true };
    expect(component.barringGroupData).toEqual(mockBarringGroup);
    expect(component.activeBarrings).toEqual(['ng.mobile-barrings.barring-name.code']);
  });

  it('should emit analytics when fraude', () => {
    jest.spyOn(component.addAnalyticsEvent, 'emit');
    component.barringGroup = { group: { ...mockBarringGroup, disabledByFraud: true }, savedBarring: true };
    const analyticsEvent: MobileBarringsDatalayer = {
      eventName: 'message banner',
      eventType: 'view-banner',
      attributeName: 'fraud ban',
      attributeData: 'info',
      attributeGroup: 'general',
    };
    expect(component.addAnalyticsEvent.emit).toHaveBeenCalledWith(analyticsEvent);
  });

  it('should emit toggleBarring event', () => {
    jest.spyOn(component.toggleBarring, 'emit');
    component.barringGroup = { group: mockBarringGroup, savedBarring: true };

    const setting: MobileBarringSettings = {
      id: '1',
      code: 'code',
      isBarred: true,
      mutualExclusiveBarringIds: [],
      isSetByFraudManager: false,
    };
    component.switchBarring(setting);
    expect(component.toggleBarring.emit).toHaveBeenCalledWith({ setting, groupCode: 'general' });
  });

  it('should emit cancel event', () => {
    jest.spyOn(component.cancel, 'emit');
    component.cancel.emit();
    expect(component.cancel.emit).toHaveBeenCalled();
  });
});
