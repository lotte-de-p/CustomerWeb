import { Component, Input, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoamingInternationalNgrxModule } from '@marketing/marketing/roaming-international/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ExperienceFragmentService } from '@telenet/ng-lib-page';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'tg-marketing-roaming-international-upsell-options',
  imports: [CommonModule, RoamingInternationalNgrxModule],
  templateUrl: './consult-upsell-options.component.html',
})
export class ConsultUpsellOptionsComponent implements AfterViewInit {
  @Input() upSellOptions!: string;
  @Input() rateType!: string;
  @Input() customerType!: string;
  @Input() upsellOptionsLocation!: string;

  experienceFragmentService = inject(ExperienceFragmentService);
  upsellValue: SafeHtml;

  constructor(private readonly sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    this.getUpSellOptions();
  }

  private getUpSellOptions(): void {
    this.experienceFragmentService
      .fetchExpFragment(this.upSellOptions, this.upsellOptionsLocation)
      .pipe(untilDestroyed(this))
      .subscribe((result) => {
        const stepViewElement = this.createElement(result);
        this.upsellValue = this.sanitizer.bypassSecurityTrustHtml(stepViewElement.innerHTML);
      });
  }

  private createElement(data: string): Element {
    const container: Element = document.createElement('div');
    const item: Element = document.createElement('div');
    item.classList.add('cmp', 'cmp-page');
    item.innerHTML = data;

    container.append(item);
    return container;
  }
}
