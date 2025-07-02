import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { NgIf } from '@angular/common';
import { OverlayPopupComponent } from './overlay-popup.component';

@Component({
  selector: 'app-overlay-popup-story-component',
  standalone: true,
  imports: [OverlayPopupComponent, NgIf],
  template: `
    <div>
      <button (click)="showPopup = true" class="button button--primary">Open popup</button>
      <app-overlay-popup
        *ngIf="showPopup"
        [title]="title"
        [content]="content"
        [primaryButtonText]="primaryButtonText"
        [subtitle]="subtitle"
        [secondaryButtonText]="secondaryButtonText"
        (secondaryButtonClicked)="showPopup = false"
        (primaryButtonClicked)="primaryButtonClicked()"></app-overlay-popup>
    </div>
  `,
})
class OverlayPopupStoryComponent {
  showPopup = false;
  @Input() title = '';
  @Input() subtitle = '';
  @Input() content = '';
  @Input() primaryButtonText = '';
  @Input() secondaryButtonText = '';
  primaryButtonClicked = () => alert('Primary button clicked');
}

export default {
  title: 'Form/OverlayPopupComponent',
  component: OverlayPopupStoryComponent,
  decorators: [
    moduleMetadata({
      imports: [OverlayPopupComponent],
    }),
  ],
} as Meta<OverlayPopupStoryComponent>;

type Story = StoryObj<OverlayPopupStoryComponent>;

export const Primary: Story = {
  args: {
    title: 'My overlay popup',
    subtitle: 'My subtitle',
    content:
      "\"Sometimes I'll start a sentence and I don't even know where it's going.  I just hope I find it along the way. Like an improv conversation.\" — Michael Scott",
    primaryButtonText: 'Primary button',
    secondaryButtonText: 'Close popup',
  },
};
