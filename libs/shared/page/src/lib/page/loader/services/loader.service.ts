import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderData } from '../loaderData.model';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  skipUrls = ['/authrefresh', '/?p=eligibleproducts', '/search/api/'];

  loadingStatus = new BehaviorSubject<LoaderData>(new LoaderData(false));

  start() {
    const _loaderData = new LoaderData(true);
    this.loadingStatus.next(_loaderData);
  }

  stop() {
    const _loaderData = new LoaderData(false);
    this.loadingStatus.next(_loaderData);
  }

  shouldDisableLoader(url: string): boolean {
    return this.skipUrls.some((skipUrl) => new RegExp(skipUrl).test(url)) || url.includes('disabledLoader=true');
  }
}
