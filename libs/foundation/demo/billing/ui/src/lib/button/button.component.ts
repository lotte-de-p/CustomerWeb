import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Icon } from './icon.type';

type ButtonRendition = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'default' | 'small' | 'normal' | 'dense';
type IconAlignment = 'left' | 'right';

@Component({
  standalone: true,
  imports: [NgIf, NgClass],
  selector: 'tg-demo-button',
  template: `
    <button
      class="button button--{{ rendition }} button__size--{{ size }}"
      [disabled]="disabled"
      [ngClass]="{
        'button__icon--position-left': iconAlignment === 'left',
        'button__icon--position-right': iconAlignment === 'right',
        'button--disabled cur-not-allowed': disabled
      }">
      <i *ngIf="iconAlignment === 'left'" class="icon-{{ icon }}"></i>
      <ng-content></ng-content>
      <i *ngIf="iconAlignment === 'right'" class="icon-{{ icon }}"></i>
    </button>
  `,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() icon?: Icon = undefined;
  @Input() iconAlignment: IconAlignment = 'left';
  @Input() size: ButtonSize = 'default';
  @Input() rendition: ButtonRendition = 'primary';
}
