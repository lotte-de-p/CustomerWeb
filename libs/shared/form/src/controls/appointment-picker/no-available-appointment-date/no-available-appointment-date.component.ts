import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';

@Component({
  selector: 'app-no-available-appointment-date',
  templateUrl: './no-available-appointment-date.html',
})
export class NoAvailableAppointmentDateComponent {
  @Output()
  loadMoreSlots = new EventEmitter();

  @Input()
  messageGroup: string;
  @Input()
  disableLoadMore: boolean;

  constructor(public readonly languageService: LanguageService) {}

  loadSlots() {
    this.loadMoreSlots.emit();
  }
}
