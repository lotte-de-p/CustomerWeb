import { TestBed } from '@angular/core/testing';
import { LoaderService } from './loader.service';
import { BehaviorSubject } from 'rxjs';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { LoaderData } from '../loaderData.model';

describe('LoaderService', () => {
  let loaderService: LoaderService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService],
    });
    loaderService = TestBed.inject(LoaderService);
  });

  it('should set loading status to true', () => {
    loaderService.loadingStatus = new BehaviorSubject<LoaderData>(new LoaderData(true));

    loaderService.loadingStatus.subscribe((data) => {
      expect(data.isAPIExecutionInProgress).toBe(true);
    });
    loaderService.start();
  });

  it('should set loading status to false', () => {
    loaderService.loadingStatus = new BehaviorSubject<LoaderData>(new LoaderData(false));

    loaderService.loadingStatus.subscribe((data) => {
      expect(data.isAPIExecutionInProgress).toBe(false);
    });
    loaderService.stop();
  });

  it('should not show loader for skipped url', () => {
    const url = 'http://url.com';
    loaderService.skipUrls.push(url);
    const actual = loaderService.shouldDisableLoader(url);
    expect(actual).toBe(true);
  });

  it('should show loader for skipped url', () => {
    const url = 'http://url.com';
    const actual = loaderService.shouldDisableLoader(url);
    expect(actual).toBe(false);
  });

  it('should not show loader if disabledLoader parameter is set to true', () => {
    const url = 'http://url.com?disabledLoader=true';
    const actual = loaderService.shouldDisableLoader(url);
    expect(actual).toBe(true);
  });

  it('should not show loader if disabledLoader parameter is set to false', () => {
    const url = 'http://url.com?disabledLoader=false';
    const actual = loaderService.shouldDisableLoader(url);
    expect(actual).toBe(false);
  });

  it('should not show loader if disabledLoader parameter is set to false', () => {
    const url = '';
    const actual = loaderService.shouldDisableLoader(url);
    expect(actual).toBe(false);
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
