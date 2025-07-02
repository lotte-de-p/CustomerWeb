import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-sales-error-message',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
  @Input() errorMessage: string | null = '';
}
