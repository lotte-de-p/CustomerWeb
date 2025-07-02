import { Injectable } from '@angular/core';
import { RawDevice } from '../entities/raw-device.model';
import { Device, ReturnStatusEnum } from '../entities/device.model';

@Injectable({
  providedIn: 'root',
})
export class ReturnDevicesMapper {
  toModel(rawDevices: RawDevice[]): Device[] {
    return rawDevices.map((raw: RawDevice) => ({
      name: raw.name,
      type: raw.type,
      typeImageName: this.mapTypeImageName(raw.type),
      addressId: raw.addressId,
      locationId: raw.locationId,
      serialNumber: raw.serialNumber,
      parentId: raw.parentId,
      returnDueDate: raw.returnDueDate,
      lateFee: raw.lateFee,
      status: raw.status,
      returnStatus: this.mapReturnStatus(raw.returnDueDate),
      isToggled: false,
    }));
  }

  private mapReturnStatus(returnDueDate: string): ReturnStatusEnum {
    if (!returnDueDate) {
      return ReturnStatusEnum.TO_BE_EXPECTED;
    }

    const currentDate = new Date();
    const dueDateTime = new Date(returnDueDate);
    const timeDifference = dueDateTime.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    if (daysDifference < 0) {
      return ReturnStatusEnum.EXPIRED;
    }
    if (daysDifference <= 31) {
      return ReturnStatusEnum.URGENT;
    }
    return ReturnStatusEnum.TO_BE_EXPECTED;
  }

  private mapTypeImageName(type: string): string {
    switch (type) {
      case 'Access Points':
        return 'access_point';
      case 'DTV Box':
        return 'dtvbox';
      case 'Modem':
        return 'modem';
      case 'Modem Accessories':
        return 'modem_accessories';
      case 'Powerlines':
        return 'powerline';

      default:
        return 'return-device-default';
    }
  }
}
