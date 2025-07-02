import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IngenicoRequestForm } from '@sales/shared/data-access';

@Component({
  selector: 'tg-sales-ingenico-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ingenico-form.component.html',
})
export class IngenicoFormComponent {
  @Input()
  actionUrl: string | undefined | null;

  @ViewChild('ingenicoForm') ingenicoForm: ElementRef | undefined;
  @Output() paymentInitiated = new EventEmitter();

  formToSubmit: IngenicoRequestForm | undefined;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  sendRequest(form: IngenicoRequestForm): void {
    this.formToSubmit = Object.assign({}, form);
    this.changeDetectorRef.detectChanges();
    this.ingenicoForm?.nativeElement.click();
  }

  handleClick() {
    this.paymentInitiated.emit();
  }
}
