import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OmapiCacheService<T> {
  private cache: Record<string, Observable<T>> = {};

  get(key: string): Observable<T> {
    return this.cache[key];
  }

  add(key: string, response$: Observable<T>): void {
    this.cache[key] = response$.pipe(shareReplay({ bufferSize: 1, refCount: false }));
  }

  remove(key: string): void {
    delete this.cache[key];
  }
}
