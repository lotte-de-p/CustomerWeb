import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WinkButton, WinkIcon } from '@telenet/wink-ng';

@Component({
  selector: 'tg-hardware-discount-download-error-dialog',
  standalone: true,
  imports: [CommonModule, TranslateModule, WinkButton, WinkIcon],
  templateUrl: './hardware-discount-download-error-dialog.component.html',
})
export class HardwareDiscountDownloadErrorDialogComponent {
  constructor(private readonly dialogRef: MatDialogRef<HardwareDiscountDownloadErrorDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
