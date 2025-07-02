import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntertainmentOption } from '@entertainment-management/data-access';
import { PricePipe, EuroSignPipe } from '@telenet/ng-lib-form';
import { WinkButton } from '@telenet/wink-ng';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-entertainment-management-standalone',
  standalone: true,
  imports: [CommonModule, PricePipe, EuroSignPipe, WinkButton],
  templateUrl: './entertainment-management-standalone.component.html',
  styleUrl: './entertainment-management-standalone.component.scss',
})
export class EntertainmentManagementStandaloneComponent {
  @Input() data!: EntertainmentOption;

  private readonly languageService = inject(LanguageService);
  protected readonly LanguageEnum = LanguageEnum;

  get lang() {
    return this.languageService.getLanguage();
  }
}
