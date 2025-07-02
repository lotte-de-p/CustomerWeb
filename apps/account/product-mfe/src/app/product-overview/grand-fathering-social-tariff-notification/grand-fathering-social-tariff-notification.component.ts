import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule],
  selector: 'grand-fathering-social-tariff-notification',
  templateUrl: './grand-fathering-social-tariff-notification.component.html',
  styleUrls: ['./grand-fathering-social-tariff-notification.component.scss'],
})
export class GrandFatheringSocialTariffNotificationComponent extends AbstractBaseComponent {
  constructor(private readonly dialogRef: MatDialogRef<GrandFatheringSocialTariffNotificationComponent>) {
    super();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  confirm() {
    this.dialogRef.close(true);
  }
}
