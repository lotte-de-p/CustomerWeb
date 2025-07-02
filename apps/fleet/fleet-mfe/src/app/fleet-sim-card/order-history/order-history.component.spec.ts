import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderService } from '@telenet/ng-lib-page';
import { OrderHistoryComponent } from './order-history.component';
import { OrderHistoryService } from './service/order-history.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OrderHistoryModel } from './models/order-history.model';
import { expect, jest } from '@jest/globals';
import { of } from 'rxjs';

describe('OrderHistoryComponent', () => {
  let component: OrderHistoryComponent;
  let fixture: ComponentFixture<OrderHistoryComponent>;
  let orderHistoryService: OrderHistoryService;
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OrderHistoryComponent, HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [OrderHistoryService, LoaderService, { provide: 'Window', useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryComponent);
    component = fixture.componentInstance;
    orderHistoryService = TestBed.inject(OrderHistoryService);
    loaderService = TestBed.inject(LoaderService);
    component.toggledItems = new Array<string>();
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('initAfterLoggedIn - should get customer order history', () => {
    const failedOrders: OrderHistoryModel[] = [{} as OrderHistoryModel] as OrderHistoryModel[];

    jest.spyOn(orderHistoryService, 'getOrderHistory').mockReturnValue(of(failedOrders));
    jest.spyOn(loaderService, 'start');
    jest.spyOn(loaderService, 'stop');

    component.initAfterLoggedIn();

    component.failedOrders$?.subscribe((responseFailedOrders) => expect(responseFailedOrders).toBe(failedOrders));
    expect(loaderService.start).toHaveBeenCalled();
    expect(loaderService.stop).toHaveBeenCalled();
  });

  describe('toggle', () => {
    const orderIdentifier = 'test123';

    it('should add item into toggledItems', () => {
      component.toggle(orderIdentifier);

      expect(component.toggledItems).toContain(orderIdentifier);
    });

    it('should remove item form toggledItems', () => {
      component.toggledItems.push(orderIdentifier);

      component.toggle(orderIdentifier);

      expect(component.toggledItems).not.toContain(orderIdentifier);
    });
  });

  describe('hasAny', () => {
    it('should check and return true if the given array has any entry', () => {
      const result = component.hasAny([new OrderHistoryModel()]);

      expect(result).toBe(true);
    });

    it('should check and return false if the the given array has no entry', () => {
      const result = component.hasAny([]);

      expect(result).toBe(false);
    });
  });
});
