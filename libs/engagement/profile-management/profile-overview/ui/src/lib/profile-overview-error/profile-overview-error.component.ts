import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'tg-pm-profile-overview-error',
  templateUrl: './profile-overview-error.component.html',
})
export class ProfileOverviewErrorComponent {
  @Output() errorAction = new EventEmitter();

  handleErrorAction(): void {
    this.errorAction.emit();
  }
}
