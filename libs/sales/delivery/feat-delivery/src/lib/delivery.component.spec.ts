import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeliveryComponent } from './delivery.component';
import { EventFacade } from '@sales/events/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import {
  addressFieldValueTestFactory,
  DeliveryFacade,
  PersonalInfo,
  personalInfoFactory,
} from '@sales/delivery/data-access';
import { of } from 'rxjs';

describe('DeliveryComponent', () => {
  let component: DeliveryComponent;
  let fixture: ComponentFixture<DeliveryComponent>;
  let eventFacade: EventFacade;
  let deliveryFacade: DeliveryFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: window }, provideMockStore()],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryComponent);
    eventFacade = TestBed.inject(EventFacade);
    deliveryFacade = TestBed.inject(DeliveryFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jest.spyOn(eventFacade, 'triggerEvent');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    it('should open overlay if required email is missing', () => {
      const incompletePersonalInfo: PersonalInfo = personalInfoFactory.build({ email: '' });
      deliveryFacade.personalInfo$ = of(incompletePersonalInfo);
      jest.spyOn(component, 'setChangeAddressState');

      component.ngOnInit();

      expect(component.viewModel.validatePersonalInfoOnInit).toBeTruthy();
      expect(component.setChangeAddressState).toHaveBeenCalled();
    });
    it('should open overlay if required mobile is missing', () => {
      const incompletePersonalInfo: PersonalInfo = personalInfoFactory.build({ mobile: '' });
      deliveryFacade.personalInfo$ = of(incompletePersonalInfo);
      jest.spyOn(component, 'setChangeAddressState');

      component.ngOnInit();

      expect(component.viewModel.validatePersonalInfoOnInit).toBeTruthy();
      expect(component.setChangeAddressState).toHaveBeenCalled();
    });
    it('should open overlay if personal info is missing', () => {
      deliveryFacade.personalInfo$ = of(undefined);
      jest.spyOn(component, 'setChangeAddressState');

      component.ngOnInit();

      expect(component.viewModel.validatePersonalInfoOnInit).toBeTruthy();
      expect(component.setChangeAddressState).toHaveBeenCalled();
    });
  });

  describe('saveNewpersonalInfo', () => {
    it('should set validatePersonalInfoOnInit to false', () => {
      component.saveNewPersonalInfo({
        personalInfo: personalInfoFactory.build(),
        deliveryAddress: addressFieldValueTestFactory.build(),
      });

      expect(component.viewModel.validatePersonalInfoOnInit).toBeFalsy();
    });
  });
});
