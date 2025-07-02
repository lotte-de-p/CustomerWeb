import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getReturnDevicesAndAddressLineDetails,
  getReturnLabel,
  selectedAddress,
  toggleDevice,
} from '../+state/return-devices.actions';
import { ReturnDevicesSlice } from '../+state/return-devices.state';
import {
  selectDeviceDetailsLoaded,
  selectedAddressLine,
  selectedDevicesList,
  selectReturnDeviceAddressLines,
  selectReturnDevices,
  selectReturnDevicesFailure,
  selectReturnLabel,
} from '../+state/return-devices.selectors';
import { PdfService } from '../services/pdf.service';
import { Device } from '../entities/device.model';
import { AddressSelectorModel } from '../entities/address-selector.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReturnDevicesFacade {
  private readonly store = inject(Store<ReturnDevicesSlice>);
  private readonly pdfService = inject(PdfService);

  readonly returnDevices$ = this.store.select(selectReturnDevices);
  readonly returnLabel$ = this.store.select(selectReturnLabel);
  readonly returnDevicesFailure$ = this.store.select(selectReturnDevicesFailure);
  readonly returnLabelByteArray$ = this.returnLabel$.pipe(
    map((returnLabelByte: string | undefined) => this.convertToByteArray(returnLabelByte))
  );
  readonly returnDevicesAddressLines$ = this.store.select(selectReturnDeviceAddressLines);
  readonly selectedAddressLine$ = this.store.select(selectedAddressLine);
  readonly selectedDevicesList$ = this.store.select(selectedDevicesList);
  readonly selectDeviceDetailsLoaded$ = this.store.select(selectDeviceDetailsLoaded);

  loadReturnLabel(addressId: string): void {
    this.store.dispatch(getReturnLabel({ addressId }));
  }

  toggleDevice(device: Device): void {
    this.store.dispatch(toggleDevice({ device }));
  }

  private convertToByteArray(returnLabel: string | undefined): Uint8Array {
    if (!returnLabel) {
      return new Uint8Array();
    }

    return this.pdfService.convertBase64ToByteArray(returnLabel);
  }

  getAddressSelector(): void {
    this.store.dispatch(getReturnDevicesAndAddressLineDetails());
  }

  selectedAddress(selectedAddressLine: AddressSelectorModel | null): void {
    this.store.dispatch(selectedAddress({ selectedAddressLine }));
  }
}
