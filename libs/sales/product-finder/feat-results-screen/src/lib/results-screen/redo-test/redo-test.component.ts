import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-sales-redo-test',
  standalone: true,
  templateUrl: './redo-test.component.html',
  imports: [TranslateModule],
})
export class RedoTestComponent {
  @Output() redoTestEvent: EventEmitter<void> = new EventEmitter<void>();
}
