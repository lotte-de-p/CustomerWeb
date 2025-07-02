import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFinderStepperFacade, ProductFinderStepperNgrxModule } from '@sales/product-finder/data-access';
import { ProductFinderViewComponent } from './product-finder-view-component';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { ProductFinderViewContainerComponent } from './product-finder-view-container/product-finder-view-container.component';

describe('ProductFinderViewComponent', () => {
  let component: ProductFinderViewComponent;
  let fixture: ComponentFixture<ProductFinderViewComponent>;
  let productFinderStepperFacade: ProductFinderStepperFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), ProductFinderStepperNgrxModule],
      providers: [ProductFinderStepperFacade],
    }).compileComponents();

    productFinderStepperFacade = TestBed.inject(ProductFinderStepperFacade);

    fixture = TestBed.createComponent(ProductFinderViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create component when currentStepKey is found in productFinderSteps ', () => {
    const key = 'preference';
    productFinderStepperFacade.currentStepKey$ = of(key);

    const createComponentSpy = jest.spyOn(component.viewContainer, 'createComponent');

    component.ngOnInit();

    expect(createComponentSpy).toHaveBeenCalledWith(ProductFinderViewContainerComponent);
  });

  it('should not create component when currentStepKey is not found in productFinderSteps ', () => {
    const key = 'not existing key';
    productFinderStepperFacade.currentStepKey$ = of(key);

    const createComponentSpy = jest.spyOn(component.viewContainer, 'createComponent');

    component.ngOnInit();

    expect(createComponentSpy).not.toHaveBeenCalled();
  });
});
