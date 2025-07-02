import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntertainmentOption } from '@entertainment-management/data-access';
import { LanguageEnum, LanguageService, UrlService } from '@telenet/ng-lib-page';
import { PricePipe, EuroSignPipe } from '@telenet/ng-lib-form';
import { TranslateModule } from '@ngx-translate/core';
import { WinkIcon, WinkImg } from '@telenet/wink-ng';

@Component({
  selector: 'tg-entertainment-management-option',
  standalone: true,
  imports: [CommonModule, PricePipe, TranslateModule, EuroSignPipe, WinkImg, WinkIcon],
  templateUrl: './entertainment-option.component.html',
  styleUrl: './entertainment-option.component.scss',
})
export class EntertainmentOptionComponent {
  @Input() data!: EntertainmentOption[];
  @Output() productId: EventEmitter<string> = new EventEmitter<string>();

  private readonly languageService = inject(LanguageService);
  protected readonly LanguageEnum = LanguageEnum;
  private readonly urlService: UrlService = inject(UrlService);

  get lang() {
    return this.languageService.getLanguage();
  }

  navigateToDetailsPage(id: string): void {
    this.urlService.redirectTo('/option-details?id=' + id);
  }
}
