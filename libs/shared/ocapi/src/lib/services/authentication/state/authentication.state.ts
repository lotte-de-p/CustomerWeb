import { Injectable, Injector } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AUTH_SERVICE } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationState {
  private readonly authenticatedSubject = new ReplaySubject<boolean>(1);

  private isStatusKnown = false;

  constructor(private readonly injector: Injector) {}

  setAuthenticated(authenticated: boolean): void {
    this.authenticatedSubject.next(authenticated);
    this.isStatusKnown = true;
  }

  getAuthenticated(): Observable<boolean> {
    if (!this.isStatusKnown) {
      const authenticationService = this.injector.get(AUTH_SERVICE);
      return authenticationService.getAuthenticationStatus();
    }
    return this.authenticatedSubject.pipe(take(1));
  }
}
