import { Injectable } from '@angular/core';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { ElasticSearchService } from './elastic-search.service';
import { HttpClient } from '@angular/common/http';
import { ElasticSearchServiceInterface } from './elastic-search-service.interface';
import { MockElasticSearchService } from './mock-elastic-search.service';
import { Log, LogFactory } from '@telenet/ng-lib-shared';

@Injectable({
  providedIn: 'root',
})
export class SearchApiServiceProvider {
  private static readonly LOG: Log = LogFactory.createLogger(SearchApiServiceProvider);
  private readonly MOCK_PREFIX: string = 'mock.';
  private readonly elasticService: ElasticSearchServiceInterface;

  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService
  ) {
    const searchApiUrl: string = this.configService.getConfig(ConfigConstants.SEARCH_API_URL);
    if (searchApiUrl.startsWith(this.MOCK_PREFIX)) {
      SearchApiServiceProvider.LOG.logInfo(`Using the MockElasticSearchService, searchApiUrl is ${searchApiUrl}`);
      this.elasticService = new MockElasticSearchService();
    } else {
      SearchApiServiceProvider.LOG.logInfo(`Using the ElasticSearchService, searchApiUrl is ${searchApiUrl}`);
      this.elasticService = new ElasticSearchService(this.http, searchApiUrl);
    }
  }

  getService(): ElasticSearchServiceInterface {
    return this.elasticService;
  }
}
