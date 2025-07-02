import { Observable } from 'rxjs';

export interface LoginMethodInterface {
  doAuthCall(): Observable<unknown>;
}
