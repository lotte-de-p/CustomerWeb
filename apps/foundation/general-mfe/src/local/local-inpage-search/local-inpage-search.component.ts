import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InpageSearchComponent } from '@general/search/feat-inpage-search';
import { SearchHeaderComponent } from '@general/search/feat-header';

@Component({
  selector: 'tg-foundation-general-search-inpage-search-local',
  standalone: true,
  imports: [CommonModule, InpageSearchComponent, SearchHeaderComponent],
  template: `
    <tg-foundation-general-search-header
      style="display: none"
      searchResultsCollection='{"value":"telenet_residential_nl", "text":"Particulieren"}'
      searchResultsPage="/results/"
      brand="telenet"
      language="nl"
      includeHardwareResults="true">
    </tg-foundation-general-search-header>
    <tg-foundation-general-search-inpage-search
      suggestionsFieldName="asYouType"
      searchResultsPage="http://localhost:4206/results"
      searchCollection='{"value":"telenet_residential_nl", "text":"Particulieren"}'
      includeHardwareResults="true"></tg-foundation-general-search-inpage-search>
  `,
})
export class LocalInpageSearchComponent {}
