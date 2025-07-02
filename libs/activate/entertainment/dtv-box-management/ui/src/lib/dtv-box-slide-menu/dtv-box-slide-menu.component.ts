import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tg-entertainment-dtv-box-slide-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dtv-box-slide-menu.component.html',
  styleUrl: './dtv-box-slide-menu.component.scss',
})
export class DtvBoxSlideMenuComponent {
  @Input({ required: true }) showMenu!: boolean;
  @Input({ required: true }) title!: string;
  @Output() closeMenu = new EventEmitter();

  close() {
    if (this.showMenu) {
      this.closeMenu.emit();
    }
  }
}
