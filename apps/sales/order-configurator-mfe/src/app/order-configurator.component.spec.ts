import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderConfiguratorComponent } from './order-configurator.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderConfiguratorService } from './services/order-configurator.service';
import { OrderConfiguratorFacade } from '@sales/order-configurator/order-configurator-data-access';
import { of, throwError } from 'rxjs';
import { ComponentStep } from '@sales/shared/data-access';
import { InstallationAddressComponent } from '@sales/address/ui';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderConfiguratorComponent', () => {
  let component: OrderConfiguratorComponent;
  let fixture: ComponentFixture<OrderConfiguratorComponent>;
  let orderConfiguratorService: jest.Mocked<OrderConfiguratorService>;
  let orderConfiguratorFacade: jest.Mocked<OrderConfiguratorFacade>;

  beforeEach(async () => {
    orderConfiguratorService = {
      initialiseFlow: jest.fn().mockReturnValue(of([])), // Return an empty observable by default
    } as unknown as jest.Mocked<OrderConfiguratorService>;

    orderConfiguratorFacade = {
      errors$: of(null),
      preLoading$: of(false),
      loadOfferFromUrl: jest.fn(),
      loadCustomerAccount: jest.fn(),
    } as unknown as jest.Mocked<OrderConfiguratorFacade>;

    await TestBed.configureTestingModule({
      imports: [
        OrderConfiguratorComponent,
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
      ],
      providers: [
        { provide: OrderConfiguratorService, useValue: orderConfiguratorService },
        { provide: OrderConfiguratorFacade, useValue: orderConfiguratorFacade },
        { provide: 'Window', useValue: window },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the flow on ngOnInit', () => {
    const componentSteps: ComponentStep[] = [
      {
        key: 'step1',
        component: InstallationAddressComponent,
      },
    ];
    orderConfiguratorService.initialiseFlow.mockReturnValue(of(componentSteps));

    component.ngOnInit();

    expect(orderConfiguratorService.initialiseFlow).toHaveBeenCalled();
    expect(component.componentSteps).toEqual(componentSteps);
    expect(component.initialised).toBeTruthy();
  });

  it('should handle errors during initialization', () => {
    const error = new Error('Test Error');
    orderConfiguratorService.initialiseFlow.mockReturnValue(throwError(() => error));
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    component.ngOnInit();

    expect(orderConfiguratorService.initialiseFlow).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('An error occurred', error);
  });

  it('should set errors$ observable correctly', () => {
    fixture.detectChanges();
    expect(component.errors$).toBe(orderConfiguratorFacade.errors$);
  });

  it('should handle exceptions in initialiseFlow gracefully', () => {
    const error = new Error('Unexpected Error');
    orderConfiguratorService.initialiseFlow.mockImplementation(() => {
      throw error;
    });
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    component.ngOnInit();

    expect(orderConfiguratorService.initialiseFlow).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('An error occurred', error);
  });

  it('should preload offer from url and customer account', () => {
    const componentSteps: ComponentStep[] = [
      {
        key: 'step1',
        component: InstallationAddressComponent,
      },
    ];
    orderConfiguratorService.initialiseFlow.mockReturnValue(of(componentSteps));

    component.ngOnInit();

    expect(orderConfiguratorFacade.loadOfferFromUrl).toHaveBeenCalled();
    expect(orderConfiguratorFacade.loadCustomerAccount).toHaveBeenCalled();
  });
});
