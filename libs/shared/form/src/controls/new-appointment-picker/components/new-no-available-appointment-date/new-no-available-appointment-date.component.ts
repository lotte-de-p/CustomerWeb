import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';

@Component({
  selector: 'app-new-no-available-appointment-date',
  templateUrl: './new-no-available-appointment-date.html',
})
export class NewNoAvailableAppointmentDateComponent {
  @Output()
  loadMoreSlots = new EventEmitter();

  @Input()
  messageGroup: string;

  constructor(public readonly languageService: LanguageService) {}

  loadSlots() {
    this.loadMoreSlots.emit();
  }
}
