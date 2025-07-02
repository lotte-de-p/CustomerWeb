import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from '@general/search/feat-results';
import { SearchHeaderComponent } from '@general/search/feat-header';

@Component({
  selector: 'tg-foundation-general-search-results-local',
  standalone: true,
  imports: [CommonModule, SearchResultsComponent, SearchHeaderComponent],
  template: `
    <tg-foundation-general-search-results-page
      searchResultsCollections='[{"value":"telenet_residential_nl", "text": "Particulieren"}, {"value":"telenet_smele_nl", "text": "Bedrijven"},  {"value":"telenet_soho_nl", "text": "Zelfstandigen"}]'
      searchResultsFacets="[subject,category,type]"
      brand="telenet"
      language="nl"
      includeHardwareResults="true">
    </tg-foundation-general-search-results-page>
  `,
})
export class LocalSearchResultsComponent {}
