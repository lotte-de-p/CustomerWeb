import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryMethodCardComponent } from './delivery-method-card.component';
import {
  createDeliveryMethod,
  deliveryMethodTestfactory,
  DeliveryMethodTypeEnum,
  InstallationTypeEnum,
  rawInstallationTypeOptionHomeDeliveryTestFactory,
} from '@sales/order-configurator/installation-type/domain';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('DeliveryMethodCardComponent', () => {
  let component: DeliveryMethodCardComponent;
  let fixture: ComponentFixture<DeliveryMethodCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [
        DeliveryMethodCardComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryMethodCardComponent);

    component = fixture.componentInstance;
    component.deliveryMethod = createDeliveryMethod(rawInstallationTypeOptionHomeDeliveryTestFactory.build());
    component.installationType = InstallationTypeEnum.SELF_INSTALLATION;
    component.isSelected = false;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set descriptionCount to 2 for PICKUP_DELIVERY', () => {
    component.deliveryMethod = deliveryMethodTestfactory.build({ type: DeliveryMethodTypeEnum.PICKUP_DELIVERY });
    component.ngOnInit();
    expect(component.descriptionCount.length).toBe(2);
  });

  it('should set descriptionCount to 1 for SELF_INSTALL_AT_HOME', () => {
    component.deliveryMethod = deliveryMethodTestfactory.build({ type: DeliveryMethodTypeEnum.SELF_INSTALL_AT_HOME });
    component.ngOnInit();
    expect(component.descriptionCount.length).toBe(1);
  });

  it('should set descriptionCount to 3 for HOME', () => {
    component.deliveryMethod = deliveryMethodTestfactory.build({ type: DeliveryMethodTypeEnum.HOME });
    component.ngOnInit();
    expect(component.descriptionCount.length).toBe(3);
  });
});
