import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'tg-pm-manage-authenticators-error',
  templateUrl: './manage-authenticators-error.component.html',
})
export class ManageAuthenticatorsErrorComponent {
  @Output() errorAction = new EventEmitter();

  handleErrorAction(): void {
    this.errorAction.emit();
  }
}
