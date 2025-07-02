import { AfterViewInit, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentStep, ProductFinderStepperFacade } from '@sales/product-finder/data-access';

@Component({
  selector: 'app-product-finder-view-container',
  standalone: true,
  templateUrl: './product-finder-view-container.component.html',
})
export class ProductFinderViewContainerComponent implements AfterViewInit {
  @ViewChild('viewContainer', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;
  private key!: string;

  constructor(private readonly productFinderStepperFacade: ProductFinderStepperFacade) {}

  @Input() set componentStep(componentStep: ComponentStep) {
    this.viewContainer.clear();
    this.viewContainer.createComponent(componentStep.component);
    this.key = componentStep.key;
  }

  ngAfterViewInit(): void {
    this.productFinderStepperFacade.notifyStepRendered(this.key);
  }
}
