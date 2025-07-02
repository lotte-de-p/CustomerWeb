import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Household, HouseholdFacade } from '@sales/product-finder/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { take } from 'rxjs/operators';
import { CounterComponent } from '@sales/shared/ui';
import { ImageSrcInterceptorDirective } from '@sales/shared/util';
import { TranslateModule } from '@ngx-translate/core';

@UntilDestroy()
@Component({
  selector: 'tg-sales-household',
  standalone: true,
  templateUrl: './household.component.html',
  imports: [ReactiveFormsModule, CounterComponent, ImageSrcInterceptorDirective, TranslateModule],
})
export class HouseholdComponent implements OnInit {
  readonly householdForm: FormGroup = this.fb.nonNullable.group({
    adults: new FormControl<number>(1),
    teens: new FormControl<number>(0),
    children: new FormControl<number>(0),
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly householdFacade: HouseholdFacade
  ) {}

  ngOnInit(): void {
    this.householdFacade.household$
      .pipe(take(1))
      .subscribe((houseHold: Household) => this.householdForm.setValue(houseHold));

    this.householdForm.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((household: Household) => this.householdFacade.updateHousehold(household));
  }
}
