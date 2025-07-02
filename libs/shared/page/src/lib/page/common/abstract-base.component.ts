import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

type ObsTypes = unknown | string | boolean | object;
@Component({
  selector: 'app-abstract-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class AbstractBaseComponent implements OnDestroy {
  protected unsubscribe$ = new Subject();

  onDestroy(): void {
    // onDestroy
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();

    this.onDestroy();
  }

  obs<T>(obs: Observable<T>): Observable<T>;
  obs(obs: Observable<ObsTypes>): Observable<ObsTypes>;
  obs(obs: Observable<ObsTypes>): Observable<ObsTypes> {
    return obs.pipe(takeUntil(this.unsubscribe$));
  }
}
