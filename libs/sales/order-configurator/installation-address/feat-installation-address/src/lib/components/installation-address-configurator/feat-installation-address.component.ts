import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EventFacade } from '@sales/events/data-access';
import { installationAddressStepLoaded } from '../../events/installation-address-step-loaded.const';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { AssetService } from '@telenet/ng-lib-page';
import { StepFacade } from '@sales/shared/data-access';
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { AddressListComponent } from '../../ui/address-list/address-list.component';
import { stepImage } from '../../constants/installation-address.const';
import { ViewModel } from './view-model.interface';
import { Store } from '@ngrx/store';
import { AddressFormFieldComponent } from '@sales/address-form-field/feat-address-form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { InstallationAddressComponent } from '../../ui/installation-address/installation-address.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { OverlayPopupComponent } from '@telenet/ng-lib-shared';
import { AddressFieldValue } from '@sales/address-form-field/data-access';
import { InstallationAddress } from '@sales/order-configurator/domain-installation-address';
import { addresses, manuallyAddedAddress, selectedAddress } from '../../+state/address.selectors';
import { AddressNgrxModule } from '../../+state/address-ngrx.module';
import { setNewInstallationAddress, setSelectedAddress } from '../../+state/address.actions';
import { InstallationAddressUtil } from '../../utils/installationAddress.util';
import { InstallationAddressFormComponent } from '../installation-address-form/installation-address-form.component';
import { InstallationAddressOverlayFormComponent } from '../installation-address-overlay-form/installation-address-overlay-form.component';

@Component({
  selector: 'tg-sales-feat-installation-address',
  standalone: true,
  imports: [
    TranslateModule,
    AddressListComponent,
    InlineSVGModule,
    AsyncPipe,
    NgClass,
    NgTemplateOutlet,
    AddressNgrxModule,
    AddressFormFieldComponent,
    ReactiveFormsModule,
    InstallationAddressComponent,
    InstallationAddressComponent,
    OverlayPopupComponent,
    InstallationAddressFormComponent,
    InstallationAddressOverlayFormComponent,
  ],
  templateUrl: './feat-installation-address.component.html',
})
@UntilDestroy()
export class FeatInstallationAddressComponent implements OnInit {
  viewModel: ViewModel | undefined;
  isAddressFormVisible = false;

  constructor(
    private readonly eventFacade: EventFacade,
    private readonly store: Store,
    private readonly stepFacade: StepFacade
  ) {
    this.viewModel = {
      stepImage: AssetService.getImagePath('HARDWARE_CHECKOUT', stepImage),
      addresses: this.store.select(addresses),
      manuallyAddedAddress: this.store.select(manuallyAddedAddress),
      selectedAddress: this.store.select(selectedAddress),
    };
  }

  ngOnInit() {
    this.eventFacade.triggerEvent(installationAddressStepLoaded);
    this.preselectAddress();
  }

  private preselectAddress() {
    this.viewModel?.manuallyAddedAddress.pipe(untilDestroyed(this)).subscribe((address) => {
      if (address) {
        this.store.dispatch(setSelectedAddress({ selectedAddress: address }));
      } else {
        this.stepFacade.hideNavigationBar();
      }
    });
    this.viewModel?.addresses.pipe(untilDestroyed(this)).subscribe((addresses) => {
      if (this.viewModel?.selectedAddress && addresses?.length) {
        this.store.dispatch(setSelectedAddress({ selectedAddress: addresses[0] }));
        this.stepFacade.displayNavigationBar();
      }
    });
  }

  onAddressSelected(address: InstallationAddress) {
    this.store.dispatch(setSelectedAddress({ selectedAddress: address }));
    this.stepFacade.displayNavigationBar();
    this.eventFacade.triggerAnalyticsClickEvent({ name: 'existing address selected' });
  }

  openAddressForm() {
    this.isAddressFormVisible = true;
    this.stepFacade.hideNavigationBar();
  }

  closeAddressForm() {
    this.isAddressFormVisible = false;
    this.stepFacade.displayNavigationBar();
  }

  onSubmit(manuallyAddedAddress: AddressFieldValue) {
    const formattedInstallationAddress =
      InstallationAddressUtil.convertFieldValueToInstallationAddress(manuallyAddedAddress);
    if (formattedInstallationAddress) {
      this.store.dispatch(setNewInstallationAddress({ newAddress: formattedInstallationAddress }));
      this.store.dispatch(setSelectedAddress({ selectedAddress: formattedInstallationAddress }));
      this.closeAddressForm();
    }
  }

  protected readonly selectedAddress = selectedAddress;
}
