import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Preference, PreferenceFacade, ProductFinderNgrxModule } from '@sales/product-finder/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { ImageSrcInterceptorDirective } from '@sales/shared/util';
import { TranslateModule } from '@ngx-translate/core';
import { OverlayPopupComponent } from '@telenet/ng-lib-shared';
import { CheckboxComponent } from '@sales/shared/ui';

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'app-sales-product-finder-preference',
  templateUrl: './preference.component.html',
  imports: [
    ReactiveFormsModule,
    ProductFinderNgrxModule,
    NgIf,
    AsyncPipe,
    ImageSrcInterceptorDirective,
    TranslateModule,
    OverlayPopupComponent,
    CheckboxComponent,
  ],
})
export class PreferenceComponent implements OnInit {
  readonly preferenceFrom: FormGroup = this.fb.nonNullable.group({
    mobile: new FormControl<boolean>(false),
    surfing: new FormControl<boolean>(false),
    watchTv: new FormControl<boolean>(false),
    fixedLine: new FormControl<boolean>(false),
  });

  readonly showAtLeastOneValueIsTrueError$: Observable<boolean> =
    this.preferenceFacade.hasErrorRequireAtLeastOnePreferenceToBeSelected$;
  readonly showPopup$: Observable<boolean> = this.preferenceFacade.hasErrorRequireInternetWhenTvIsSelected$;

  constructor(
    private readonly fb: FormBuilder,
    private readonly preferenceFacade: PreferenceFacade
  ) {}

  ngOnInit(): void {
    this.preferenceFacade.preference$.pipe(take(1), untilDestroyed(this)).subscribe((preference: Preference) => {
      this.preferenceFrom.patchValue(preference);
    });

    this.preferenceFrom.valueChanges.pipe(untilDestroyed(this)).subscribe((preference: Preference) => {
      this.preferenceFacade.updatePreference(preference);
    });
  }

  selectInternet(): void {
    this.preferenceFrom.patchValue({ surfing: true });
  }

  closePopup(): void {
    this.preferenceFacade.clearError();
  }
}
