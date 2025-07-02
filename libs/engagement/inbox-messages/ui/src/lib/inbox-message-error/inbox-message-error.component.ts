import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'tg-inbox-message-error',
  templateUrl: './inbox-message-error.component.html',
})
export class InboxMessageErrorComponent {
  @Output() errorAction = new EventEmitter();

  handleErrorAction(): void {
    this.errorAction.emit();
  }
}
