import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DtvBoxOverviewComponent } from '@entertainment/dtv-box-management/feat-dtv-box-overview';
import { TranslateService } from '@ngx-translate/core';
import { LanguageEnum } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-entertainment-local',
  standalone: true,
  imports: [CommonModule, DtvBoxOverviewComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(translateService: TranslateService) {
    translateService.use(LanguageEnum.EN);
  }
}
