import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = {};

  get<T>(key: string): Observable<T> {
    return this.cache[key];
  }

  add<T>(key: string, response$: Observable<T>): void {
    this.cache[key] = response$.pipe(shareReplay({ bufferSize: 1, refCount: false }));
  }

  remove(key: string): void {
    delete this.cache[key];
  }
}
