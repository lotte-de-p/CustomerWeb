import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NormalizationService {
  normalizeKey(key?: string | null) {
    if (key) {
      return key
        .replace(/ /g, '-')
        .replace(/\./g, '-')
        .replace(/[^0-9a-zA-Z_-]/g, '')
        .toLowerCase();
    }
    return '';
  }

  normalizeList(list?: string[] | null) {
    if (list?.length) {
      return list.map((item) => this.normalizeKey(item));
    }
    return [];
  }
}
