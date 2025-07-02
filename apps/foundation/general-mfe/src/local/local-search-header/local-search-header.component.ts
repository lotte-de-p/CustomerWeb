import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeaderComponent } from '@general/search/feat-header';

@Component({
  selector: 'tg-foundation-general-search-header-local',
  standalone: true,
  imports: [CommonModule, SearchHeaderComponent],
  template: `
    <tg-foundation-general-search-header
      searchResultsCollection='{"value":"telenet_residential_nl", "text":"Particulieren"}'
      searchResultsPage="/results/"
      brand="telenet"
      language="nl"
      suggestionsFieldName="hits"
      includeHardwareResults="true">
    </tg-foundation-general-search-header>
  `,
})
export class LocalSearchHeaderComponent {}
