import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-mybase-dashboard-error',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mybase-dashboard-error.component.html',
})
export class MyBaseDashboardErrorComponent {
  @Input() error!: string | undefined;
}
