import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFinderViewContainerComponent } from './product-finder-view-container.component';
import { ProductFinderStepperFacade } from '@sales/product-finder/data-access';
import { StoreModule } from '@ngrx/store';

describe('ProductFinderViewContainerComponent', () => {
  let component: ProductFinderViewContainerComponent;
  let fixture: ComponentFixture<ProductFinderViewContainerComponent>;
  let productFinderStepperFacade: ProductFinderStepperFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot()],
    }).compileComponents();

    productFinderStepperFacade = TestBed.inject(ProductFinderStepperFacade);

    fixture = TestBed.createComponent(ProductFinderViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngAfterViewInit should dispatch notifyStepRendered', () => {
    const notifyStepRenderedSpy = jest.spyOn(productFinderStepperFacade, 'notifyStepRendered');

    component.ngAfterViewInit();

    expect(notifyStepRenderedSpy).toHaveBeenCalled();
  });
});
