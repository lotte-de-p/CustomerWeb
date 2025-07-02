import { Injectable, inject } from '@angular/core';
import { loadEntertainmentManagementOptions, loadEntertainmentOptionDetails } from './entertainment-management.actions';
import { EntertainmentManagementState } from './entertainment-management.reducer';
import { Store } from '@ngrx/store';
import {
  selectActiveOptions,
  selectAvailableContentPacks,
  selectAvailableStreamingOptions,
  selectEntertainmentManagementLoaded,
  selectEntertainmentManagementError,
  selectEntertainmentManagementLoading,
  selectEntertainmentOptionDetails,
  selectEntertainmentOptionDetailsType,
} from './entertainment-management.selectors';

@Injectable({ providedIn: 'root' })
export class EntertainmentManagementFacade {
  private readonly store = inject(Store<EntertainmentManagementState>);

  selectActiveOptions$ = this.store.select(selectActiveOptions);
  selectAvailableContentPacks$ = this.store.select(selectAvailableContentPacks);
  selectAvailableStreamingOptions$ = this.store.select(selectAvailableStreamingOptions);
  selectEntertainmentManagementLoading$ = this.store.select(selectEntertainmentManagementLoading);
  selectEntertainmentManagementError$ = this.store.select(selectEntertainmentManagementError);
  selectEntertainmentOptionDetails$ = this.store.select(selectEntertainmentOptionDetails);
  selectEntertainmentOptionDetailsType$ = this.store.select(selectEntertainmentOptionDetailsType);
  selectEntertainmentManagementLoaded$ = this.store.select(selectEntertainmentManagementLoaded);

  loadEntertainmentManagementOptions(): void {
    this.store.dispatch(loadEntertainmentManagementOptions());
  }

  loadEntertainmentOptionDetails(): void {
    this.store.dispatch(loadEntertainmentOptionDetails());
  }
}
