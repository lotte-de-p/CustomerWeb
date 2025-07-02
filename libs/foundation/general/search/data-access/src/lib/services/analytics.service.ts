import { Inject, inject, Injectable } from '@angular/core';
import { AnalyticsCallFireStrategyEnum } from 'udl';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';
import { SearchResultsData, SearchState } from '../+state/search.state';
import { EventInfo, UnifiedSearchEvents } from '../types/analytics-eventinfo';
import { FacetGroup } from '../entities/facets';
import { SearchResultItem } from '../entities/search-result-item';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private readonly datalayerService: DataLayerService = inject(DataLayerService);

  constructor(@Inject('Window') private readonly window: Window) {}

  private isBusinessPage(pagePath: string): boolean {
    const pattern = /business\/(en|nl|fr)/;
    return pattern.test(pagePath);
  }

  private createPageID(pagePath: string) {
    let path = pagePath;
    if (pagePath && pagePath.startsWith('http')) {
      path = new URL(pagePath).pathname;
    }
    if (path.startsWith('/content')) {
      path = path.split('/').slice(4).join('/');
    }

    if (this.isBusinessPage(pagePath)) {
      return `business/${path}`;
    }
    return path;
  }

  private getHitsFromResults(searchResults: SearchResultsData) {
    return [...(searchResults.contentPages?.hits || []), ...(searchResults.hardware?.hits || [])];
  }

  private getContentId(searchResult: SearchResultItem) {
    if (searchResult.type === 'page') {
      return this.createPageID(searchResult.url);
    } else if (searchResult.type === 'product') {
      return searchResult.name;
    }
    return undefined;
  }

  getContentIds(searchResults: SearchResultsData) {
    const hits = this.getHitsFromResults(searchResults);
    return hits?.map((hit) => this.getContentId(hit)).filter((_) => !!_) || [];
  }

  private getLastSuggestionClicked(searchState: SearchState) {
    if (searchState.eventData.suggestionUsed) {
      return searchState.eventData.suggestionUsed?.text;
    }
    return 'No suggestion clicked';
  }

  private getTotalHits(searchResults: SearchResultsData): string | undefined {
    const contentPagesTotal = searchResults.contentPages?.page?.total;
    const hardwareTotal = searchResults.hardware?.page?.total;

    if (contentPagesTotal === undefined && hardwareTotal === undefined) {
      return undefined;
    }

    const total = (contentPagesTotal ?? 0) + (hardwareTotal ?? 0);
    return total.toString();
  }

  private getSearchAttributesFromState(searchState: SearchState): DataLayerAttributes {
    return {
      itemName: searchState.eventData.lastUsedComponent,
      onsiteSearchTerm: searchState.eventData.queryUsed,
      onsiteSearchOrigination:
        searchState.eventData.searchOriginatingPageId || this.window.digitalData?.page.pageInfo.pageID,
      itemData: this.getLastSuggestionClicked(searchState),
    };
  }

  sendSearchEvent(searchState: SearchState, eventInfoData: EventInfo) {
    const eventInfo = this.datalayerService.createEventInfo(eventInfoData.event.name, eventInfoData.event.type);
    const attributes: DataLayerAttributes = this.getSearchAttributesFromState(searchState);

    if (eventInfoData.sendOnSiteSearchFilter) {
      attributes.onsiteSearchFilter = this.createFilterString(
        searchState.resultsPage.facetGroups,
        searchState.resultsPage.collections
      );
    }

    if (eventInfoData.sendOnSiteSearchResults) {
      attributes.onsiteSearchResults = this.getTotalHits(searchState.resultsPage.searchResults) || '';
      attributes.onsiteSearchResultsID = this.getContentIds(searchState.resultsPage.searchResults).join(',');
    }

    if (eventInfoData.searchResult) {
      attributes.cardId = this.getContentId(eventInfoData.searchResult);
    }

    this.datalayerService.sendEvent({
      eventInfo,
      attributes,
      strategy: eventInfoData.strategy,
    });
  }

  private hasFacetsSelected(facetGroup: FacetGroup) {
    return facetGroup.facets.some((facet) => facet.selected);
  }

  private createFilterString(facetGroups: FacetGroup[], collections: FacetGroup): string {
    const facets = facetGroups
      .filter(this.hasFacetsSelected)
      .map(
        (group) =>
          group.title +
          ':' +
          group.facets
            .filter((facet) => facet.selected)
            .map((facet) => facet.id)
            .join(',')
      )
      .join('|');
    const activeCollection = 'search-on:' + collections.facets.find((facet) => facet.selected)?.id;
    if (!facets) {
      return activeCollection;
    }
    return `${activeCollection}|${facets}`;
  }

  sendFilterEvent(searchState: SearchState) {
    this.sendSearchEvent(searchState, {
      event: UnifiedSearchEvents.FILTER,
      sendOnSiteSearchFilter: true,
      sendOnSiteSearchResults: true,
      strategy: AnalyticsCallFireStrategyEnum.FIRE_ON_SAME_PAGE,
    });
  }
}
