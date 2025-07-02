import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum ProgressBarStatus {
  OK = 'ok',
  WARN = 'warn',
  ERROR = 'error',
}

@Component({
  selector: 'tg-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input({ required: true }) progress = 0;
  @Input() barColor: ProgressBarStatus = ProgressBarStatus.OK;

  ProgressBarStatus = ProgressBarStatus;
}
