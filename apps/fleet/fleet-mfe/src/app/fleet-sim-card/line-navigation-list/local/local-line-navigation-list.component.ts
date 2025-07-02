import { Component } from '@angular/core';
import tabs from './tabs.json';
import { LineNavigationListComponent } from '../line-navigation-list.component';

@Component({
  selector: 'tg-local-line-navigation-list',
  templateUrl: './local-line-navigation-list.component.html',
  standalone: true,
  imports: [LineNavigationListComponent],
})
export class LocalLineNavigationListComponent {
  tabsJson = JSON.stringify(tabs);
}
