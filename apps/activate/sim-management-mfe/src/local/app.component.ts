import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileLineDetailsComponent } from '@sim-management/feat-mobile-line-details';
import { TranslateService } from '@ngx-translate/core';
import { LanguageEnum } from '@telenet/ng-lib-page';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'tg-sim-management-local',
  standalone: true,
  imports: [CommonModule, MobileLineDetailsComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(translateService: TranslateService) {
    translateService.use(LanguageEnum.EN);
  }
}
