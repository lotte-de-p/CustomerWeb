import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotificationsService } from '../../service/notifications.service';
import { NgxsModule, Store } from '@ngxs/store';
import { PricedCphState } from '../../state/priced-cph.state';
import { Initialize, SetNotificationIfNotSet } from '../../state/priced-cph.actions';
import { BackendErrorNotification } from '../../model/backend-error.notification';
import { BusinessCustomerNotification } from '../../model/business-customer.notification';
import { NoManagerNotification } from '../../model/no-manager.notification';
import { NoProductsNotification } from '../../model/no-products.notification';
import { PricedCustomerProductHoldingComponent } from './priced-customer-product-holding.component';

describe('PricedCustomerProductHoldingComponent', () => {
  let component: PricedCustomerProductHoldingComponent;
  let fixture: ComponentFixture<PricedCustomerProductHoldingComponent>;
  let notificationsService: NotificationsService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService, { provide: 'Window', useValue: {} }],
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot([PricedCphState]),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    });

    store = TestBed.inject(Store);
    notificationsService = TestBed.inject(NotificationsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricedCustomerProductHoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', function () {
    it('should initialize state', () => {
      store.dispatch = jest.fn().mockReturnValue(of(undefined));
      component.ngOnInit();

      const initialize = new Initialize();
      expect(store.dispatch).toHaveBeenCalledWith(initialize);
    });

    describe('should check notifications', () => {
      const NOTIFICATIONS = [
        new BackendErrorNotification(),
        new BusinessCustomerNotification(),
        new NoManagerNotification(),
        new NoProductsNotification(),
      ];
      it('should set notifications to undefined if nothing matches', function () {
        store.dispatch = jest.fn().mockReturnValue(of(true));
        notificationsService.notificationsIfConditionsMet$ = jest.fn().mockReturnValue(of(undefined));
        component.ngOnInit();

        expect(notificationsService.notificationsIfConditionsMet$).toHaveBeenCalledWith(NOTIFICATIONS);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(new Initialize());
      });
      it('should set notification to store if any found', function () {
        store.dispatch = jest.fn().mockReturnValue(of(true));
        const noManagerNotification = new NoManagerNotification();
        notificationsService.notificationsIfConditionsMet$ = jest.fn().mockReturnValue(of(noManagerNotification));

        component.ngOnInit();

        expect(notificationsService.notificationsIfConditionsMet$).toHaveBeenCalledWith(NOTIFICATIONS);
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith(new Initialize());
        expect(store.dispatch).toHaveBeenCalledWith(new SetNotificationIfNotSet(noManagerNotification));
      });
    });
  });
});
