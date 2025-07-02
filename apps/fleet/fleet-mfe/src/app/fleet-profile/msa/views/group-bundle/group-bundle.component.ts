import { Component, Input } from '@angular/core';
import { sortBy } from 'lodash-es';
import { GroupBundleInterface } from '../../interfaces/group-bundle.interface';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'tg-group-bundle',
  templateUrl: './group-bundle.component.html',
  standalone: true,
  imports: [NgFor, TranslateModule],
})
export class GroupBundleComponent {
  @Input() bundles: GroupBundleInterface[] = [];

  weightOrder(): GroupBundleInterface[] {
    return sortBy(this.bundles, 'productInfo.weight');
  }
}
