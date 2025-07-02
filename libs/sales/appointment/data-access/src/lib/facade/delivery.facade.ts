import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppointmentState } from '../+state/appointment.state';
import { name } from '../+state/appointment.selectors';

@Injectable({ providedIn: 'root' })
export class AppointmentFacade {
  name$: Observable<string | undefined> = this.store.select(name);

  constructor(private readonly store: Store<AppointmentState>) {
    console.log(this.store);
  }
}
