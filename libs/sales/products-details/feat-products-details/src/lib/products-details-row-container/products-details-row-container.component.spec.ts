import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailsRowContainerComponent } from './products-details-row-container.component';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  selectIsFixedTelephoneRowVisible,
  selectIsInternetRowVisible,
  selectIsMobileRowVisible,
  selectIsTvFlowRowVisible,
  selectIsTvIconicRowVisible,
} from '@sales/products-details/data-access';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { when } from 'jest-when';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('ProductsDetailsRowContainerComponent', () => {
  let component: ProductsDetailsRowContainerComponent;
  let fixture: ComponentFixture<ProductsDetailsRowContainerComponent>;
  const isInternetRowVisible$: Observable<boolean> = new BehaviorSubject<boolean>(true);
  const isTvIconicRowVisible$: Observable<boolean> = new BehaviorSubject<boolean>(true);
  const isTvFlowRowVisible$: Observable<boolean> = new BehaviorSubject<boolean>(true);
  const isMobileRowVisible$: Observable<boolean> = new BehaviorSubject<boolean>(true);
  const isFixedTelephoneRowVisible$: Observable<boolean> = new BehaviorSubject<boolean>(true);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsDetailsRowContainerComponent, TgTranslateTestingModule.forRoot({})],
      providers: [provideMockStore({})],
    }).compileComponents();

    const store$ = TestBed.inject(MockStore);
    when(jest.spyOn(store$, 'select')).calledWith(selectIsInternetRowVisible).mockReturnValue(isInternetRowVisible$);
    when(jest.spyOn(store$, 'select')).calledWith(selectIsTvIconicRowVisible).mockReturnValue(isTvIconicRowVisible$);
    when(jest.spyOn(store$, 'select')).calledWith(selectIsTvFlowRowVisible).mockReturnValue(isTvFlowRowVisible$);
    when(jest.spyOn(store$, 'select')).calledWith(selectIsMobileRowVisible).mockReturnValue(isMobileRowVisible$);
    when(jest.spyOn(store$, 'select'))
      .calledWith(selectIsFixedTelephoneRowVisible)
      .mockReturnValue(isFixedTelephoneRowVisible$);

    fixture = TestBed.createComponent(ProductsDetailsRowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isInternetRowVisible$).toEqual(isInternetRowVisible$);
    expect(component.isTvIconicRowVisible$).toEqual(isTvIconicRowVisible$);
    expect(component.isTvFlowRowVisible$).toEqual(isTvFlowRowVisible$);
    expect(component.isMobileRowVisible$).toEqual(isMobileRowVisible$);
    expect(component.isFixedTelephoneRowVisible$).toEqual(isFixedTelephoneRowVisible$);
  });
});
