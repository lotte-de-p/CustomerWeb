import { Observable } from 'rxjs';

export interface ViewModel {
  stepImage: string;
  orderNumber$: Observable<string | undefined>;
}
