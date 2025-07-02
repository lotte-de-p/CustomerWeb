import { Component, ComponentRef, inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ComponentStep, ProductFinderStepEnum, ProductFinderStepperFacade } from '@sales/product-finder/data-access';
import { IntroComponent } from '@sales/product-finder/feat-intro';
import { PreferenceComponent } from '@sales/product-finder/feat-preference';
import { HouseholdComponent } from '@sales/product-finder/feat-household';
import { InternetUsageComponent } from '@sales/product-finder/feat-internet-usage';
import { NumberOfSimsComponent } from '@sales/product-finder/feat-number-of-sims';
import { MobileUsageComponent } from '@sales/product-finder/feat-mobile-usage';
import { TvChannelsComponent } from '@sales/product-finder/feat-tv-channels';
import { TvExperienceComponent } from '@sales/product-finder/feat-tv-experience';
import { ResultsScreenComponent } from '@sales/product-finder/feat-results-screen';
import { ProductFinderViewContainerComponent } from './product-finder-view-container/product-finder-view-container.component';

@Component({
  standalone: true,
  selector: 'app-sales-product-finder-component-view',
  templateUrl: './product-finder-view-component.html',
})
@UntilDestroy()
export class ProductFinderViewComponent implements OnInit {
  readonly productFinderSteps: ComponentStep[] = [
    { key: ProductFinderStepEnum.INTRO, component: IntroComponent },
    { key: ProductFinderStepEnum.PREFERENCE, component: PreferenceComponent },
    { key: ProductFinderStepEnum.HOUSEHOLD, component: HouseholdComponent },
    { key: ProductFinderStepEnum.INTERNET_USAGE, component: InternetUsageComponent },
    { key: ProductFinderStepEnum.NUMBER_OF_SIMS, component: NumberOfSimsComponent },
    { key: ProductFinderStepEnum.MOBILE_USAGE, component: MobileUsageComponent },
    { key: ProductFinderStepEnum.TV_CHANNELS, component: TvChannelsComponent },
    { key: ProductFinderStepEnum.TV_EXPERIENCE, component: TvExperienceComponent },
    { key: ProductFinderStepEnum.RESULTS_SCREEN, component: ResultsScreenComponent },
  ];

  @ViewChild('viewContainer', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  readonly productFinderStepperFacade = inject(ProductFinderStepperFacade);

  ngOnInit() {
    this.productFinderStepperFacade.currentStepKey$.pipe(untilDestroyed(this)).subscribe((key: string) => {
      const step: ComponentStep | undefined = this.productFinderSteps.find((step: ComponentStep) => key === step.key);
      if (step) {
        this.viewContainer.clear();
        const componentRef: ComponentRef<ProductFinderViewContainerComponent> = this.viewContainer.createComponent(
          ProductFinderViewContainerComponent
        );
        componentRef.instance.componentStep = step;
      }
    });
  }
}
