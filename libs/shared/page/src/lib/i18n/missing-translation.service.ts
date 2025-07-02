import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TelenetMissingTranslationService {
  notTranslated(key: string): string {
    if (key.includes('undefined')) {
      return '';
    }
    return key;
  }
}
