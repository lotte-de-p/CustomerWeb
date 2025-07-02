import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MobileBarringGroup,
  MobileBarringsDatalayer,
  MobileBarringsDatalayerFacade,
  MobileBarringsFacade,
} from '@billing/barrings/mobile-barrings/data-access';
import { LoginDetails, UserDetailsService } from '@telenet/ng-lib-ocapi';
import { of } from 'rxjs';
import { MobileBarringsComponent } from './mobile-barrings.component';
import { MobileLine } from '@billing/shared/data-access';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MobileBarringsComponent', () => {
  let component: MobileBarringsComponent;
  let fixture: ComponentFixture<MobileBarringsComponent>;
  let facade: MobileBarringsFacade;

  const mockMobileBarringGroups = [
    {
      code: 'general',
      barringSettings: [
        {
          id: '1',
          code: 'all-incoming-and-outgoing',
          isSetByFraudManager: false,
          isBarred: false,
          mutualExclusiveBarringIds: ['2'],
        },
      ],
    },
    {
      code: 'roaming',
      barringSettings: [
        { id: '2', code: 'roaingBarring', isSetByFraudManager: false, isBarred: false, mutualExclusiveBarringIds: [] },
      ],
    },
  ];
  const mockMobileBarringGroupsAfterFraud: MobileBarringGroup[] = [
    {
      code: 'general',
      disabledByFraud: false,
      barringSettings: [
        {
          id: '1',
          code: 'all-incoming-and-outgoing',
          isSetByFraudManager: false,
          isBarred: false,
          mutualExclusiveBarringIds: ['2'],
        },
      ],
    },
    {
      code: 'roaming',
      disabledByFraud: false,
      barringSettings: [
        { id: '2', code: 'roaingBarring', isSetByFraudManager: false, isBarred: false, mutualExclusiveBarringIds: [] },
      ],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientTestingModule, StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
        {
          provide: MobileBarringsFacade,
          useValue: {
            mobileBarringGroups$: of(mockMobileBarringGroups),
            mobileBarringReadOnly$: of(true),
            mobileBarringProductStatus$: of('ACTIVE'),
            loadingState$: of(false),
            setSelectedMobileLine: jest.fn(),
            triggerLoading: jest.fn(),
            updateBarrings: jest.fn().mockReturnValue(of({ barringGroups: mockMobileBarringGroups })),
            setMobileBarringGroups: jest.fn(),
          },
        },
        {
          provide: MobileBarringsDatalayerFacade,
          useValue: {
            initDataLayer: jest.fn(),
            sendDatalayerEvent: jest.fn(),
          },
        },
        {
          provide: UserDetailsService,
          useValue: {
            getUserDetails: jest.fn().mockReturnValue(of({ advisorId: '12345' })),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileBarringsComponent);
    component = fixture.componentInstance;
    facade = TestBed.inject(MobileBarringsFacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize mobile barring groups after login', () => {
    component.isReadOnly = false;
    jest.spyOn(component, 'addAnalyticsEvent');

    component.initAfterLoggedIn();

    expect(component['datalayerFacade'].initDataLayer).toHaveBeenCalled();
    expect(component.originalMobileBarringGroups).toEqual(mockMobileBarringGroupsAfterFraud);
    expect(component.mobileBarringGroups.length).toBe(2);
    expect(component.mobileBarringGroups[0].code).toBe('general');
    expect(component.isReadOnly).toEqual(true);
    expect(component.addAnalyticsEvent).toHaveBeenCalled();
  });

  it('should select a mobile line', () => {
    const mobileLine = { msisdn: '1234567890' } as MobileLine;
    component.onSelectMobileLine(mobileLine);
    expect(facade.setSelectedMobileLine).toHaveBeenCalledWith(mobileLine);
  });

  it('should check for fraud', () => {
    component.initAfterLoggedIn();
    component.mobileBarringGroups[0].barringSettings[0].isSetByFraudManager = true;
    const groups = component.checkFraud(component.mobileBarringGroups);
    expect(groups[0].disabledByFraud).toEqual(true);
    expect(groups[1].disabledByFraud).toEqual(true);
  });

  it('should toggle barring setting', () => {
    component.mobileBarringGroups = [
      { code: 'general', barringSettings: [{ id: '1', isBarred: false, code: 'code', isSetByFraudManager: false }] },
    ];
    const data = {
      setting: { id: '1', isBarred: true, code: 'code', isSetByFraudManager: false },
      groupCode: 'general',
    };
    component.toggleBarring(data);
    expect(component.mobileBarringGroups[0].barringSettings[0].isBarred).toBe(true);
  });

  it('should send analytics', () => {
    const event: MobileBarringsDatalayer = {
      attributeName: 'test',
      eventName: 'eventName',
      eventType: 'eventType',
    };
    component.addAnalyticsEvent(event);
    expect(component['datalayerFacade'].sendDatalayerEvent).toHaveBeenCalledWith(event);
  });

  it('should check for fraud', () => {
    component.initAfterLoggedIn();
    component.mobileBarringGroups[0].barringSettings[0].isSetByFraudManager = true;
    const groups = component.checkFraud(component.mobileBarringGroups);
    expect(groups[0].disabledByFraud).toEqual(true);
    expect(groups[1].disabledByFraud).toEqual(true);
  });

  it('should check for global setting', () => {
    component.initAfterLoggedIn();
    component.mobileBarringGroups[0].barringSettings[0].isBarred = true;
    const result = component.checkForGlobalSetting();

    expect(result).toEqual(true);
  });

  it('should cancel changes', () => {
    component.initAfterLoggedIn();
    component.mobileBarringGroups[0].barringSettings[0].isBarred = true;
    component.cancel();
    expect(component.mobileBarringGroups[0].barringSettings[0].isBarred).toBe(false);
  });

  it('should save', () => {
    component.mobileBarringGroups = [
      { code: 'general', barringSettings: [{ id: '1', isBarred: true, code: 'code', isSetByFraudManager: false }] },
    ];
    component.originalMobileBarringGroups = [
      { code: 'general', barringSettings: [{ id: '1', isBarred: false, code: 'code', isSetByFraudManager: false }] },
    ];
    component['facade'].selectMobileBarringSelectedMobileLine$ = of({
      msisdn: '0499887766',
      name: '',
      isDataOnly: false,
      status: 'ACTIVE',
    } as MobileLine);
    jest
      .spyOn(component['userDetailsService'], 'getUserDetails')
      .mockReturnValue(of({ advisorId: '111' } as LoginDetails));
    const payload = { updateBarringSettings: [{ id: '1', isBarred: true }], advisorId: '111' };

    component.save();

    expect(component['facade'].updateBarrings).toHaveBeenCalledWith(payload, '0499887766');
    expect(component.saveSuccessful).toEqual(true);
  });
});
