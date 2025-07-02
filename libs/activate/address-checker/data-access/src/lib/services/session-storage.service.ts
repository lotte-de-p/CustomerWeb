import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  get<T>(key: string): T | null {
    const value = sessionStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  }
}
