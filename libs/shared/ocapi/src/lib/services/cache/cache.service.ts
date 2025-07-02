import { shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache: Record<string, Observable<unknown>> = {};

  // eslint-disable-next-line @typescript-eslint/ban-types
  add(key: string, response$: Observable<unknown | Object>): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.cache[key] = response$.pipe(shareReplay({ bufferSize: 1 }));
  }

  get(key: string): Observable<unknown> {
    return this.cache[key];
  }

  remove(key: string): void {
    delete this.cache[key];
  }
}
