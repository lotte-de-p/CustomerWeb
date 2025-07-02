import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountSelectorConstants } from '../../constants/account-selector.constant';
import { NgClass } from '@angular/common';
import { ProductSubscriptionsInterface } from '../../../../shared/interfaces/product/product-subscriptions.interface';
import { PlannedMaintenanceService } from '../../../../shared/services/planned-maintenance.service';
import { AccountSelectorService } from '../../../../shared/services/account-selector.service';

@Component({
  selector: 'app-planned-maintenance-address-line-selector',
  templateUrl: './planned-maintenance-address-line-selector.component.html',
  imports: [NgClass],
  standalone: true,
})
export class PlannedMaintenanceAddressLineSelectorComponent implements OnInit {
  @Input() hideSelector: string;
  @Input() isSelectorOpen: boolean;
  @Output() toggle = new EventEmitter();

  messageGroupName: string = AccountSelectorConstants.MESSAGE_GROUP;
  addressLines: ProductSubscriptionsInterface[];
  addressLineSelected: ProductSubscriptionsInterface;
  isInitialized: boolean;

  constructor(
    private readonly accountSelectorService: AccountSelectorService,
    private readonly plannedMaintenanceService: PlannedMaintenanceService
  ) {}

  ngOnInit(): void {
    this.plannedMaintenanceService.loadPLMAddressLines(this.messageGroupName).subscribe(() => {
      this.addressLines = this.plannedMaintenanceService.addressLines;
      this.addressLines = this.addressLines.filter(
        (currentAddressLine) =>
          currentAddressLine.address.plannedMaintenance && currentAddressLine.address.plannedMaintenance.length > 0
      );
      this.isInitialized = this.plannedMaintenanceService.isInitialized;
      this.addressLineSelected =
        this.sortAddressLines(this.addressLines).length > 0 ? this.sortAddressLines(this.addressLines)[0] : null;
      this.accountSelectorService.setSelectedAccount<ProductSubscriptionsInterface>(this.addressLineSelected);
    });
  }

  onSelectAccount(selectedAccount): void {
    this.addressLineSelected = selectedAccount;
    this.accountSelectorService.setSelectedAccount<ProductSubscriptionsInterface>(selectedAccount);
  }

  isActive(account): boolean {
    return (
      this.addressLineSelected &&
      this.addressLineSelected['identifier'] &&
      this.addressLineSelected['identifier'] === account['identifier']
    );
  }

  private sortAddressLines(addressLines: ProductSubscriptionsInterface[]) {
    let sortedAddressLines: ProductSubscriptionsInterface[] = [];
    if (addressLines.length > 0) {
      const inProgressPLM = addressLines.filter(
        (currentAddress) =>
          currentAddress.address.plannedMaintenance.length > 0 &&
          currentAddress.address.plannedMaintenance[0].isInProgress === true
      );
      const plannedPLM = addressLines.filter(
        (currentAddress) =>
          currentAddress.address.plannedMaintenance.length > 0 &&
          currentAddress.address.plannedMaintenance[0].isPlanned === true
      );
      const completedPLM = addressLines.filter(
        (currentAddress) =>
          currentAddress.address.plannedMaintenance.length > 0 &&
          currentAddress.address.plannedMaintenance[0].isCompleted === true
      );
      sortedAddressLines = inProgressPLM.concat(plannedPLM).concat(completedPLM);
    }
    return sortedAddressLines;
  }
}
