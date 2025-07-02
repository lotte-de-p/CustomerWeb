import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntertainmentOption } from '@entertainment-management/data-access';
import { PricePipe, EuroSignPipe } from '@telenet/ng-lib-form';
import { WinkButton, WinkPricing } from '@telenet/wink-ng';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-entertainment-management-tiered-list',
  standalone: true,
  imports: [CommonModule, PricePipe, EuroSignPipe, WinkPricing, WinkButton],
  templateUrl: './entertainment-management-tiered-list.component.html',
  styleUrl: './entertainment-management-tiered-list.component.scss',
})
export class EntertainmentManagementTieredListComponent {
  @Input() data = {} as EntertainmentOption;

  private readonly languageService = inject(LanguageService);
  protected readonly LanguageEnum = LanguageEnum;

  get lang() {
    return this.languageService.getLanguage();
  }
}
