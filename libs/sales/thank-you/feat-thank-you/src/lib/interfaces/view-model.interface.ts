import { Observable } from 'rxjs';

export interface ViewModel {
  stepImage: string;
  stepMobileImage: string;
  orderNumber$: Observable<string | undefined>;
}
