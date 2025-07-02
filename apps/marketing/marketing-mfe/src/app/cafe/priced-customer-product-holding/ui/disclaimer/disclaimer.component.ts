import { Component } from '@angular/core';
import { TranslateHelperService } from '../../service/translate-helper.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'tg-marketing-cafe-disclaimer',
  templateUrl: './disclaimer.component.html',
  standalone: true,
  imports: [NgIf, TranslateModule],
})
export class DisclaimerComponent {
  showMore: boolean;

  constructor(public translateHelperService: TranslateHelperService) {}

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
