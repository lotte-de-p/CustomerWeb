import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  standalone: true,
  providers: [],
  imports: [TranslateModule, CommonModule],
})
export class ThankYouComponent {
  @Input()
  messageGroupName: string;

  @Output()
  closeEvent: EventEmitter<void> = new EventEmitter<void>();

  imagePath = '/content/dam/www-telenet-bus/nl/producten/ftth/Mailimg.svg';

  onClose(): void {
    this.closeEvent.emit();
  }
}
