import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyBaseNavigationCardsComponent } from './mybase-navigation-cards.component';
import {
  MyBaseDashboardDatalayer,
  MyBaseDashboardDatalayerEventName,
  MyBaseDashboardDatalayerEventType,
  NavigationCardType,
} from '@mybase-dashboard/data-access';
import { UrlService } from '@telenet/ng-lib-page';
import { EventEmitter } from '@angular/core';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

describe('MyBaseNavigationCardsComponent', () => {
  let component: MyBaseNavigationCardsComponent;
  let fixture: ComponentFixture<MyBaseNavigationCardsComponent>;
  let urlService: UrlService;
  const mockUrl = 'https://mock-mobile-url.com';
  const speedTestUrl = 'https://speedtest-url.com';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MyBaseNavigationCardsComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [
        TranslateService,
        {
          provide: UrlService,
          useValue: {
            location: {},
            redirectTo: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MyBaseNavigationCardsComponent);
    component = fixture.componentInstance;
    urlService = TestBed.inject(UrlService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('should call updateData when data is changed', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updateDataSpy = jest.spyOn(component, 'updateData' as any);
      component.data = [NavigationCardType.MOBILE_USAGE_NOTIFICATIONS];

      component.ngOnChanges();
      expect(updateDataSpy).toHaveBeenCalled();
    });

    it('should update cards when data is set', () => {
      component.data = [NavigationCardType.MOBILE_USAGE_NOTIFICATIONS];
      component.mobileUsageNotificationUrl = 'https://mock-url.com';

      component.ngOnChanges();
      expect(component.cards.length).toBe(1);
    });

    it('should not update cards if URLs are missing', () => {
      component.data = [NavigationCardType.MOBILE_USAGE_NOTIFICATIONS];

      component.ngOnChanges();
      expect(component.cards.length).toBe(0);
    });
  });

  describe('redirectTo', () => {
    it('should emit analyticsData and call redirectTo with correct URL', () => {
      const mockCardType = NavigationCardType.MOBILE_USAGE_NOTIFICATIONS;

      const analyticsDataSpy = jest.spyOn(component.analyticsData, 'emit');
      component.mobileUsageNotificationUrl = mockUrl;

      component.redirectTo(mockCardType);

      expect(analyticsDataSpy).toHaveBeenCalledWith({
        eventName: MyBaseDashboardDatalayerEventName.CARD_CLICKED,
        eventType: MyBaseDashboardDatalayerEventType.CLICK_CARD,
        attributeData: '',
        attributeName: mockCardType,
        destinationUrl: mockUrl,
      });
      expect(urlService.redirectTo).toHaveBeenCalledWith(mockUrl);
    });
  });

  describe('getUrl', () => {
    it('should return correct URL for NavigationCardType.MOBILE_USAGE_NOTIFICATIONS', () => {
      component.mobileUsageNotificationUrl = mockUrl;

      const result = component.getUrl(NavigationCardType.MOBILE_USAGE_NOTIFICATIONS);
      expect(result).toBe(mockUrl);
    });

    it('should return correct URL for NavigationCardType.SPEEDTEST', () => {
      component.speedTestUrl = speedTestUrl;

      const result = component.getUrl(NavigationCardType.SPEEDTEST);
      expect(result).toBe(speedTestUrl);
    });

    it('should return correct URL for NavigationCardType.ADD_TV_BOX', () => {
      const mockUrl = 'https://add-tv-box.com';
      component.addTvBoxUrl = mockUrl;

      const result = component.getUrl(NavigationCardType.ADD_TV_BOX);
      expect(result).toBe(mockUrl);
    });
  });

  describe('updateData', () => {
    it('should filter out cards with missing URLs', () => {
      component.data = [NavigationCardType.MOBILE_USAGE_NOTIFICATIONS, NavigationCardType.SPEEDTEST];
      component.mobileUsageNotificationUrl = mockUrl;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(component, 'updateData' as any);

      component['updateData']();

      expect(component.cards.length).toBe(1); // Only one card should remain
      expect(component.cards[0]).toBe(NavigationCardType.MOBILE_USAGE_NOTIFICATIONS);
    });
  });

  describe('analyticsData Output', () => {
    it('should emit the analyticsData event with correct event structure', () => {
      const mockEvent: MyBaseDashboardDatalayer = {
        eventName: MyBaseDashboardDatalayerEventName.CARD_CLICKED,
        eventType: MyBaseDashboardDatalayerEventType.CLICK_CARD,
        attributeData: '',
        attributeName: NavigationCardType.SPEEDTEST,
        destinationUrl: speedTestUrl,
      };

      component.analyticsData = new EventEmitter<MyBaseDashboardDatalayer>();
      const analyticsDataSpy = jest.spyOn(component.analyticsData, 'emit');
      component.speedTestUrl = speedTestUrl;

      component.redirectTo(NavigationCardType.SPEEDTEST);

      expect(analyticsDataSpy).toHaveBeenCalledWith(mockEvent);
    });
  });
});
