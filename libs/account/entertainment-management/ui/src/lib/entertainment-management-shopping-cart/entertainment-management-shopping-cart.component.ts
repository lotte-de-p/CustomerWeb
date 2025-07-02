import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinkButton, WinkParagraph, WinkSheet, WinkTitle } from '@telenet/wink-ng';

@Component({
  selector: 'tg-entertainment-management-shopping-cart',
  standalone: true,
  imports: [CommonModule, WinkSheet, WinkTitle, WinkParagraph, WinkButton],
  templateUrl: './entertainment-management-shopping-cart.component.html',
  styleUrl: './entertainment-management-shopping-cart.component.scss',
})
export class EntertainmentManagementShoppingCartComponent {
  showCart = false;
  @Output() isCartOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
}
