import { Observable } from 'rxjs';

export interface EventStrategy {
  showLoader(): boolean;
  execute(): Observable<boolean>;
}
