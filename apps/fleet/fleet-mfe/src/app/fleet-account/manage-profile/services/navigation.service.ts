import { inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AccountSlice, setNextPage } from '@fleet/account/data-access';
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly canSubmit = new Subject<boolean>();
  private readonly store: Store<AccountSlice> = inject(Store);
  canSubmit$: Observable<boolean> = this.canSubmit.asObservable();

  constructor(private readonly router: Router) {}
  setNextPage() {
    this.store.dispatch(setNextPage({ page: 'next-page' }));
  }

  updateCanSubmit(submittable: boolean) {
    this.canSubmit.next(submittable);
  }

  countProgressBarPercentage(): number {
    return Math.round(((20 + 1) * 100) / 20);
  }

  goToNextPage(): void {
    this.router.navigateByUrl('');
  }
}
