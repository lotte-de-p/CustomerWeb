import { Route } from '@angular/router';
import { ProductFinderStepperComponent } from '@sales/product-finder/feat-stepper';

export const productFinderRoutes: Route[] = [
  {
    path: '',
    component: ProductFinderStepperComponent,
  },
];
