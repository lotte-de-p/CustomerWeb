import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input({ required: true }) title!: string;
  @Output() closeMenu = new EventEmitter();

  close() {
    this.closeMenu.emit();
  }
}
