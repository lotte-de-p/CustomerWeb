import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntertainmentManagementFacade } from '@entertainment-management/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { EntertainmentOptionComponent } from '../entertainment-option/entertainment-option.component';

@Component({
  selector: 'tg-entertainment-management-options-list',
  standalone: true,
  imports: [CommonModule, TranslateModule, EntertainmentOptionComponent],
  templateUrl: './entertainment-management-options-list.component.html',
  styleUrl: './entertainment-management-options-list.component.scss',
})
export class EntertainmentManagementOptionsListComponent {
  private readonly facade: EntertainmentManagementFacade = inject(EntertainmentManagementFacade);

  selectActiveOptions$ = this.facade.selectActiveOptions$;
  selectAvailableContentPacks$ = this.facade.selectAvailableContentPacks$;
  selectAvailableStreamingOptions$ = this.facade.selectAvailableStreamingOptions$;
}
