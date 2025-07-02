import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-sales-error-message-with-login-button',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './error-message-with-login-button.component.html',
})
export class ErrorMessageWithLoginButtonComponent {
  @Output() loginEmitter: EventEmitter<void> = new EventEmitter();
  @Input() brand: string | undefined | null;

  login(): void {
    this.loginEmitter.emit();
  }
}
