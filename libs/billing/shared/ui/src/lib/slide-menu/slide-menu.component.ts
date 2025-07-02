import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-slide-menu',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './slide-menu.component.html',
  styleUrl: './slide-menu.component.scss',
})
export class SlideMenuComponent {
  @Input({ required: true }) showMenu!: boolean;
  @Input({ required: false }) title?: string;
  @Output() closeMenu = new EventEmitter();
  @Input({ required: false }) isStickyFooter = false;
  @Input({ required: false }) hideCloseButton = false;
  @Input({ required: false }) hideTitle = false;
  @Input({ required: false }) padding = 'px--l';
  @Input() cancelClickOutside = false;
  @Input({ required: false }) backgroundColor = 'background-white';

  @ContentChild(ElementRef)
  footer?: ElementRef;

  close() {
    if (this.showMenu && !this.cancelClickOutside) {
      this.closeMenu.emit();
    }
  }
}
