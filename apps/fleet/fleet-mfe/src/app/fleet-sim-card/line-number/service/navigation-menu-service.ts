import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationMenuService {
  toggleNavMenu$ = new BehaviorSubject<boolean>(false);

  setToggleNavMenu(newFlag: boolean): void {
    this.toggleNavMenu$.next(newFlag);
  }

  getToggleNavMenu(): Observable<boolean> {
    return this.toggleNavMenu$;
  }
}
