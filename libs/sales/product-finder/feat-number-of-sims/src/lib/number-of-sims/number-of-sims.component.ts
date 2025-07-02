import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NumberOfSimsFacade, ProductFinderNgrxModule } from '@sales/product-finder/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { take } from 'rxjs/operators';
import { ImageSrcInterceptorDirective } from '@sales/shared/util';
import { TranslateModule } from '@ngx-translate/core';
import { CounterComponent } from '@sales/shared/ui';

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'tg-sales-number-of-sims',
  templateUrl: './number-of-sims.component.html',
  imports: [
    ReactiveFormsModule,
    ProductFinderNgrxModule,
    ImageSrcInterceptorDirective,
    TranslateModule,
    CounterComponent,
  ],
})
export class NumberOfSimsComponent implements OnInit {
  readonly numberOfSimsForm: FormGroup = this.fb.nonNullable.group({
    numberOfSims: new FormControl<number>(1),
  });
  imageSrc = '/assets/sales/product-finder/number-of-sims/1-number-of-sims.png';

  constructor(
    private readonly fb: FormBuilder,
    private readonly numberOfSimsFacade: NumberOfSimsFacade
  ) {}

  ngOnInit(): void {
    this.numberOfSimsFacade.numberOfSims$.pipe(take(1), untilDestroyed(this)).subscribe((numberOfSims: number) => {
      this.numberOfSimsForm.setValue({ numberOfSims: numberOfSims });
      this.updateImageSrc(numberOfSims);
    });

    this.numberOfSimsForm.valueChanges.pipe(untilDestroyed(this)).subscribe((numberOfSimsObj) => {
      this.numberOfSimsFacade.updateNumberOfSims(numberOfSimsObj.numberOfSims);
      this.updateImageSrc(numberOfSimsObj.numberOfSims);
    });
  }

  private updateImageSrc(numberOfSims: number) {
    this.imageSrc = `/assets/sales/product-finder/number-of-sims/${numberOfSims}-number-of-sims.png`;
  }
}
