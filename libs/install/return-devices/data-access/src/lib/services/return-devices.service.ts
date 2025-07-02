import { inject, Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { Device } from '../entities/device.model';
import { RawDevice } from '../entities/raw-device.model';
import { ReturnDevicesMapper } from '../mapper/return-devices.mapper';
import { RawReturnLabel, ReturnLabel } from '../entities/return-label.model';
import { ReturnLabelMapper } from '../mapper/return-label.mapper';
import { ReturnDevicesAddressSelectorMapper } from '../mapper/return-devices-address-selector.mapper';
import { AddressSelectorModel } from '../entities/address-selector.model';
import { RawAddressSelectorModel } from '../entities/raw-address-selector.model';

@Injectable({ providedIn: 'root' })
export class ReturnDevicesService {
  private readonly messageGroup = 'return-devices';
  private readonly endpoint = '/public/api/return-devices-service/v1/';
  private readonly ocapiService = inject(OcapiService);
  private readonly returnDevicesMapper = inject(ReturnDevicesMapper);
  private readonly returnLabelMapper = inject(ReturnLabelMapper);
  private readonly returnDevicesAddressSelectorMapper = inject(ReturnDevicesAddressSelectorMapper);

  getReturnDevices(): Observable<Device[]> {
    return this.ocapiService.doGet(
      new OcapiCallConfig<RawDevice[], Device[]>(
        this.messageGroup,
        this.endpoint + 'return-devices',
        this.returnDevicesMapper
      )
    );
  }

  getReturnLabel(addressId: string): Observable<ReturnLabel> {
    return this.ocapiService.doPost(
      new OcapiCallConfig<RawReturnLabel, ReturnLabel>(
        this.messageGroup,
        this.endpoint + 'return-labels',
        this.returnLabelMapper,
        {
          addressId: addressId,
        }
      )
    );
  }

  getAddressSelector(): Observable<AddressSelectorModel[]> {
    return this.ocapiService.doGet(
      new OcapiCallConfig<RawAddressSelectorModel[], AddressSelectorModel[]>(
        this.messageGroup,
        this.endpoint + 'addresses',
        this.returnDevicesAddressSelectorMapper
      )
    );
  }
}
