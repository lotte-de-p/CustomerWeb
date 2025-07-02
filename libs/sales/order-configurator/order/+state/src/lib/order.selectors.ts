import { createFeatureSelector, createSelector } from '@ngrx/store';
import { stateFeatureName } from './state.const';
import { OrderState } from './order.state';

export const featureState = createFeatureSelector<OrderState>(stateFeatureName);

export const orderItems = createSelector([featureState], (state: OrderState) => {
  return state.order.orderItems;
});

export const deliveryPrice = createSelector([featureState], (state: OrderState) => {
  return state.order.deliveryPrice;
});

export const installationCost = createSelector([featureState], (state: OrderState) => {
  return state.order.installationCost;
});

export const monthlyTotalOrderCost = createSelector([featureState], (state: OrderState) => {
  return state.order.monthlyTotalOrderCost();
});

export const totalOrderCost = createSelector([featureState], (state: OrderState) => {
  return state.order.totalOrderCost();
});

export const totalDiscountedCost = createSelector([featureState], (state: OrderState) => {
  return state.order.totalDiscountedCost();
});

export const oneTimeTotalOrderCost = createSelector([featureState], (state: OrderState) => {
  return state.order.oneTimeTotalOrderCost();
});
