import { Component, Input } from '@angular/core';
import { PricedCphDatalayerService } from '../../service/priced-cph-datalayer.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'tg-marketing-cafe-drop-down-accordion-header',
  templateUrl: './drop-down-accordion-header.component.html',
  standalone: true,
  imports: [NgClass],
})
export class DropDownAccordionHeaderComponent {
  @Input() title: string;
  @Input() isPanelCollapsed: boolean;

  rotateChevron: boolean;

  constructor(private readonly pricedCphDatalayerService: PricedCphDatalayerService) {}

  handleClick(): void {
    this.rotateChevron = !this.rotateChevron;
    if (this.rotateChevron) {
      this.pricedCphDatalayerService.pushComponentOpened();
    }
  }
}
