import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-slide-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-menu.component.html',
  styleUrl: './slide-menu.component.scss',
})
export class SlideMenuComponent {
  @Input({ required: true }) showMenu!: boolean;
  @Input({ required: true }) title!: string;
  @Output() closeMenu = new EventEmitter();

  close() {
    if (this.showMenu) {
      this.closeMenu.emit();
    }
  }
}
