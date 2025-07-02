import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBaseDashboardInternetUsageCardComponent } from './mybase-dashboard-internet-usage-card.component';
import { UsageStatusEnum } from '@mybase-dashboard/data-access';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('MybaseDashboardUsageCardComponent', () => {
  let component: MyBaseDashboardInternetUsageCardComponent;
  let fixture: ComponentFixture<MyBaseDashboardInternetUsageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MyBaseDashboardInternetUsageCardComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [{ provide: 'Window', useValue: { location: {} } }],
    }).compileComponents();

    fixture = TestBed.createComponent(MyBaseDashboardInternetUsageCardComponent);
    component = fixture.componentInstance;

    component.internetUsage = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should return true when all the usage status are OK', () => {
      component.internetUsage = [
        {
          productName: 'BASE Limited',
          usageStatus: UsageStatusEnum.OK,
          address: {
            street: 'Liersesteenweg',
            houseNumber: '1',
            subHouseNumber: '10',
            boxNumber: '30',
            floor: '0',
            municipality: 'Mechelen',
            country: 'België',
            postalCode: '2800',
          },
        },
        {
          productName: 'BASE Limited 2 ',
          usageStatus: UsageStatusEnum.OK,
          address: {
            street: 'Liersesteenweg',
            houseNumber: '1',
            subHouseNumber: '10',
            boxNumber: '30',
            floor: '0',
            municipality: 'Mechelen',
            country: 'België',
            postalCode: '2800',
          },
        },
      ];
      component.ngOnInit();

      expect(component.smoothSurfing).toBeTruthy();
    });

    it('should return false when one of the usage status is not OK', () => {
      component.internetUsage = [
        {
          productName: 'BASE Limited',
          usageStatus: UsageStatusEnum.OK,
          address: {
            street: 'Liersesteenweg',
            houseNumber: '1',
            subHouseNumber: '10',
            boxNumber: '30',
            floor: '0',
            municipality: 'Mechelen',
            country: 'België',
            postalCode: '2800',
          },
        },
        {
          productName: 'BASE Limited 2 ',
          usageStatus: UsageStatusEnum.LIMIT_ALMOST_REACHED,
          address: {
            street: 'Liersesteenweg',
            houseNumber: '1',
            subHouseNumber: '10',
            boxNumber: '30',
            floor: '0',
            municipality: 'Mechelen',
            country: 'België',
            postalCode: '2800',
          },
        },
      ];

      component.ngOnInit();

      expect(component.smoothSurfing).toBeFalsy();
    });
  });

  describe('getCompleteAddress', () => {
    it('Should get complete address ', () => {
      const actual = component.getCompleteAddress('xyz', '1', '2', '3');
      expect(actual).toBe('xyz 1/2/3');
    });

    it('Should get partial address if box no is not present', () => {
      const actual = component.getCompleteAddress('xyz', '1', '2', undefined);
      expect(actual).toBe('xyz 1/2');
    });

    it('Should get partial address if subHouse is not present', () => {
      const actual = component.getCompleteAddress('xyz', '1', undefined, '3');
      expect(actual).toBe('xyz 1/3');
    });

    it('Should not load address in case of undefined address', () => {
      const actual = component.getCompleteAddress('', '122', '2', '3');
      expect(actual).toBe(undefined);
    });
  });

  describe('redirectToUsage', () => {
    it('should redirect to mobile url', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.internetUsagePageUrl = 'https://www.int.base.be/en/customer-zone/internet';

      component.redirectToUsage();

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith(
        'https://www.int.base.be/en/customer-zone/internet'
      );
    });

    it('should not redirect with clickable false', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.internetUsagePageUrl = 'https://www.int.base.be';

      component.redirectToUsage(false);

      expect(component['urlService'].redirectTo).not.toHaveBeenCalledWith('https://www.int.base.be');
    });
  });
});
