import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'tg-demo-accordion-item',
  templateUrl: './accordion-item.component.html',
  imports: [NgClass, NgIf],
  styleUrls: ['accordion-item.component.css'],
})
export class AccordionItemComponent {
  @Input() isCollapsible = true;
  @Input() expanded = false;

  @ViewChild('content') content!: ElementRef;

  ngAfterViewInit(): void {
    if (this.expanded) {
      this.expandContent();
    }
  }

  toggle(): void {
    if (!this.isCollapsible) {
      return;
    }
    this.expanded = !this.expanded;
    this.expanded ? this.expandContent() : this.collapseContent();
  }

  private expandContent(): void {
    this.content.nativeElement.style.height = this.content.nativeElement.scrollHeight + 'px';
  }

  private collapseContent(): void {
    requestAnimationFrame(() => {
      this.content.nativeElement.style.height = this.content.nativeElement.scrollHeight + 'px';
      requestAnimationFrame(() => {
        this.content.nativeElement.style.height = 0;
      });
    });
  }
}
