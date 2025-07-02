import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageSrcInterceptorDirective } from '@sales/shared/util';
import { Observable, of } from 'rxjs';
import { Checkbox, CheckboxComponent, MultiSelectCheckboxComponent } from '@sales/shared/ui';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TranslateModule } from '@ngx-translate/core';
import { TvExperience, TvExperienceFacade } from '@sales/product-finder/data-access';

@UntilDestroy()
@Component({
  selector: 'tg-sales-tv-experience',
  standalone: true,
  templateUrl: './tv-experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CheckboxComponent,
    NgIf,
    AsyncPipe,
    ImageSrcInterceptorDirective,
    TranslateModule,
    NgForOf,
    FormsModule,
    CheckboxComponent,
    MultiSelectCheckboxComponent,
  ],
})
export class TvExperienceComponent {
  readonly checkboxes$: Observable<Checkbox[]> = of([
    {
      key: 'TV_BOX',
      label: 'ng.product-finder.step-tv-experience.tv-box',
      iconClass: 'icon-remote',
    },
    {
      key: 'TV_APP',
      label: 'ng.product-finder.step-tv-experience.tv-app',
      iconClass: 'icon-cast',
    },
  ]);
  readonly tvExperience$: Observable<TvExperience> = this.tvExperienceFacade.tvExperience$;
  readonly showAtLeastOneValueSelectedError$ =
    this.tvExperienceFacade.hasErrorRequireAtLeastOneTvExperienceToBeSelectedError$;

  constructor(private readonly tvExperienceFacade: TvExperienceFacade) {}

  updateTvExperience(selection: string[]): void {
    this.tvExperienceFacade.updateTvExperience({ selection });
  }
}
