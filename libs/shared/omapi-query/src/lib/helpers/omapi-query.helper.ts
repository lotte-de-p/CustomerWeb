import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OmapiQueryHelper {
  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders(this.createHttpHeaders());
  }

  createHttpHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }

  getHttpOptions() {
    return {
      headers: this.getHttpHeaders(),
    };
  }
}
