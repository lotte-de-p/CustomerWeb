import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AddressInterface } from '@address-checker/data-access';
import { InputOption, InputOptionWithCard, InputRadioComponent, TgFormsModule } from '@telenet/ng-lib-form';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-selector',
  templateUrl: './address-selector.component.html',
  imports: [TgFormsModule, ReactiveFormsModule],
  standalone: true,
})
export class AddressSelectorComponent implements OnInit, AfterViewInit {
  @Input()
  adresses: AddressInterface[];

  @Output()
  addressSelectedEvent: EventEmitter<AddressInterface> = new EventEmitter<AddressInterface>();

  @ViewChild('radioIconList') radioIconList: InputRadioComponent;

  addressOptions: InputOptionWithCard[];
  form: FormGroup;

  constructor(
    readonly changeDetectorRef: ChangeDetectorRef,
    readonly formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({ address: [] });
    this.addressOptions = this.adresses.map((address: AddressInterface) => this.createOption(address));
  }

  ngAfterViewInit() {
    this.radioIconList.registerOnChange(this.addressSelected);
    this.radioIconList.registerOnTouched(this.addressSelected);
    this.radioIconList.selectOption(this.addressOptions[0]);
    this.changeDetectorRef.detectChanges();
  }

  addressSelected = (): void => {
    const address: AddressInterface | undefined = this.mapOptionToAddress(this.radioIconList.selectedOption);
    this.addressSelectedEvent.emit(address);
  };

  private createOption(address: AddressInterface): InputOptionWithCard {
    return new InputOptionWithCard()
      .withValue(address.addressGeoId)
      .withLabel(
        `${address.street} ${address.houseNumber}`.concat(address.subHouseNumber ?? ' ').concat(address.boxNumber ?? '')
      )
      .withText(`${address.zipcode} ${address.subMunicipality}`);
  }

  private mapOptionToAddress(option: InputOption | undefined): AddressInterface | undefined {
    return this.adresses?.find((address) => option?.value === address.addressGeoId);
  }
}
