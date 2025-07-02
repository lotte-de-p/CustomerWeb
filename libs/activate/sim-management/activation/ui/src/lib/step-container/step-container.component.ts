import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WinkButton } from '@telenet/wink-ng';

@Component({
  selector: 'tg-activate-sim-management-activation-ui-step-container',
  standalone: true,
  imports: [CommonModule, TranslateModule, WinkButton],
  templateUrl: './step-container.component.html',
})
export class SimManagementStepContainerComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() showBack = true;
  @Input() backLabel = 'ng.e-sim-activation.btn.back';
  @Input() submitLabel = 'ng.e-sim-activation.btn.submit';
  @Input() progress: '25' | '33' | '50' | '66' | '75' | '100' | undefined;

  @Output() backClick = new EventEmitter();
  @Output() submitClick = new EventEmitter();

  onBackClick(): void {
    this.backClick.emit();
  }

  onSubmitClick(): void {
    this.submitClick.emit();
  }
}
