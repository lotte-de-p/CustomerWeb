import * as Factory from 'factory.ts';
import { InstallTypeEnum } from '../../enums/ocapi-move-order.enum';
export const salesOfferPromoPeriodFactory = Factory.Sync.makeFactory({
    startDate: '12/01/2020',
    endDate: '12/03/2020',
});
export const salesOfferPromoFactory = Factory.Sync.makeFactory({
    backendid: 123,
    duration: 3,
    legalid: 'legal-id',
    name: 'promo-one',
    period: salesOfferPromoPeriodFactory.build(),
    price: -5,
    priceexclvat: -3,
    puk: '1234',
    tags: [],
    legalInformation: undefined,
});
export const salesOfferProductOptionFactory = Factory.Sync.makeFactory({
    specurl: 'url/100',
    omapiid: '100',
    mutuallyexclusive: 'none',
    mutuallyexclusivelist: [],
    selected: true,
    description: 'description',
    price: 20,
    priceexclvat: 18,
    originalprice: 15,
    productInfo: {},
    promos: [salesOfferPromoFactory.build()],
});
export const salesOfferProductStreamingServiceFactory = Factory.Sync.makeFactory({
    options: [salesOfferProductOptionFactory.build()],
    specurl: 'url/100',
    omapiid: '100',
    mutuallyexclusive: 'none',
    mutuallyexclusivelist: [],
    selected: true,
    description: 'description',
    price: 20,
    priceexclvat: 18,
    originalprice: 15,
    productInfo: {},
    promos: [salesOfferPromoFactory.build()],
});
export const salesOfferProductOptinFactory = Factory.Sync.makeFactory({
    specurl: 'url/100',
    omapiid: '100',
    mutuallyexclusive: 'none',
    selected: true,
    description: 'description',
    price: 0,
    priceexclvat: 0,
    originalprice: 15,
    productInfo: {
        hasServiceType(_) {
            return false;
        },
    },
    promos: [],
});
export const SalesOfferSetupModelFactory = Factory.Sync.makeFactory({
    easyswitcheligible: true,
});
export const salesOfferProductPreInstallTypeFactory = Factory.Sync.makeFactory({
    description: InstallTypeEnum.PRE_INSTALL,
    price: 0,
    mutuallyexclusive: '',
    priceexclvat: 0,
    selected: false,
    promos: [],
});
export const salesOfferProductComfortInstallTypeFactory = Factory.Sync.makeFactory({
    description: InstallTypeEnum.COMFORT_INSTALL,
    price: 85,
    mutuallyexclusive: '',
    priceexclvat: 70.25,
    selected: false,
    promos: [],
});
export const salesOfferProductSelfInstallTypeFactory = Factory.Sync.makeFactory({
    description: InstallTypeEnum.SELF_INSTALL,
    price: 0,
    mutuallyexclusive: '',
    priceexclvat: 0,
    selected: false,
    promos: [],
});
export const salesOfferCostFactory = Factory.Sync.makeFactory({
    name: 'cable-installation',
    price: 50,
    priceexclvat: 45,
    promotions: [],
    recurring: 0,
});
export const salesOfferProductFactory = Factory.Sync.makeFactory({
    omapiid: '87',
    correlationid: 'id',
    specurl: 'url/123',
    description: 'description',
    price: 100,
    priceexclvat: 89,
    options: [salesOfferProductOptionFactory.build()],
    optinproducts: [salesOfferProductOptinFactory.build()],
    productInfo: {},
    promos: [],
    installtypes: [salesOfferProductComfortInstallTypeFactory.build(), salesOfferProductSelfInstallTypeFactory.build()],
    costs: [salesOfferCostFactory.build()],
    streamingservices: [],
});
export const salesOfferStandaloneOptionsFactory = Factory.Sync.makeFactory({
    omapiid: '100',
    correlationid: 'id',
    specurl: 'url/100',
    description: 'description',
    price: 100,
    priceexclvat: 89,
    options: [],
    optinproducts: [salesOfferProductOptinFactory.build()],
    productInfo: {},
    promos: [salesOfferPromoFactory.build()],
    installtypes: [salesOfferProductComfortInstallTypeFactory.build(), salesOfferProductSelfInstallTypeFactory.build()],
    costs: [salesOfferCostFactory.build()],
    streamingservices: [],
});
export const salesOfferTestFactory = Factory.Sync.makeFactory({
    products: [salesOfferProductFactory.build()],
    setup: SalesOfferSetupModelFactory.build(),
    standaloneoptions: [],
});
export const salesOfferTestStandaloneOptionsFactory = Factory.Sync.makeFactory({
    products: [],
    setup: SalesOfferSetupModelFactory.build(),
    standaloneoptions: [salesOfferStandaloneOptionsFactory.build()],
});
export const salesOfferError = { error: { type: 'error' } };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMtb2ZmZXIudGVzdGZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZGVscy9yZXNwb25zZS9zYWxlcy1vZmZlci50ZXN0ZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksQ0FBQztBQVd0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHcEUsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQXdCO0lBQzFGLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLE9BQU8sRUFBRSxZQUFZO0NBQ3RCLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFrQjtJQUM5RSxTQUFTLEVBQUUsR0FBRztJQUNkLFFBQVEsRUFBRSxDQUFDO0lBQ1gsT0FBTyxFQUFFLFVBQVU7SUFDbkIsSUFBSSxFQUFFLFdBQVc7SUFDakIsTUFBTSxFQUFFLDRCQUE0QixDQUFDLEtBQUssRUFBRTtJQUM1QyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNoQixHQUFHLEVBQUUsTUFBTTtJQUNYLElBQUksRUFBRSxFQUFFO0lBQ1IsZ0JBQWdCLEVBQUUsU0FBUztDQUM1QixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSw4QkFBOEIsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBMEI7SUFDOUYsT0FBTyxFQUFFLFNBQVM7SUFDbEIsT0FBTyxFQUFFLEtBQUs7SUFDZCxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLHFCQUFxQixFQUFFLEVBQUU7SUFDekIsUUFBUSxFQUFFLElBQUk7SUFDZCxXQUFXLEVBQUUsYUFBYTtJQUMxQixLQUFLLEVBQUUsRUFBRTtJQUNULFlB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QUFDO0lBQ3RDLGlCQUFpQixFQUFFLEVBQUU7Q0FDdEIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQWE7SUFDeEUsUUFBUSxFQUFFLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUMsS0FBSyxFQUFFLDJCQUEyQixDQUFDLEtBQUssRUFBRTtJQUMxQyxpQkFBaUIsRUFBRSxFQUFFO0NBQ3RCLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLHNDQUFzQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFhO0lBQ3pGLFFBQVEsRUFBRSxFQUFFO0lBQ1osS0FBSyxFQUFFLDJCQUEyQixDQUFDLEtBQUssRUFBRTtJQUMxQyxpQkFBaUIsRUFBRSxDQUFDLGtDQUFrQyxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQ2hFLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRmFjdG9yeSBmcm9tICdmYWN0b3J5LnRzJztcbmltcG9ydCB7IE9tYXBpUHJvZHVjdCB9IGZyb20gJ0B0ZWxlbmV0L25nLWxpYi1vbWFwaSc7XG5pbXBvcnQgeyBTYWxlc09mZmVyUHJvbW9QZXJpb2QgfSBmcm9tICcuL3NhbGVzLW9mZmVyLXByb21vLXBlcmlvZC5tb2RlbCc7XG5pbXBvcnQgeyBTYWxlc09mZmVyUHJvbW8gfSBmcm9tICcuL3NhbGVzLW9mZmVyLXByb21vLm1vZGVsJztcbmltcG9ydCB7IFNhbGVzT2ZmZXJQcm9kdWN0T3B0aW9uIH0gZnJvbSAnLi9zYWxlcy1vZmZlci1wcm9kdWN0LW9wdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBTYWxlc09mZmVyUHJvZHVjdE9wdGluIH0gZnJvbSAnLi9zYWxlcy1vZmZlci1wcm9kdWN0LW9wdGluLm1vZGVsJztcbmltcG9ydCB7IFNhbGVzT2ZmZXJTZXR1cE1vZGVsIH0gZnJvbSAnLi9zYWxlcy1vZmZlci1zZXR1cC5tb2RlbCc7XG5pbXBvcnQgeyBTYWxlc09mZmVyUHJvZHVjdEluc3RhbGxUeXBlIH0gZnJvbSAnLi9zYWxlcy1vZmZlci1wcm9kdWN0LWluc3RhbGwtdHlwZSc7XG5pbXBvcnQgeyBTYWxlc09mZmVyQ29zdCB9IGZyb20gJy4uL3NhbGVzT2ZmZXJDb3N0JztcbmltcG9ydCB7IFNhbGVzT2ZmZXJQcm9kdWN0IH0gZnJvbSAnLi9zYWxlcy1vZmZlci1wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFNhbGVzT2ZmZXIgfSBmcm9tICcuL3NhbGVzLW9mZmVyLm1vZGVsJztcbmltcG9ydCB7IEluc3RhbGxUeXBlRW51bSB9IGZyb20gJy4uLy4uL2VudW1zL29jYXBpLW1vdmUtb3JkZXIuZW51bSc7XG5pbXBvcnQgeyBTYWxlc09mZmVyUHJvZHVjdFN0cmVhbWluZ1NlcnZpY2UgfSBmcm9tICcuL3NhbGVzLW9mZmVyLXByb2R1Y3Qtc3RyZWFtaW5nLXNlcnZpY2UubW9kZWwnO1xuXG5leHBvcnQgY29uc3Qgc2FsZXNPZmZlclByb21vUGVyaW9kRmFjdG9yeSA9IEZhY3RvcnkuU3luYy5tYWtlRmFjdG9yeTxTYWxlc09mZmVyUHJvbW9QZXJpb2Q+KHtcbiAgc3RhcnREYXRlOiAnMTIvMDEvMjAyMCcsXG4gIGVuZERhdGU6ICcxMi8wMy8yMDIwJyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2FsZXNPZmZlclByb21vRmFjdG9yeSA9IEZhY3RvcnkuU3luYy5tYWtlRmFjdG9yeTxTYWxlc09mZmVyUHJvbW8+KHtcbiAgYmFja2VuZGlkOiAxMjMsXG4gIGR1cmF0aW9uOiAzLFxuICBsZWdhbGlkOiAnbGVnYWwtaWQnLFxuICBuYW1lOiAncHJvbW8tb25lJyxcbiAgcGVyaW9kOiBzYWxlc09mZmVyUHJvbW9QZXJpb2RGYWN0b3J5LmJ1aWxkKCksXG4gIHByaWNlOiAtNSxcbiAgcHJpY2VleGNsdmF0OiAtMyxcbiAgcHVrOiAnMTIzNCcsXG4gIHRhZ3M6IFtdLFxuICBsZWdhbEluZm9ybWF0aW9uOiB1bmRlZmluZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNhbGVzT2ZmZXJQcm9kdWN0T3B0aW9uRmFjdG9yeSA9IEZhY3RvcnkuU3luYy5tYWtlRmFjdG9yeTxTYWxlc09mZmVyUHJvZHVjdE9wdGlvbj4oe1xuICBzcGVjdXJsOiAndXJsLzEwMCcsXG4gIG9tYXBpaWQ6ICcxMDAnLFxuICBtdXR1YWxseWV4Y2x1c2l2ZTogJ25vbmUnLFxuICBtdXR1YWxseWV4Y2x1c2l2ZWxpc3Q6IFtdLFxuICBzZWxlY3RlZDogdHJ1ZSxcbiAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXG4gIHByaWNlOiAyMCxcbiAgcHJpY2VleGNsdmF0OiAxOCxcbiAgb3JpZ2luYWxwcmljZTogMTUsXG4gIHByb2R1Y3RJbmZvOiB7fSBhcyBPbWFwaVByb2R1Y3QsXG4gIHByb21vczogW3NhbGVzT2ZmZXJQcm9tb0ZhY3RvcnkuYnVpbGQoKV0sXG59KTtcbmV4cG9ydCBjb25zdCBzYWxlc09mZmVyUHJvZHVjdFN0cmVhbWluZ1NlcnZpY2VGYWN0b3J5ID0gRmFjdG9yeS5TeW5jLm1ha2VGYWN0b3J5PFNhbGVzT2ZmZXJQcm9kdWN0U3RyZWFtaW5nU2VydmljZT4oe1xuICBvcHRpb25zOiBbc2FsZXNPZmZlclByb2R1Y3RPcHRpb25GYWN0b3J5LmJ1aWxkKCldLFxuICBzcGVjdXJsOiAndXJsLzEwMCcsXG4gIG9tYXBpaWQ6ICcxMDAnLFxuICBtdXR1YWxseWV4Y2x1c2l2ZTogJ25vbmUnLFxuICBtdXR1YWxseWV4Y2x1c2l2ZWxpc3Q6IFtdLFxuICBzZWxlY3RlZDogdHJ1ZSxcbiAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXG4gIHByaWNlOiAyMCxcbiAgcHJpY2VleGNsdmF0OiAxOCxcbiAgb3JpZ2luYWxwcmljZTogMTUsXG4gIHByb2R1Y3RJbmZvOiB7fSBhcyBPbWFwaVByb2R1Y3QsXG4gIHByb21vczogW3NhbGVzT2ZmZXJQcm9tb0ZhY3RvcnkuYnVpbGQoKV0sXG59KTtcbmV4cG9ydCBjb25zdCBzYWxlc09mZmVyUHJvZHVjdE9wdGluRmFjdG9yeSA9IEZhY3RvcnkuU3luYy5tYWtlRmFjdG9yeTxTYWxlc09mZmVyUHJvZHVjdE9wdGluPih7XG4gIHNwZWN1cmw6ICd1cmwvMTAwJyxcbiAgb21hcGlpZDogJzEwMCcsXG4gIG11dHVhbGx5ZXhjbHVzaXZlOiAnbm9uZScsXG4gIHNlbGVjdGVkOiB0cnVlLFxuICBkZXNjcmlwdGlvbjogJ2Rlc2NyaXB0aW9uJyxcbiAgcHJpY2U6IDAsXG4gIHByaWNlZXhjbHZhdDogMCxcbiAgb3JpZ2luYWxwcmljZTogMTUsXG4gIHByb2R1Y3RJbmZvOiB7XG4gICAgaGFzU2VydmljZVR5cGUoXzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSBhcyBPbWFwaVByb2R1Y3QsXG4gIHByb21vczogW10sXG59KTtcbmV4cG9ydCBjb25zdCBTYWxlc09mZmVyU2V0dXBNb2RlbEZhY3RvcnkgPSBGYWN0b3J5LlN5bmMubWFrZUZhY3Rvcnk8U2FsZXNPZmZlclNldHVwTW9kZWw+KHtcbiAgZWFzeXN3aXRjaGVsaWdpYmxlOiB0cnVlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzYWxlc09mZmVyUHJvZHVjdFByZUluc3RhbGxUeXBlRmFjdG9yeSA9IEZhY3RvcnkuU3luYy5tYWtlRmFjdG9yeTxTYWxlc09mZmVyUHJvZHVjdEluc3RhbGxUeXBlPih7XG4gIGRlc2NyaXB0aW9uOiBJbnN0YWxsVHlwZUVudW0uUFJFX0lOU1RBTEwsXG4gIHByaWNlOiAwLFxuICBtdXR1YWxseWV4Y2x1c2l2ZTogJycsXG4gIHByaWNlZXhjbHZhdDogMCxcbiAgc2VsZWN0ZWQ6IGZhbHNlLFxuICBwcm9tb3M6IFtdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzYWxlc09mZmVyUHJvZHVjdENvbWZvcnRJbnN0YWxsVHlwZUZhY3RvcnkgPSBGYWN0b3J5LlN5bmMubWFrZUZhY3Rvcnk8U2FsZXNPZmZlclByb2R1Y3RJbnN0YWxsVHlwZT4oe1xuICBkZXNjcmlwdGlvbjogSW5zdGFsbFR5cGVFbnVtLkNPTUZPUlRfSU5TVEFMTCxcbiAgcHJpY2U6IDg1LFxuICBtdXR1YWxseWV4Y2x1c2l2ZTogJycsXG4gIHByaWNlZXhjbHZhdDogNzAuMjUsXG4gIHNlbGVjdGVkOiBmYWxzZSxcbiAgcHJvbW9zOiBbXSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2FsZXNPZmZlclByb2R1Y3RTZWxmSW5zdGFsbFR5cGVGYWN0b3J5ID0gRmFjdG9yeS5TeW5jLm1ha2VGYWN0b3J5PFNhbGVzT2ZmZXJQcm9kdWN0SW5zdGFsbFR5cGU+KHtcbiAgZGVzY3JpcHRpb246IEluc3RhbGxUeXBlRW51bS5TRUxGX0lOU1RBTEwsXG4gIHByaWNlOiAwLFxuICBtdXR1YWxseWV4Y2x1c2l2ZTogJycsXG4gIHByaWNlZXhjbHZhdDogMCxcbiAgc2VsZWN0ZWQ6IGZhbHNlLFxuICBwcm9tb3M6IFtdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzYWxlc09mZmVyQ29zdEZhY3RvcnkgPSBGYWN0b3J5LlN5bmMubWFrZUZhY3Rvcnk8U2FsZXNPZmZlckNvc3Q+KHtcbiAgbmFtZTogJ2NhYmxlLWluc3RhbGxhdGlvbicsXG4gIHByaWNlOiA1MCxcbiAgcHJpY2VleGNsdmF0OiA0NSxcbiAgcHJvbW90aW9uczogW10sXG4gIHJlY3VycmluZzogMCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2FsZXNPZmZlclByb2R1Y3RGYWN0b3J5ID0gRmFjdG9yeS5TeW5jLm1ha2VGYWN0b3J5PFNhbGVzT2ZmZXJQcm9kdWN0Pih7XG4gIG9tYXBpaWQ6ICc4NycsXG4gIGNvcnJlbGF0aW9uaWQ6ICdpZCcsXG4gIHNwZWN1cmw6ICd1cmwvMTIzJyxcbiAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXG4gIHByaWNlOiAxMDAsXG4gIHByaWNlZXhjbHZhdDogODksXG4gIG9wdGlvbnM6IFtzYWxlc09mZmVyUHJvZHVjdE9wdGlvbkZhY3RvcnkuYnVpbGQoKV0sXG4gIG9wdGlucHJvZHVjdHM6IFtzYWxlc09mZmVyUHJvZHVjdE9wdGluRmFjdG9yeS5idWlsZCgpXSxcbiAgcHJvZHVjdEluZm86IHt9IGFzIE9tYXBpUHJvZHVjdCxcbiAgcHJvbW9zOiBbXSxcbiAgaW5zdGFsbHR5cGVzOiBbc2FsZXNPZmZlclByb2R1Y3RDb21mb3J0SW5zdGFsbFR5cGVGYWN0b3J5LmJ1aWxkKCksIHNhbGVzT2ZmZXJQcm9kdWN0U2VsZkluc3RhbGxUeXBlRmFjdG9yeS5idWlsZCgpXSxcbiAgY29zdHM6IFtzYWxlc09mZmVyQ29zdEZhY3RvcnkuYnVpbGQoKV0sXG4gIHN0cmVhbWluZ3NlcnZpY2VzOiBbXSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2FsZXNPZmZlclN0YW5kYWxvbmVPcHRpb25zRmFjdG9yeSA9IEZhY3RvcnkuU3luYy5tYWtlRmFjdG9yeTxTYWxlc09mZmVyUHJvZHVjdD4oe1xuICBvbWFwaWlkOiAnMTAwJyxcbiAgY29ycmVsYXRpb25pZDogJ2lkJyxcbiAgc3BlY3VybDogJ3VybC8xMDAnLFxuICBkZXNjcmlwdGlvbjogJ2Rlc2NyaXB0aW9uJyxcbiAgcHJpY2U6IDEwMCxcbiAgcHJpY2VleGNsdmF0OiA4OSxcbiAgb3B0aW9uczogW10sXG4gIG9wdGlucHJvZHVjdHM6IFtzYWxlc09mZmVyUHJvZHVjdE9wdGluRmFjdG9yeS5idWlsZCgpXSxcbiAgcHJvZHVjdEluZm86IHt9IGFzIE9tYXBpUHJvZHVjdCxcbiAgcHJvbW9zOiBbc2FsZXNPZmZlclByb21vRmFjdG9yeS5idWlsZCgpXSxcbiAgaW5zdGFsbHR5cGVzOiBbc2FsZXNPZmZlclByb2R1Y3RDb21mb3J0SW5zdGFsbFR5cGVGYWN0b3J5LmJ1aWxkKCksIHNhbGVzT2ZmZXJQcm9kdWN0U2VsZkluc3RhbGxUeXBlRmFjdG9yeS5idWlsZCgpXSxcbiAgY29zdHM6IFtzYWxlc09mZmVyQ29zdEZhY3RvcnkuYnVpbGQoKV0sXG4gIHN0cmVhbWluZ3NlcnZpY2VzOiBbXSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2FsZXNPZmZlclRlc3RGYWN0b3J5ID0gRmFjdG9yeS5TeW5jLm1ha2VGYWN0b3J5PFNhbGVzT2ZmZXI+KHtcbiAgcHJvZHVjdHM6IFtzYWxlc09mZmVyUHJvZHVjdEZhY3RvcnkuYnVpbGQoKV0sXG4gIHNldHVwOiBTYWxlc09mZmVyU2V0dXBNb2RlbEZhY3RvcnkuYnVpbGQoKSxcbiAgc3RhbmRhbG9uZW9wdGlvbnM6IFtdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzYWxlc09mZmVyVGVzdFN0YW5kYWxvbmVPcHRpb25zRmFjdG9yeSA9IEZhY3RvcnkuU3luYy5tYWtlRmFjdG9yeTxTYWxlc09mZmVyPih7XG4gIHByb2R1Y3RzOiBbXSxcbiAgc2V0dXA6IFNhbGVzT2ZmZXJTZXR1cE1vZGVsRmFjdG9yeS5idWlsZCgpLFxuICBzdGFuZGFsb25lb3B0aW9uczogW3NhbGVzT2ZmZXJTdGFuZGFsb25lT3B0aW9uc0ZhY3RvcnkuYnVpbGQoKV0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHNhbGVzT2ZmZXJFcnJvciA9IHsgZXJyb3I6IHsgdHlwZTogJ2Vycm9yJyB9IH07XG4iXX0=