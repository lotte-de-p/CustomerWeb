import { Injectable } from '@angular/core';
import { AddressFacade, AddressUnit, Municipality } from '@sales/shared/address/data-access';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  clearAvailableBoxes,
  clearAvailableHouseNumbers,
  clearAvailableMunicipalities,
  clearAvailableStreets,
  clearAvailableSubHouseNumbers,
  setAvailableBoxes,
  setAvailableHouseNumbers,
  setAvailableMunicipalities,
  setAvailableStreets,
  setAvailableSubHouseNumbers,
  setSelectedBoxNumber,
  setSelectedHouseNumber,
  setSelectedMunicipality,
  setSelectedStreet,
  setSelectedStreetAddressUnit,
  setSelectedSubHouseNumber,
} from '../+state/address-form-field.actions';
import {
  availableBoxes,
  availableHouseNumbers,
  availableMunicipalities,
  availableStreets,
  availableSubHouseNumbers,
  selectedBoxNumber,
  selectedHouseNumber,
  selectedMunicipality,
  selectedStreet,
  selectedStreetAddressUnit,
  selectedSubHouseNumber,
} from '../+state/address-form-field.selectors';

@Injectable({ providedIn: 'root' })
export class AddressFormFieldFacade {
  constructor(
    private readonly store: Store,
    private readonly addressFacade: AddressFacade
  ) {}

  // Exposing selectors as observable properties
  availableMunicipalities$: Observable<Municipality[]> = this.store.select(availableMunicipalities);
  availableStreets$: Observable<string[]> = this.store.select(availableStreets);
  availableHouseNumbers$: Observable<AddressUnit[]> = this.store.select(availableHouseNumbers);
  availableSubHouseNumbers$: Observable<AddressUnit[]> = this.store.select(availableSubHouseNumbers);
  availableBoxes$: Observable<AddressUnit[]> = this.store.select(availableBoxes);

  selectedMunicipality$: Observable<Municipality | undefined> = this.store.select(selectedMunicipality);
  selectedStreet$: Observable<string | undefined> = this.store.select(selectedStreet);
  selectedHouseNumber$: Observable<string | undefined> = this.store.select(selectedHouseNumber);
  selectedSubHouseNumber$: Observable<string | undefined> = this.store.select(selectedSubHouseNumber);
  selectedBoxNumber$: Observable<string | undefined> = this.store.select(selectedBoxNumber);
  selectedStreetAddressUnit$: Observable<AddressUnit | undefined> = this.store.select(selectedStreetAddressUnit);

  // Municipality Actions
  setSelectedMunicipality(municipality: Municipality): void {
    this.store.dispatch(setSelectedMunicipality({ municipality }));
  }

  setAvailableMunicipalities(municipalities: Municipality[]): void {
    this.store.dispatch(setAvailableMunicipalities({ municipalities }));
  }

  clearAvailableMunicipalities(): void {
    this.store.dispatch(clearAvailableMunicipalities());
  }

  // Street Actions
  setSelectedStreet(street: string): void {
    this.store.dispatch(setSelectedStreet({ street }));
  }

  setAvailableStreets(streets: string[]): void {
    this.store.dispatch(setAvailableStreets({ streets }));
  }

  clearAvailableStreets(): void {
    this.store.dispatch(clearAvailableStreets());
  }

  // House Number Actions
  setSelectedHouseNumber(houseNumber: string): void {
    this.store.dispatch(setSelectedHouseNumber({ houseNumber }));
  }

  setAvailableHouseNumbers(houseNumberAddressUnits: AddressUnit[]): void {
    this.store.dispatch(setAvailableHouseNumbers({ houseNumberAddressUnits }));
  }

  clearAvailableHouseNumbers(): void {
    this.store.dispatch(clearAvailableHouseNumbers());
  }

  // Sub House Number Actions
  setSelectedSubHouseNumber(subHouseNumber: string): void {
    this.store.dispatch(setSelectedSubHouseNumber({ subHouseNumber }));
  }

  setAvailableSubHouseNumbers(subHouseNumbers: AddressUnit[]): void {
    this.store.dispatch(setAvailableSubHouseNumbers({ subHouseNumbers }));
  }

  clearAvailableSubHouseNumbers(): void {
    this.store.dispatch(clearAvailableSubHouseNumbers());
  }

  // Box Actions
  setSelectedBoxNumber(boxNumber: string): void {
    this.store.dispatch(setSelectedBoxNumber({ boxNumber }));
  }

  setAvailableBoxes(boxes: AddressUnit[]): void {
    this.store.dispatch(setAvailableBoxes({ boxes }));
  }

  clearAvailableBoxes(): void {
    this.store.dispatch(clearAvailableBoxes());
  }

  // Street Address Unit Actions
  setSelectedStreetAddressUnit(streetAddressUnit: AddressUnit): void {
    this.store.dispatch(setSelectedStreetAddressUnit({ streetAddressUnit }));
  }

  getGeographicalAddresses(query: string, streetAddressUnitId: string): Observable<AddressUnit[]> {
    return this.addressFacade.getGeographicalAddresses(query, streetAddressUnitId).pipe(
      tap((geographicalAddresses: AddressUnit[]) => {
        this.setAvailableHouseNumbers(geographicalAddresses);
      })
    );
  }

  getStreetAddressUnit(streetValue: string, postalCodeValue: string): Observable<AddressUnit | null> {
    return this.addressFacade.getStreetAddressUnit(streetValue, postalCodeValue);
  }

  getStreets(postalCodeQuery: string): Observable<string[]> {
    return this.addressFacade.getStreets(postalCodeQuery);
  }

  getMunicipalities(): Observable<Municipality[]> {
    return this.addressFacade.getMunicipalities();
  }
}
