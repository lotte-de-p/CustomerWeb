import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'tg-inbox-message-loader',
  templateUrl: './inbox-message-loader.component.html',
})
export class InboxMessageLoaderComponent {
  readonly MESSAGE_SKELETONS_COUNT = 10;

  loading = input<boolean>(true);
  messageSkeletons = Array(this.MESSAGE_SKELETONS_COUNT);
}
