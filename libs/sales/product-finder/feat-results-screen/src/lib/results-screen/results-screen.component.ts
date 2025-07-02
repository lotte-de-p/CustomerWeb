import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ProductFinderStepperFacade,
  ProductRecommendationResult,
  ResultsScreenFacade,
} from '@sales/product-finder/data-access';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ContactCustomerServiceComponent } from './contact-customer-service/contact-customer-service.component';
import { RedoTestComponent } from './redo-test/redo-test.component';
import { LoaderModule } from '@telenet/ng-lib-page';

@Component({
  selector: 'tg-sales-results-screen',
  standalone: true,
  templateUrl: './results-screen.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    TranslateModule,
    RecommendationComponent,
    ContactCustomerServiceComponent,
    RedoTestComponent,
    LoaderModule,
  ],
})
export class ResultsScreenComponent implements OnInit {
  readonly enableLoader$: Observable<boolean> = this.resultsScreenFacade.enableLoader$;
  readonly enableLoaderMask$: Observable<boolean> = this.resultsScreenFacade.enableLoaderMask$;
  readonly productRecommendationResult$: Observable<ProductRecommendationResult> =
    this.resultsScreenFacade.productRecommendationResult$;

  constructor(
    private readonly resultsScreenFacade: ResultsScreenFacade,
    private readonly productFinderStepperFacade: ProductFinderStepperFacade
  ) {}

  ngOnInit(): void {
    this.resultsScreenFacade.getProductRecommendations();
  }

  redoTest(): void {
    this.productFinderStepperFacade.redoTest();
  }

  order(index: number): void {
    this.resultsScreenFacade.order(index);
  }

  resultDetails(index: number): void {
    this.resultsScreenFacade.resultDetails(index);
  }
}
