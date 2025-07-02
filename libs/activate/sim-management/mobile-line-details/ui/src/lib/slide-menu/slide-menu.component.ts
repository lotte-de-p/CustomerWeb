import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-activate-sim-management-ui-slide-menu',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './slide-menu.component.html',
  styleUrl: './slide-menu.component.scss',
})
export class SlideMenuComponent {
  @Input({ required: true }) showMenu!: boolean;
  @Input({ required: true }) title!: string;
  @Output() closeMenu = new EventEmitter();
  @Input({ required: false }) isStickyFooter!: boolean;
  @Input({ required: false }) hideCloseButton!: boolean;
  @Input({ required: false }) padding = 'px--l';
  @Input() cancelClickOutside = false;

  @ContentChild(ElementRef)
  footer?: ElementRef;

  close() {
    if (this.showMenu && !this.cancelClickOutside) {
      this.closeMenu.emit();
    }
  }
}
