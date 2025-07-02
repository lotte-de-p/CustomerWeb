import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'tg-inbox-message-empty-data',
  templateUrl: './inbox-message-empty-data.component.html',
})
export class InboxMessageEmptyDataComponent {}
