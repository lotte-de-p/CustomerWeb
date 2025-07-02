import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProductFinderViewComponent } from './view/product-finder-view-component';
import {
  ProductFinderNgrxModule,
  ProductFinderStepperFacade,
  ProductFinderStepperNgrxModule,
} from '@sales/product-finder/data-access';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-sales-product-finder-stepper',
  templateUrl: './product-finder-stepper.component.html',
  imports: [
    TranslateModule,
    ProductFinderViewComponent,
    ProductFinderStepperNgrxModule,
    CommonModule,
    ProductFinderNgrxModule,
  ],
})
export class ProductFinderStepperComponent {
  currentStepNumber$: Observable<number> = this.productFinderStepperFacade.currentStepNumber$;
  progressPercentage$: Observable<number> = this.productFinderStepperFacade.progressPercentage$;
  progressBarVisible$: Observable<boolean> = this.productFinderStepperFacade.progressBarVisible$;
  visible$: Observable<boolean> = this.productFinderStepperFacade.visible$;

  constructor(private readonly productFinderStepperFacade: ProductFinderStepperFacade) {}

  goToPreviousStep(): void {
    this.productFinderStepperFacade.goToPreviousStep();
  }

  goToNextStep(): void {
    this.productFinderStepperFacade.nextButtonClicked();
  }
}
