import { forkJoin, Observable, of, pipe, UnaryFunction } from 'rxjs';
import { catchError, concatMap, map, mergeMap, take, tap } from 'rxjs/operators';
import {
  BillingAccount,
  CustomerTypeEnum,
  DeliveryMethods,
  DiscountItem,
  OrderItemDeliveryChars,
  SalesOrder,
  SalesOrderStateEnum,
  SdataSalesOfferItem,
  SessionStorageConstants,
} from '@sales/hardware-checkout/data-access';
import { HardwareCheckoutFacade } from '../facades/hardware-checkout.facade';
import { SalesOrderUtil } from './sales-order.util';
import { RawOmapiQueryProductInterface } from '@telenet/ng-lib-omapi-query';
import {
  CouldNotUpdateInstallationLocation,
  DiscountRuleNotFound,
  EligibilityError,
  NoBillingAccount,
  NoHardwareItemsFound,
  OrderItemCreationFailed,
  SalesOrderNotSet,
} from '../constants/errors.constants';
import { AddressUtil } from './address.util';
import { OrderItemActionEnum } from '../enums/order-item-action.enum';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { OrderItemWithMatchingDiscount } from '../interfaces/order-item-with-matching-discount.interface';
import { UpdateDeliveryCharsRequest } from '../interfaces/update-installation-address-request.interface';
import { DeliveryUtil } from './delivery.util';

export class StrategyUtil {
  static checkFeasibility(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return pipe(
      mergeMap((salesOrder: SalesOrder) => {
        if (SalesOrderUtil.feasibilityCheckRequired(salesOrder)) {
          return hardwareCheckoutFacade.checkFeasibility(salesOrder.id);
        }
        return of(salesOrder);
      })
    );
  }

  static checkEligibility(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return pipe(
      mergeMap((salesOrder: SalesOrder) => {
        return hardwareCheckoutFacade.checkEligibility(salesOrder.id).pipe(
          map((result) => {
            if (result.length > 0) {
              throw new HardwareCheckoutError(EligibilityError);
            }
            return salesOrder;
          })
        );
      })
    );
  }

  static checkContractSummary(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return pipe(
      mergeMap((salesOrder: SalesOrder) => {
        return hardwareCheckoutFacade.checkContractSummary(salesOrder.id).pipe(
          tap((result) => {
            hardwareCheckoutFacade.setContractSummaryRequired(result.isRequired);
          }),
          map(() => {
            return salesOrder;
          })
        );
      })
    );
  }

  static handleNotifications(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return pipe(
      mergeMap((salesOrder) => {
        return hardwareCheckoutFacade.omapiQueryProducts$.pipe(
          take(1),
          tap((products) => {
            hardwareCheckoutFacade.setDeliveryNotifications(salesOrder, products);
            hardwareCheckoutFacade.setSummaryNotifications(salesOrder, products);
          }),
          map(() => salesOrder)
        );
      })
    );
  }

  static handleDelivery(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return pipe(
      mergeMap((salesOrder: SalesOrder) => {
        return hardwareCheckoutFacade.getDeliveryOptions(salesOrder.id).pipe(
          map((deliveryMethods) => {
            return { salesOrder: salesOrder, deliveryMethods: deliveryMethods };
          })
        );
      }),
      mergeMap((res: { salesOrder: SalesOrder; deliveryMethods: DeliveryMethods }) => {
        return hardwareCheckoutFacade.calculateDelivery(res.salesOrder.id, res.deliveryMethods);
      })
    );
  }

  static setSummaryDeliveryPersonalInfoFromRetrievedSalesOrder(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return (source: Observable<SalesOrder>) =>
      source.pipe(
        mergeMap((salesOrder: SalesOrder) => {
          const orderItemDeliveryChars: OrderItemDeliveryChars = SalesOrderUtil.getDeliveryChars(salesOrder);
          if (orderItemDeliveryChars.firstName && orderItemDeliveryChars.lastName) {
            hardwareCheckoutFacade.setSummaryDeliveryPersonalInfo({
              firstname: orderItemDeliveryChars.firstName ? orderItemDeliveryChars.firstName : '',
              lastname: orderItemDeliveryChars.lastName,
              mobile: orderItemDeliveryChars.mobileNumber ? orderItemDeliveryChars.mobileNumber : '',
              email: orderItemDeliveryChars.email ? orderItemDeliveryChars.email : '',
            });
          }

          return of(salesOrder);
        })
      );
  }

  static resetContractSummaryInfo(): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return (source: Observable<SalesOrder>) =>
      source.pipe(
        mergeMap((salesOrder: SalesOrder) => {
          window.sessionStorage.removeItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL);
          return of(salesOrder);
        })
      );
  }

  static loadContractSummaryInfo(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return (source: Observable<SalesOrder>) =>
      source.pipe(
        mergeMap((salesOrder: SalesOrder) => {
          const contractSummaryRequired: boolean =
            (window.sessionStorage.getItem(SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_REQUIRED) ?? 'false') ===
            'true';
          hardwareCheckoutFacade.setContractSummaryRequired(contractSummaryRequired);
          const contractSummaryUrl: string | null = window.sessionStorage.getItem(
            SessionStorageConstants.CHECKOUT_CONTRACT_SUMMARY_URL
          );
          if (contractSummaryUrl) {
            hardwareCheckoutFacade.setContractSummaryUrl(contractSummaryUrl);
          }
          hardwareCheckoutFacade.setContractSummaryGenerationNotPossible();
          return of(salesOrder);
        })
      );
  }

  static setSummaryDeliveryAddressFromRetrievedSalesOrder(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return (source: Observable<SalesOrder>) =>
      source.pipe(
        mergeMap((salesOrder: SalesOrder) => {
          const deliveryAddress: OrderItemDeliveryChars = SalesOrderUtil.getDeliveryChars(salesOrder);

          if (!deliveryAddress.postalCode || !deliveryAddress.municipality || !deliveryAddress.street) {
            throw new Error('Incomplete delivery address');
          }

          const postalCode$ = hardwareCheckoutFacade.getAddressById(deliveryAddress.postalCode);
          const street$ = hardwareCheckoutFacade.getAddressById(deliveryAddress.street);

          return forkJoin({ postalCode$, street$ }).pipe(
            map(({ postalCode$, street$ }) => {
              street$.postalCode = postalCode$.name;
              const updatedAddress = {
                addressUnit: street$,
                country: AddressUtil.getAddressValue(street$, 'Country'),
                box: deliveryAddress.box ? deliveryAddress.box : '',
                subHouseNumber: deliveryAddress.subHouseNumber ? deliveryAddress.subHouseNumber : '',
                houseNumber: deliveryAddress.houseNumber ? deliveryAddress.houseNumber : '',
                municipality: AddressUtil.getAddressValue(street$, 'Municipality'),
                postalCode: postalCode$.name ? postalCode$.name : '',
                street: street$.name,
              };
              hardwareCheckoutFacade.setSummaryDeliveryAddress(updatedAddress);
              return salesOrder;
            })
          );
        })
      );
  }

  static createHardwareItems(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return pipe(
      mergeMap((salesOrder: SalesOrder) => {
        return forkJoin({
          salesOrder: of(salesOrder),
          customerType: hardwareCheckoutFacade.customerType$.pipe(take(1)),
        });
      }),
      mergeMap(({ salesOrder, customerType }) => {
        try {
          SalesOrderUtil.getHardwareOrderItem(salesOrder);
          return forkJoin({
            salesOrder: of(salesOrder),
            salesOffer: hardwareCheckoutFacade.salesOffer$.pipe(take(1)),
          });
        } catch (e) {
          return forkJoin({
            salesOrder: hardwareCheckoutFacade.createHardwareTLO(salesOrder.id, customerType),
            salesOffer: hardwareCheckoutFacade.salesOffer$.pipe(take(1)),
          }).pipe(
            catchError((error) => {
              if (error instanceof HardwareCheckoutError) {
                throw error;
              } else {
                throw new HardwareCheckoutError(OrderItemCreationFailed, error);
              }
            })
          );
        }
      }),
      mergeMap(({ salesOrder, salesOffer }) => {
        const hardwareOrderItem = SalesOrderUtil.getHardwareOrderItem(salesOrder);
        if (!hardwareOrderItem) {
          throw new HardwareCheckoutError(OrderItemCreationFailed);
        }

        if (!salesOffer) {
          throw new Error('Sales offer not found');
        }
        const orderItems: Observable<SalesOrder>[] = salesOffer.offers.map((orderItem: SdataSalesOfferItem) => {
          return hardwareCheckoutFacade.addOrderItem(salesOrder.id, hardwareOrderItem.id, orderItem.itemCode);
        });
        return forkJoin(orderItems);
      }),
      map((salesOrders: SalesOrder[]) => {
        const lastSalesOrder = salesOrders.find((salesOrder) => {
          const hardwareOrderItem = SalesOrderUtil.getHardwareOrderItem(salesOrder);
          return (
            hardwareOrderItem?.orderItems?.filter((orderItem) => orderItem.action === OrderItemActionEnum.ADD)
              ?.length === salesOrders.length
          );
        });

        if (!lastSalesOrder) {
          throw new HardwareCheckoutError(OrderItemCreationFailed);
        }
        return lastSalesOrder;
      })
    );
  }

  static updateDeliveryChars(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return mergeMap((salesOrder) => {
      return forkJoin({
        personalInfo: hardwareCheckoutFacade.deliveryPersonalInfo$.pipe(take(1)),
        deliveryAddress: hardwareCheckoutFacade.deliveryAddress$.pipe(take(1)),
      }).pipe(
        mergeMap(({ personalInfo, deliveryAddress }) => {
          if (personalInfo && deliveryAddress) {
            const updatePersonalDeliveryChars = DeliveryUtil.toDeliveryPersonalInfoChars(personalInfo);
            const updatedDeliveryAddressChars = DeliveryUtil.toDeliveryAddressChars(deliveryAddress);

            const updateDeliveryCharsRequest: UpdateDeliveryCharsRequest = {
              ...updatePersonalDeliveryChars,
              ...updatedDeliveryAddressChars,
            };
            if (salesOrder) {
              const deliveryOrderItemId = SalesOrderUtil.getDeliveryOrderItem(salesOrder, OrderItemActionEnum.ADD);
              return hardwareCheckoutFacade
                .updateDeliveryChars(salesOrder.id, deliveryOrderItemId.id, updateDeliveryCharsRequest)
                .pipe(map(() => salesOrder));
            }
            throw new HardwareCheckoutError(SalesOrderNotSet);
          }
          throw new HardwareCheckoutError(CouldNotUpdateInstallationLocation);
        })
      );
    });
  }

  static setSummaryDetails(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return mergeMap((salesOrder) => {
      return forkJoin({
        personalInfo: hardwareCheckoutFacade.deliveryPersonalInfo$.pipe(take(1)),
        contactAddress: hardwareCheckoutFacade.deliveryContactAddress$.pipe(take(1)),
        omapiProducts: hardwareCheckoutFacade.omapiProducts$.pipe(take(1)),
        omapiQueryProducts: hardwareCheckoutFacade.omapiQueryProducts$.pipe(take(1)),
        customerType: hardwareCheckoutFacade.customerType$.pipe(take(1)),
      }).pipe(
        tap(({ personalInfo, contactAddress, omapiProducts, omapiQueryProducts, customerType }) => {
          if (personalInfo && contactAddress) {
            hardwareCheckoutFacade.setSummaryDeliveryInfo(personalInfo, contactAddress);
          }
          const hardwareOrderItems = SalesOrderUtil.getHardwareOrderItem(salesOrder);
          if (hardwareOrderItems && hardwareOrderItems.orderItems) {
            hardwareCheckoutFacade.setSummaryViewModel(
              salesOrder,
              hardwareOrderItems.orderItems,
              omapiProducts || [],
              omapiQueryProducts ?? [],
              customerType === CustomerTypeEnum.SOHO
            );
          }
        }),
        map(() => salesOrder)
      );
    });
  }

  static handleBillingAccount(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<boolean>, Observable<boolean>> {
    return mergeMap(() => {
      return hardwareCheckoutFacade.getBillingAccounts().pipe(
        tap((billingAccounts: BillingAccount[]) => {
          if (billingAccounts.length === 0) {
            throw new HardwareCheckoutError(NoBillingAccount);
          }
          hardwareCheckoutFacade.setBillingAccounts(billingAccounts);
        }),
        mergeMap((billingAccounts: BillingAccount[]) => {
          const defaultBillingAccount = billingAccounts?.find((billingAccount) => {
            return billingAccount.defaultBillingAccount.name === 'Yes';
          });
          if (defaultBillingAccount) {
            return hardwareCheckoutFacade.defaultBillingAccount$.pipe(
              take(1),
              mergeMap((defaultBillingAccount) => {
                if (defaultBillingAccount) {
                  return hardwareCheckoutFacade.getAddressById(defaultBillingAccount.billingAddress.id);
                } else {
                  throw new HardwareCheckoutError(NoBillingAccount);
                }
              }),
              tap((billingAddress) => {
                hardwareCheckoutFacade.setSummaryInvoiceInfo(
                  AddressUtil.convertNcAddressToDeliveryAddress(billingAddress)
                );
              })
            );
          }

          throw new HardwareCheckoutError(NoBillingAccount);
        }),
        map(() => true)
      );
    });
  }

  static processSalesOrderToDeliveryCalculated(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<boolean>> {
    return pipe(
      StrategyUtil.checkFeasibility(hardwareCheckoutFacade),
      StrategyUtil.handleDelivery(hardwareCheckoutFacade),
      StrategyUtil.checkEligibility(hardwareCheckoutFacade),
      // StrategyUtil.checkContractSummary(hardwareCheckoutFacade),
      StrategyUtil.setOmapiDetails(hardwareCheckoutFacade),
      StrategyUtil.handleNotifications(hardwareCheckoutFacade),
      StrategyUtil.setSummaryDetails(hardwareCheckoutFacade),
      tap((salesOrder: SalesOrder) => {
        const hardwareOrderItems = SalesOrderUtil.getHardwareOrderItem(salesOrder);
        if (hardwareOrderItems && hardwareOrderItems.orderItems) {
          hardwareCheckoutFacade.saveSalesOrder(salesOrder);
          hardwareCheckoutFacade.setSalesOrderState(SalesOrderStateEnum.DELIVERY_CALCULATED);
        } else {
          throw new HardwareCheckoutError(NoHardwareItemsFound);
        }
      }),
      map(() => true)
    );
  }

  static setOmapiDetails(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return pipe(
      mergeMap((salesOrder) => {
        const hardwareSalesOrder = SalesOrderUtil.getHardwareOrderItem(salesOrder);
        const productIds = SalesOrderUtil.getOrderItemItemCodes(hardwareSalesOrder);
        if (productIds) {
          return hardwareCheckoutFacade.getOmapiQueryProducts(productIds).pipe(
            take(1),
            tap((rawOmapiQueryProduct: RawOmapiQueryProductInterface) => {
              hardwareCheckoutFacade.setOmapiQueryProducts(rawOmapiQueryProduct);
            }),
            map(() => {
              return salesOrder;
            })
          );
        }
        return of(salesOrder);
      }),
      mergeMap((salesOrder) => {
        const discountItems: DiscountItem[] = SalesOrderUtil.getDiscountsThatAreUsedByOrderItems(salesOrder);
        if (discountItems && discountItems.length > 0) {
          const omapiDiscountItemRequests: Observable<OmapiProduct>[] = discountItems.map(
            (discountItem: DiscountItem) => {
              return hardwareCheckoutFacade.getOmapiProduct(discountItem.discountId);
            }
          );
          return forkJoin(omapiDiscountItemRequests).pipe(
            tap((omapiProducts: OmapiProduct[]) => {
              hardwareCheckoutFacade.setOmapiProducts(omapiProducts);
            }),
            map(() => {
              return salesOrder;
            })
          );
        }
        return of(salesOrder);
      })
    );
  }

  static setSalesOrderAsAbandonable(
    hardwareCheckoutFacade: HardwareCheckoutFacade
  ): UnaryFunction<Observable<SalesOrder>, Observable<SalesOrder>> {
    return pipe(
      mergeMap((salesOrder: SalesOrder) => {
        return forkJoin({
          referrerUrl: hardwareCheckoutFacade.referrerUrl$.pipe(take(1)),
          customerAccountDetails: hardwareCheckoutFacade.customerAccountDetails$.pipe(take(1)),
        }).pipe(
          mergeMap(({ referrerUrl, customerAccountDetails }) => {
            if (customerAccountDetails && referrerUrl) {
              return hardwareCheckoutFacade.setSalesorderAsAbandonable(
                salesOrder.id,
                customerAccountDetails.id,
                referrerUrl
              );
            }
            return of(salesOrder);
          }),
          map(() => salesOrder)
        );
      })
    );
  }

  static applyDiscountsRecursively(
    hardwareCheckoutFacade: HardwareCheckoutFacade,
    orderItemsWithMatchingDiscounts: OrderItemWithMatchingDiscount[],
    salesOrder: SalesOrder
  ): Observable<SalesOrder> {
    if (orderItemsWithMatchingDiscounts.length === 0) {
      return of(salesOrder);
    }
    const currentItem = orderItemsWithMatchingDiscounts.shift();
    if (!currentItem) {
      return of(salesOrder);
    }
    const matchingRule = SalesOrderUtil.getOrderItemDiscountRule(currentItem, salesOrder.rules);
    if (!matchingRule) {
      throw new HardwareCheckoutError(DiscountRuleNotFound);
    }
    return hardwareCheckoutFacade
      .addDiscount(salesOrder.id, matchingRule.id)
      .pipe(
        concatMap((updatedSalesOrder) =>
          this.applyDiscountsRecursively(hardwareCheckoutFacade, orderItemsWithMatchingDiscounts, updatedSalesOrder)
        )
      );
  }
}
