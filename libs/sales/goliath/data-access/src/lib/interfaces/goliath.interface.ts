import { SalesOrderState, ShoppingBasketEnum, StepNameEnum } from '../enums/goliath.enum';
import { Observable, UnaryFunction } from 'rxjs';
import { StateActionEnum } from '../enums/state-action.enum';
import { Type } from '@angular/core';
import { StepComponent } from '@sales/shared/data-access';
import { OmapiProduct } from '@telenet/ng-lib-omapi';

export interface ShoppingBasketItem {
  type: ShoppingBasketEnum;
}

export interface ShoppingBasket {
  items: ShoppingBasketItem[];
  omapiProducts: OmapiProduct[];
}

export interface Customer {
  needsEtf: boolean;
}

export interface Step {
  name: StepNameEnum;
  component?: Type<StepComponent>;
  requiredStateBeforeLoad: RequiredState;
  lazyLoadableStates?: SalesOrderState[];
  isRequired: (shoppingBasket: ShoppingBasket, customer?: Customer) => boolean;
  isOptional?: boolean;
}

export interface Flow<T> {
  name: string;
  steps: Step[];
  isRequired: (shoppingBasket: ShoppingBasket, customer?: Customer) => boolean;
  stateActions: StateAction<T>[];
}

export interface SalesOrder {
  empty: boolean;
}

export interface StateAction<T> {
  name: StateActionEnum;
  description?: string;
  weight: number;
  executor?: (service: T) => UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder | boolean>>;
  afterExecutionHooks?: StateAction<T>[];
  stateProduced?: SalesOrderState;
}

export interface RequiredState {
  state: SalesOrderState;
}
