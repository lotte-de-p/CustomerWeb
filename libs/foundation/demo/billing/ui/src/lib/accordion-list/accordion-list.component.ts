import { NgClass, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

type AccordionRendition = 'default' | 'panel' | 'non-collapsible-panel';

@Component({
  standalone: true,
  selector: 'tg-demo-accordion-list',
  imports: [NgForOf, NgClass, NgTemplateOutlet, AccordionItemComponent, NgIf],
  templateUrl: './accordion-list.component.html',
})
export class AccordionListComponent<T> implements OnChanges {
  @Input() items: T[] = [];
  @Input() rendition: AccordionRendition = 'default';
  @Input() expanded = false;
  @Input() accordionHeaderRef: TemplateRef<{ $implicit: T }> = {} as TemplateRef<{ $implicit: T }>;
  @Input() accordionContentRef: TemplateRef<{ $implicit: T }> = {} as TemplateRef<{ $implicit: T }>;

  isPanelRendition = false;

  isNotLastItem(idx: number): boolean {
    return idx < this.items.length - 1;
  }

  accordionItemTrackBy(_index: number, item: T): T {
    return item;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rendition']) {
      const rendition = changes['rendition'].currentValue;
      this.isPanelRendition = rendition === 'panel' || rendition === 'non-collapsible-panel';
    }
  }
}
