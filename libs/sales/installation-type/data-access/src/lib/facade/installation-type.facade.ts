import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { InstallationTypeState } from '../+state/installation-type.state';
import { name } from '../+state/installation-type.selectors';

@Injectable({ providedIn: 'root' })
export class InstallationTypeFacade {
  name$: Observable<string | undefined> = this.store.select(name);

  constructor(private readonly store: Store<InstallationTypeState>) {
    console.log(this.store);
  }
}
