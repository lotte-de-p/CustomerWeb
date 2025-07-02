import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'tg-return-devices-print-return-label-dialog',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './print-return-label-dialog.component.html',
})
export class PrintReturnLabelDialogComponent {
  @Output() printClick = new EventEmitter<void>();
  @Output() downloadClick = new EventEmitter<void>();
  @Output() closeClick = new EventEmitter<void>();

  print() {
    this.printClick.emit();
  }

  download() {
    this.downloadClick.emit();
  }

  close() {
    this.closeClick.emit();
  }
}
