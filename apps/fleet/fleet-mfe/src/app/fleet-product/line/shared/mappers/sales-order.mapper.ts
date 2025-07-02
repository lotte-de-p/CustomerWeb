import { Injectable } from '@angular/core';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { MapperInterface } from '@telenet/ng-lib-shared';
import includes from 'lodash-es/includes';
import isEmpty from 'lodash-es/isEmpty';
import { NCTimeSlot, NCTimeSlotAvailability, NCTimeSlotList } from '@telenet/ng-lib-form';
import {
  OnTopPromosInterface,
  RegistrationInterface,
  SalesOrder,
  ValidationInterface,
} from '../models/sales-order/sales-order.model';
import { OrderItemMapper } from './order-item.mapper';
import { LineItemDto, RegistrationDto, SalesOrderDto } from '../interfaces/dto/sales-order-dto.interface';
import { PricesMapper } from './sales/prices.mapper';
import { DeliveryItemMapper } from './sales/delivery-item.mapper';
import { LineItemMapper } from './sales/line-item.mapper';
import { ValidationMapper } from './sales/validation.mapper';
import { LineItem } from '../models/sales-order/line-item.model';
import { DeliveryItemDto } from '../interfaces/dto/delivery-item-dto.interface';
import { DeliveryItem } from '../models/sales-order/delivery-item.model';
import { OrderItemDto, ValidationDto } from '../interfaces/dto/order-item-dto.interface';
import {
  AvailabilitiesDto,
  InstallationDto,
  TimeSlotAvailabilityDto,
} from '../interfaces/dto/installation-dto.interface';
import { InstallationInterface } from '../interfaces/installation.interface';
import { Address } from '../models/address.model';
import { OrderItem } from '../models/sales-order/order-item.model';
import { InstallationTypeEnum } from '../enums/installation.enum';
@Injectable({
  providedIn: 'root',
})
export class SalesOrderMapper implements MapperInterface<SalesOrderDto, SalesOrder> {
  constructor(
    private readonly pricesMapper: PricesMapper,
    private readonly deliveryItemMapper: DeliveryItemMapper,
    private readonly lineItemMapper: LineItemMapper,
    private readonly validationMapper: ValidationMapper,
    private readonly orderItemMapper: OrderItemMapper,
    private readonly omapiProductMapper: OmapiProductMapper
  ) {}

  toModel(rawSalesOrder: SalesOrderDto): SalesOrder {
    return this.createSuccesResponse(rawSalesOrder);
  }

  private createSuccesResponse(rawSalesOrder: SalesOrderDto): SalesOrder {
    const salesOrder = new SalesOrder();
    if (!isEmpty(rawSalesOrder)) {
      salesOrder.success = true;
      salesOrder.status = rawSalesOrder.status;
      salesOrder.customerId = rawSalesOrder.customerId;
      salesOrder.id = rawSalesOrder.id;
      salesOrder.name = rawSalesOrder.name;
      salesOrder.prices = this.pricesMapper.toModel(rawSalesOrder.prices);
      salesOrder.lineCount = rawSalesOrder.lineCount;
      salesOrder.token = rawSalesOrder.token;
      salesOrder.lineItems = this.createLineItems(rawSalesOrder.lineItems);
      salesOrder.deliveryItems = this.createDeliveryItems(rawSalesOrder.deliveryItems);
      salesOrder.validations = this.createValidations(rawSalesOrder.validations);
      salesOrder.pricesWereUpdated = rawSalesOrder.pricesWereUpdated;
      salesOrder.mobileLinesInNewBundle = rawSalesOrder.mobileLinesInNewBundle;
      salesOrder.manualAddress = rawSalesOrder.manualAddress;
      salesOrder.feasibilityCheckRequired = rawSalesOrder.feasibilityCheckRequired;
      salesOrder.installation = this.createInstallation(rawSalesOrder.installation);
      salesOrder.modemSwapReq = rawSalesOrder.modemSwapReq;
      salesOrder.manualProcessingRequired = rawSalesOrder.manualProcessingRequired;
      salesOrder.contractSummaryReRequired = rawSalesOrder.contractSummaryReRequired;
      salesOrder.isSlotAvailable = rawSalesOrder.isSlotAvailable;
      salesOrder.isBundleFamilySame = rawSalesOrder.isBundleFamilySame;
      salesOrder.hwItems = this.createInstallation(rawSalesOrder.hwitems);
      salesOrder.isBillDeliveryMethodChanged = rawSalesOrder.isBillDeliveryMethodChanged;
      salesOrder.registration = this.createRegistration(rawSalesOrder.registration);
      salesOrder.promo = this.createPromo(rawSalesOrder.promo);
      salesOrder.amountOfLimitedSims = rawSalesOrder.amountOfLimitedSims;
      salesOrder.eSimAllowed = rawSalesOrder.eSimAllowed;
      salesOrder.taskGroupId = rawSalesOrder.taskGroupId;
      salesOrder.oneTimeEarlyTerminationFee = rawSalesOrder.oneTimeEarlyTerminationFee;
    }
    return salesOrder;
  }

  private createLineItems(rawLineItems: LineItemDto[]): LineItem[] {
    return (
      rawLineItems &&
      rawLineItems.map((rawLineItem) => {
        return this.lineItemMapper.toModel(rawLineItem);
      })
    );
  }

  private createDeliveryItems(rawDeliveryItems: DeliveryItemDto[]): DeliveryItem[] {
    return (
      rawDeliveryItems &&
      rawDeliveryItems.map((rawDeliveryItem) => {
        return this.deliveryItemMapper.toModel(rawDeliveryItem);
      })
    );
  }

  private createValidations(rawSalesOrderValidations: ValidationDto[]): ValidationInterface[] {
    return (
      rawSalesOrderValidations &&
      rawSalesOrderValidations.map((rawSalesOrderValidation) => {
        return this.validationMapper.toModel(rawSalesOrderValidation);
      })
    );
  }

  private createInstallation(rawInstallation: InstallationDto): InstallationInterface {
    const installation = {} as InstallationInterface;
    if (rawInstallation) {
      if (rawInstallation.type) {
        installation.type = rawInstallation.type;
        installation.normalizedType = this.normalizeInstallationOptionName(installation.type);
      }
      if (rawInstallation.addressId) {
        installation.addressId = rawInstallation.addressId;
      }
      if (rawInstallation.manualAddress) {
        installation.manualAddress = new Address();
        installation.manualAddress.country = rawInstallation.manualAddress.country;
        installation.manualAddress.houseNumber = rawInstallation.manualAddress.houseNumber;
        installation.manualAddress.boxNumber = rawInstallation.manualAddress.boxNumber;
        installation.manualAddress.subHouseNumber = rawInstallation.manualAddress.subHouseNumber;
        installation.manualAddress.street = rawInstallation.manualAddress.street;
        installation.manualAddress.streetId = rawInstallation.manualAddress.streetId;
        installation.manualAddress.postalCode = rawInstallation.manualAddress.postalCode;
        installation.manualAddress.municipality = rawInstallation.manualAddress.municipality;
      }
      if (rawInstallation.appointment) {
        installation.appointment = {};
        installation.appointment.date = rawInstallation.appointment.date;
        installation.appointment.priceCategory = rawInstallation.appointment.priceCategory;
        installation.appointment.timeSlotCode = rawInstallation.appointment.timeSlotCode;
      }

      if (rawInstallation.relocate) {
        installation.relocate = {
          date: new Date(rawInstallation.relocate.date),
          oldAddressId: rawInstallation.relocate.oldAddressId,
        };
      }

      if (rawInstallation.appointments) {
        installation.appointments = new NCTimeSlotList();
        installation.appointments.availabilities =
          rawInstallation.appointments.availabilities &&
          rawInstallation.appointments.availabilities.map((availabilities) => {
            return this.createAppointmentAvailabilities(availabilities);
          });
      }

      installation.orderItems = this.createOrderItems(rawInstallation.orderItems);
      installation.isFtthAppointment = rawInstallation.isFtthAppointment;
    }
    return installation;
  }

  private createAppointmentAvailabilities(availabilities: AvailabilitiesDto): NCTimeSlot {
    const appointmentAvailability = new NCTimeSlot();
    appointmentAvailability.date = new Date(availabilities.date);
    appointmentAvailability.timeSlots =
      availabilities.slots &&
      availabilities.slots.map((slot) => {
        return this.createSlotsForAppointments(slot);
      });
    return appointmentAvailability;
  }

  private createSlotsForAppointments(slot: TimeSlotAvailabilityDto): NCTimeSlotAvailability {
    const availabilitySlot = new NCTimeSlotAvailability();
    availabilitySlot.availabilityId = slot.availabilityId;
    availabilitySlot.code = slot.timeSlotCode;
    availabilitySlot.timeFormat = slot.timeFormat;
    availabilitySlot.productInfo = this.omapiProductMapper.toModel(slot.productInfo);
    availabilitySlot.specUrl = slot.specurl;
    return availabilitySlot;
  }

  private normalizeInstallationOptionName(installationOptionName: string): string {
    if (includes(installationOptionName.toLowerCase(), InstallationTypeEnum.TYPE_HOME_DELIVERY.toLowerCase())) {
      return this.normalizeKey(InstallationTypeEnum.TYPE_HOME_DELIVERY);
    } else if (
      includes(installationOptionName.toLowerCase(), InstallationTypeEnum.TYPE_PICKUP_DELIVERY.toLowerCase())
    ) {
      return this.normalizeKey(InstallationTypeEnum.TYPE_PICKUP_DELIVERY);
    } else {
      return this.normalizeKey(installationOptionName);
    }
  }

  private normalizeKey(name: string): string {
    if (!isEmpty(name)) {
      return name.replace(/ /g, '-').toLowerCase();
    }
  }

  private createOrderItems(rawOrderItems: OrderItemDto[]): OrderItem[] {
    return (
      rawOrderItems &&
      rawOrderItems.map((rawOrderItem) => {
        return this.orderItemMapper.toModel(rawOrderItem);
      })
    );
  }

  private createRegistration(rawRegistration: RegistrationDto): RegistrationInterface {
    const registration = {} as RegistrationInterface;
    if (rawRegistration) {
      registration.orderItems = this.createOrderItems(rawRegistration.orderItems);
    }
    return registration;
  }

  private createPromo(rawPromo) {
    const promo = {} as OnTopPromosInterface;
    if (!isEmpty(rawPromo)) {
      promo.name = rawPromo.name;
      promo.validityPeriod = rawPromo.validityPeriod;
      promo.endValidityDate = rawPromo.endValidityDate;
    }
    return promo;
  }
}
