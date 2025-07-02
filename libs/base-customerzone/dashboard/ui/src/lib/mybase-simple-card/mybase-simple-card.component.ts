import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tg-mybase-simple-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './mybase-simple-card.component.html',
  styleUrl: './mybase-simple-card.component.scss',
})
export class MyBaseSimpleCardComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle = '';
  @Input() iconName = '';
  @Input() cypressTag = '';
  @Input() fullHeight = false;
  @Input() isExternalLink = false;
  @Output() cardClicked = new EventEmitter<void>();
}
