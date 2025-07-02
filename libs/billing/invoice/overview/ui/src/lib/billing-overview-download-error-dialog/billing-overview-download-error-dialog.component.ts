import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WinkButton } from '@telenet/wink-ng';
import { ClickOutsideDirective } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-billing-overview-download-error-dialog',
  standalone: true,
  imports: [CommonModule, TranslateModule, WinkButton, ClickOutsideDirective],
  templateUrl: './billing-overview-download-error-dialog.component.html',
})
export class BillingOverviewDownloadErrorDialogComponent {
  constructor(private readonly dialogRef: MatDialogRef<BillingOverviewDownloadErrorDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
