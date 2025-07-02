import { Component, OnInit } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { NavigationService } from './services/navigation.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AccountNgrxModule } from '@fleet/account/data-access';
import { ReducerManager } from '@ngrx/store';
import { MobileNumberComponent } from './mobile-number/mobile-number.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, AccountNgrxModule, MobileNumberComponent],
  selector: 'tg-manage-profile',
  templateUrl: './manage-profile.component.html',
  providers: [NavigationService, ReducerManager],
})
export class ManageProfileComponent extends AbstractBaseComponent implements OnInit {
  showSubmitButton: boolean;
  canSubmit: boolean;

  constructor(private readonly navigationService: NavigationService) {
    super();
  }

  ngOnInit() {
    this.obs(this.navigationService.canSubmit$)
      .pipe(untilDestroyed(this))
      .subscribe((canSubmit) => {
        this.canSubmit = canSubmit;
      });
  }

  onSubmit() {
    this.navigationService.setNextPage();
  }

  getProgress(): string {
    const percentage = this.navigationService.countProgressBarPercentage();
    return percentage ? 'ready-' + percentage : '';
  }
}
