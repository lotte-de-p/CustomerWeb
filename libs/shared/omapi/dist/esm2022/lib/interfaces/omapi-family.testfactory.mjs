import * as Factory from 'factory.ts';
import { OmapiProductTestfactory } from '../models/omapi-product.testfactory';
export const omapiMobileDataFactory = Factory.Sync.makeFactory({
    omapiId: '456',
    productInfo: OmapiProductTestfactory.build(),
    key: 'limited',
});
export const omapiProductInfoFactory = Factory.Sync.makeFactory({
    omapiId: '456',
    productInfo: OmapiProductTestfactory.build(),
    mobileData: [],
});
export const omapiFamilyOptinFactory = Factory.Sync.makeFactory({
    key: 'fixed_telephony',
    omapiId: '37785',
    mobileId: '36860',
});
export const omapiFamilyOptionFactory = Factory.Sync.makeFactory({
    type: 'mobile',
    key: 'international_calling',
    omapiId: 'BERU0001',
    productInfo: OmapiProductTestfactory.build(),
    parents: [],
});
export const omapiFamilyTierFactory = Factory.Sync.makeFactory({
    key: 'name',
    omapiId: '123',
    productInfo: OmapiProductTestfactory.build(),
    mobile: [omapiProductInfoFactory.build({ omapiId: '567' }), omapiProductInfoFactory.build({ omapiId: '568' })],
    entertainment: [omapiProductInfoFactory.build({ omapiId: '789' }), omapiProductInfoFactory.build({ omapiId: '780' })],
    fixedTelephony: [omapiProductInfoFactory.build({ omapiId: '121' })],
    optins: [omapiFamilyOptinFactory.build()],
    options: [omapiFamilyOptionFactory.build()],
});
export const omapiFamilyFactory = Factory.Sync.makeFactory({
    tiers: [omapiFamilyTierFactory.build()],
});
const KLIK_2_LIM = 'm-klik-2-lim';
const ENTERTAINMENT_1 = 'entertainment-id-1';
export const omapiKlikFamily = () => {
    return omapiFamilyFactory.build({
        tiers: [
            omapiFamilyTierFactory.build({
                key: 'klik',
                omapiId: KLIK_2_LIM,
                entertainment: [omapiProductInfoFactory.build({ omapiId: ENTERTAINMENT_1 })],
                mobile: [
                    omapiProductInfoFactory.build({
                        omapiId: 'm-klik-1-lim',
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
                        mobileData: [
                            { omapiId: 'm-klik-1-lim', key: 'limited' },
                            { omapiId: 'm-klik-1-unl', key: 'unlimited' },
                        ],
                    }),
                    omapiProductInfoFactory.build({
                        omapiId: KLIK_2_LIM,
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
                        mobileData: [
                            { omapiId: KLIK_2_LIM, key: 'limited' },
                            { omapiId: 'm-klik-2-unl', key: 'unlimited' },
                        ],
                    }),
                ],
                optins: [],
            }),
        ],
    });
};
const THRILL_1 = 'm-thrill-1';
const THRILL_2 = 'm-thrill-2';
const THRILL_3 = 'm-thrill-3';
export const omapiConnectFiveFamily = () => {
    return omapiFamilyFactory.build({
        tiers: [
            omapiFamilyTierFactory.build({
                key: 'chill',
                omapiId: 'm-chill-1',
                entertainment: [
                    omapiProductInfoFactory.build({ omapiId: ENTERTAINMENT_1 }),
                    omapiProductInfoFactory.build({ omapiId: 'entertainment-id-2' }),
                ],
                mobile: [
                    omapiProductInfoFactory.build({
                        omapiId: 'm-chill-1',
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
                    }),
                    omapiProductInfoFactory.build({
                        omapiId: 'm-chill-2',
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 2 } }),
                    }),
                    omapiProductInfoFactory.build({
                        omapiId: 'm-chill-3',
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 3 } }),
                    }),
                ],
                optins: [
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-chill-1-ft',
                        mobileId: 'm-chill-1',
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-chill-2-ft',
                        mobileId: 'm-chill-2',
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-chill-3-ft',
                        mobileId: 'm-chill-3',
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-chill-1-ds',
                        mobileId: 'm-chill-1',
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-chill-2-ds',
                        mobileId: 'm-chill-2',
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-chill-3-ds',
                        mobileId: 'm-chill-3',
                    }),
                ],
            }),
            omapiFamilyTierFactory.build({
                key: 'thrill',
                omapiId: THRILL_1,
                entertainment: [
                    omapiProductInfoFactory.build({ omapiId: ENTERTAINMENT_1 }),
                    omapiProductInfoFactory.build({ omapiId: 'entertainment-id-2' }),
                ],
                mobile: [
                    omapiProductInfoFactory.build({
                        omapiId: THRILL_1,
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 1 } }),
                    }),
                    omapiProductInfoFactory.build({
                        omapiId: THRILL_2,
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 2 } }),
                    }),
                    omapiProductInfoFactory.build({
                        omapiId: THRILL_3,
                        productInfo: OmapiProductTestfactory.build({ characteristics: { maxMobileLines: 3 } }),
                    }),
                ],
                optins: [
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-thrill-1-ft',
                        mobileId: THRILL_1,
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-thrill-2-ft',
                        mobileId: THRILL_2,
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'fixed_telephony',
                        omapiId: 'o-thrill-3-ft',
                        mobileId: THRILL_3,
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-thrill-1-ds',
                        mobileId: THRILL_1,
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-thrill-2-ds',
                        mobileId: THRILL_2,
                    }),
                    omapiFamilyOptinFactory.build({
                        key: 'data_sim',
                        omapiId: 'o-thrill-3-ds',
                        mobileId: THRILL_3,
                    }),
                ],
            }),
        ],
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib21hcGktZmFtaWx5LnRlc3RmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9pbnRlcmZhY2VzL29tYXBpLWZhbWlseS50ZXN0ZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksQ0FBQztBQVN0QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUU5RSxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBa0I7SUFDOUUsT0FBTyxFQUFFLEtBQUs7SUFDZCxXQUFXLEVBQUUsdUJBQXVCLENBQUMsS0FBSyxFQUFFO0lBQzVDLEdBQUcsRUFBRSxTQUFTO0NBQ2YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQW1CO0lBQ2hGLE9BQU8sRUFBRSxLQUFLO0lBQ2QsV0FBVyxFQUFFLHVCQUF1QixDQUFDLEtBQUssRUFBRTtJQUM1QyxVQUFVLEVBQUUsRUFBRTtDQUNmLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFtQjtJQUNoRixHQUFHLEVBQUUsaUJBQWlCO0lBQ3RCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFFBQVEsRUFBRSxPQUFPO0NBQ2xCLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFvQjtJQUNsRixJQUFJLEVBQUUsUUFBUTtJQUNkLEdBQUcsRUFBRSx1QkFBdUI7SUFDNUIsT0FBTyxFQUFFLFVBQVU7SUFDbkIsV0FBVyxFQUFFLHVCQUF1QixDQUFDLEtBQUssRUFBRTtJQUM1QyxPQUFPLEVBQUUsRUFBRTtDQUNaLENBQUMsQ0FB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QUFFLFVBQVU7d0JBQ2YsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFFBQVEsRUFBRSxRQUFRO3FCQUNuQixDQUFDO2lCQUNIO2FBQ0YsQ0FBQztTQUNIO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgRmFjdG9yeSBmcm9tICdmYWN0b3J5LnRzJztcbmltcG9ydCB7XG4gIE9tYXBpRmFtaWx5LFxuICBPbWFwaUZhbWlseU9wdGluLFxuICBPbWFwaUZhbWlseU9wdGlvbixcbiAgT21hcGlGYW1pbHlUaWVyLFxuICBPbWFwaU1vYmlsZURhdGEsXG4gIE9tYXBpUHJvZHVjdEluZm8sXG59IGZyb20gJy4vb21hcGktZmFtaWx5LmludGVyZmFjZSc7XG5pbXBvcnQgeyBPbWFwaVByb2R1Y3RUZXN0ZmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy9vbWFwaS1wcm9kdWN0LnRlc3RmYWN0b3J5JztcblxuZXhwb3J0IGNvbnN0IG9tYXBpTW9iaWxlRGF0YUZhY3RvcnkgPSBGYWN0b3J5LlN5bmMubWFrZUZhY3Rvcnk8T21hcGlNb2JpbGVEYXRhPih7XG4gIG9tYXBpSWQ6ICc0NTYnLFxuICBwcm9kdWN0SW5mbzogT21hcGlQcm9kdWN0VGVzdGZhY3RvcnkuYnVpbGQoKSxcbiAga2V5OiAnbGltaXRlZCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IG9tYXBpUHJvZHVjdEluZm9GYWN0b3J5ID0gRmFjdG9yeS5TeW5jLm1ha2VGYWN0b3J5PE9tYXBpUHJvZHVjdEluZm8+KHtcbiAgb21hcGlJZDogJzQ1NicsXG4gIHByb2R1Y3RJbmZvOiBPbWFwaVByb2R1Y3RUZXN0ZmFjdG9yeS5idWlsZCgpLFxuICBtb2JpbGVEYXRhOiBbXSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgb21hcGlGYW1pbHlPcHRpbkZhY3RvcnkgPSBGYWN0b3J5LlN5bmMubWFrZUZhY3Rvcnk8T21hcGlGYW1pbHlPcHRpbj4oe1xuICBrZXk6ICdmaXhlZF90ZWxlcGhvbnknLFxuICBvbWFwaUlkOiAnMzc3ODUnLFxuICBtb2JpbGVJZDogJzM2ODYwJyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgb21hcGlGYW1pbHlPcHRpb25GYWN0b3J5ID0gRmFjdG9yeS5TeW5jLm1ha2VGYWN0b3J5PE9tYXBpRmFtaWx5T3B0aW9uPih7XG4gIHR5cGU6ICdtb2JpbGUnLFxuICBrZXk6ICdpbnRlcm5hdGlvbmFsX2NhbGxpbmcnLFxuICBvbWFwaUlkOiAnQkVSVTAwMDEnLFxuICBwcm9kdWN0SW5mbzogT21hcGlQcm9kdWN0VGVzdGZhY3RvcnkuYnVpbGQoKSxcbiAgcGFyZW50czogW10sXG59KTtcblxuZXhwb3J0IGNvbnN0IG9tYXBpRmFtaWx5VGllckZhY3RvcnkgPSBGYWN0b3J5LlN5bmMubWFrZUZhY3Rvcnk8T21hcGlGYW1pbHlUaWVyPih7XG4gIGtleTogJ25hbWUnLFxuICBvbWFwaUlkOiAnMTIzJyxcbiAgcHJvZHVjdEluZm86IE9tYXBpUHJvZHVjdFRlc3RmYWN0b3J5LmJ1aWxkKCksXG4gIG1vYmlsZTogW29tYXBpUHJvZHVjdEluZm9GYWN0b3J5LmJ1aWxkKHsgb21hcGlJZDogJzU2NycgfSksIG9tYXBpUHJvZHVjdEluZm9GYWN0b3J5LmJ1aWxkKHsgb21hcGlJZDogJzU2OCcgfSldLFxuICBlbnRlcnRhaW5tZW50OiBbb21hcGlQcm9kdWN0SW5mb0ZhY3RvcnkuYnVpbGQoeyBvbWFwaUlkOiAnNzg5JyB9KSwgb21hcGlQcm9kdWN0SW5mb0ZhY3RvcnkuYnVpbGQoeyBvbWFwaUlkOiAnNzgwJyB9KV0sXG4gIGZpeGVkVGVsZXBob255OiBbb21hcGlQcm9kdWN0SW5mb0ZhY3RvcnkuYnVpbGQoeyBvbWFwaUlkOiAnMTIxJyB9KV0sXG4gIG9wdGluczogW29tYXBpRmFtaWx5T3B0aW5GYWN0b3J5LmJ1aWxkKCldLFxuICBvcHRpb25zOiBbb21hcGlGYW1pbHlPcHRpb25GYWN0b3J5LmJ1aWxkKCldLFxufSk7XG5cbmV4cG9ydCBjb25zdCBvbWFwaUZhbWlseUZhY3RvcnkgPSBGYWN0b3J5LlN5bmMubWFrZUZhY3Rvcnk8T21hcGlGYW1pbHk+KHtcbiAgdGllcnM6IFtvbWFwaUZhbWlseVRpZXJGYWN0b3J5LmJ1aWxkKCldLFxufSk7XG5cbmNvbnN0IEtMSUtfMl9MSU0gPSAnbS1rbGlrLTItbGltJztcbmNvbnN0IEVOVEVSVEFJTk1FTlRfMSA9ICdlbnRlcnRhaW5tZW50LWlkLTEnO1xuZXhwb3J0IGNvbnN0IG9tYXBpS2xpa0ZhbWlseSA9ICgpID0+IHtcbiAgcmV0dXJuIG9tYXBpRmFtaWx5RmFjdG9yeS5idWlsZCh7XG4gICAgdGllcnM6IFtcbiAgICAgIG9tYXBpRmFtaWx5VGllckZhY3RvcnkuYnVpbGQoe1xuICAgICAgICBrZXk6ICdrbGlrJyxcbiAgICAgICAgb21hcGlJZDogS0xJS18yX0xJTSxcbiAgICAgICAgZW50ZXJ0YWlubWVudDogW29tYXBpUHJvZHVjdEluZm9GYWN0b3J5LmJ1aWxkKHsgb21hcGlJZDogRU5URVJUQUlOTUVOVF8xIH0pXSxcbiAgICAgICAgbW9iaWxlOiBbXG4gICAgICAgICAgb21hcGlQcm9kdWN0SW5mb0ZhY3RvcnkuYnVpbGQoe1xuICAgICAgICAgICAgb21hcGlJZDogJ20ta2xpay0xLWxpbScsXG4gICAgICAgICAgICBwcm9kdWN0SW5mbzogT21hcGlQcm9kdWN0VGVzdGZhY3RvcnkuYnVpbGQoeyBjaGFyYWN0ZXJpc3RpY3M6IHsgbWF4TW9iaWxlTGluZXM6IDEgfSB9KSxcbiAgICAgICAgICAgIG1vYmlsZURhdGE6IFtcbiAgICAgICAgICAgICAgeyBvbWFwaUlkOiAnbS1rbGlrLTEtbGltJywga2V5OiAnbGltaXRlZCcgfSBhcyBPbWFwaU1vYmlsZURhdGEsXG4gICAgICAgICAgICAgIHsgb21hcGlJZDogJ20ta2xpay0xLXVubCcsIGtleTogJ3VubGltaXRlZCcgfSBhcyBPbWFwaU1vYmlsZURhdGEsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9tYXBpUHJvZHVjdEluZm9GYWN0b3J5LmJ1aWxkKHtcbiAgICAgICAgICAgIG9tYXBpSWQ6IEtMSUtfMl9MSU0sXG4gICAgICAgICAgICBwcm9kdWN0SW5mbzogT21hcGlQcm9kdWN0VGVzdGZhY3RvcnkuYnVpbGQoeyBjaGFyYWN0ZXJpc3RpY3M6IHsgbWF4TW9iaWxlTGluZXM6IDEgfSB9KSxcbiAgICAgICAgICAgIG1vYmlsZURhdGE6IFtcbiAgICAgICAgICAgICAgeyBvbWFwaUlkOiBLTElLXzJfTElNLCBrZXk6ICdsaW1pdGVkJyB9IGFzIE9tYXBpTW9iaWxlRGF0YSxcbiAgICAgICAgICAgICAgeyBvbWFwaUlkOiAnbS1rbGlrLTItdW5sJywga2V5OiAndW5saW1pdGVkJyB9IGFzIE9tYXBpTW9iaWxlRGF0YSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIG9wdGluczogW10sXG4gICAgICB9KSxcbiAgICBdLFxuICB9KTtcbn07XG5cbmNvbnN0IFRIUklMTF8xID0gJ20tdGhyaWxsLTEnO1xuY29uc3QgVEhSSUxMXzIgPSAnbS10aHJpbGwtMic7XG5jb25zdCBUSFJJTExfMyA9ICdtLXRocmlsbC0zJztcbmV4cG9ydCBjb25zdCBvbWFwaUNvbm5lY3RGaXZlRmFtaWx5ID0gKCkgPT4ge1xuICByZXR1cm4gb21hcGlGYW1pbHlGYWN0b3J5LmJ1aWxkKHtcbiAgICB0aWVyczogW1xuICAgICAgb21hcGlGYW1pbHlUaWVyRmFjdG9yeS5idWlsZCh7XG4gICAgICAgIGtleTogJ2NoaWxsJyxcbiAgICAgICAgb21hcGlJZDogJ20tY2hpbGwtMScsXG4gICAgICAgIGVudGVydGFpbm1lbnQ6IFtcbiAgICAgICAgICBvbWFwaVByb2R1Y3RJbmZvRmFjdG9yeS5idWlsZCh7IG9tYXBpSWQ6IEVOVEVSVEFJTk1FTlRfMSB9KSxcbiAgICAgICAgICBvbWFwaVByb2R1Y3RJbmZvRmFjdG9yeS5idWlsZCh7IG9tYXBpSWQ6ICdlbnRlcnRhaW5tZW50LWlkLTInIH0pLFxuICAgICAgICBdLFxuICAgICAgICBtb2JpbGU6IFtcbiAgICAgICAgICBvbWFwaVByb2R1Y3RJbmZvRmFjdG9yeS5idWlsZCh7XG4gICAgICAgICAgICBvbWFwaUlkOiAnbS1jaGlsbC0xJyxcbiAgICAgICAgICAgIHByb2R1Y3RJbmZvOiBPbWFwaVByb2R1Y3RUZXN0ZmFjdG9yeS5idWlsZCh7IGNoYXJhY3RlcmlzdGljczogeyBtYXhNb2JpbGVMaW5lczogMSB9IH0pLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9tYXBpUHJvZHVjdEluZm9GYWN0b3J5LmJ1aWxkKHtcbiAgICAgICAgICAgIG9tYXBpSWQ6ICdtLWNoaWxsLTInLFxuICAgICAgICAgICAgcHJvZHVjdEluZm86IE9tYXBpUHJvZHVjdFRlc3RmYWN0b3J5LmJ1aWxkKHsgY2hhcmFjdGVyaXN0aWNzOiB7IG1heE1vYmlsZUxpbmVzOiAyIH0gfSksXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb21hcGlQcm9kdWN0SW5mb0ZhY3RvcnkuYnVpbGQoe1xuICAgICAgICAgICAgb21hcGlJZDogJ20tY2hpbGwtMycsXG4gICAgICAgICAgICBwcm9kdWN0SW5mbzogT21hcGlQcm9kdWN0VGVzdGZhY3RvcnkuYnVpbGQoeyBjaGFyYWN0ZXJpc3RpY3M6IHsgbWF4TW9iaWxlTGluZXM6IDMgfSB9KSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgb3B0aW5zOiBbXG4gICAgICAgICAgb21hcGlGYW1pbHlPcHRpbkZhY3RvcnkuYnVpbGQoe1xuICAgICAgICAgICAga2V5OiAnZml4ZWRfdGVsZXBob255JyxcbiAgICAgICAgICAgIG9tYXBpSWQ6ICdvLWNoaWxsLTEtZnQnLFxuICAgICAgICAgICAgbW9iaWxlSWQ6ICdtLWNoaWxsLTEnLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9tYXBpRmFtaWx5T3B0aW5GYWN0b3J5LmJ1aWxkKHtcbiAgICAgICAgICAgIGtleTogJ2ZpeGVkX3RlbGVwaG9ueScsXG4gICAgICAgICAgICBvbWFwaUlkOiAnby1jaGlsbC0yLWZ0JyxcbiAgICAgICAgICAgIG1vYmlsZUlkOiAnbS1jaGlsbC0yJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvbWFwaUZhbWlseU9wdGluRmFjdG9yeS5idWlsZCh7XG4gICAgICAgICAgICBrZXk6ICdmaXhlZF90ZWxlcGhvbnknLFxuICAgICAgICAgICAgb21hcGlJZDogJ28tY2hpbGwtMy1mdCcsXG4gICAgICAgICAgICBtb2JpbGVJZDogJ20tY2hpbGwtMycsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb21hcGlGYW1pbHlPcHRpbkZhY3RvcnkuYnVpbGQoe1xuICAgICAgICAgICAga2V5OiAnZGF0YV9zaW0nLFxuICAgICAgICAgICAgb21hcGlJZDogJ28tY2hpbGwtMS1kcycsXG4gICAgICAgICAgICBtb2JpbGVJZDogJ20tY2hpbGwtMScsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb21hcGlGYW1pbHlPcHRpbkZhY3RvcnkuYnVpbGQoe1xuICAgICAgICAgICAga2V5OiAnZGF0YV9zaW0nLFxuICAgICAgICAgICAgb21hcGlJZDogJ28tY2hpbGwtMi1kcycsXG4gICAgICAgICAgICBtb2JpbGVJZDogJ20tY2hpbGwtMicsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb21hcGlGYW1pbHlPcHRpbkZhY3RvcnkuYnVpbGQoe1xuICAgICAgICAgICAga2V5OiAnZGF0YV9zaW0nLFxuICAgICAgICAgICAgb21hcGlJZDogJ28tY2hpbGwtMy1kcycsXG4gICAgICAgICAgICBtb2JpbGVJZDogJ20tY2hpbGwtMycsXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIG9tYXBpRmFtaWx5VGllckZhY3RvcnkuYnVpbGQoe1xuICAgICAgICBrZXk6ICd0aHJpbGwnLFxuICAgICAgICBvbWFwaUlkOiBUSFJJTExfMSxcbiAgICAgICAgZW50ZXJ0YWlubWVudDogW1xuICAgICAgICAgIG9tYXBpUHJvZHVjdEluZm9GYWN0b3J5LmJ1aWxkKHsgb21hcGlJZDogRU5URVJUQUlOTUVOVF8xIH0pLFxuICAgICAgICAgIG9tYXBpUHJvZHVjdEluZm9GYWN0b3J5LmJ1aWxkKHsgb21hcGlJZDogJ2VudGVydGFpbm1lbnQtaWQtMicgfSksXG4gICAgICAgIF0sXG4gICAgICAgIG1vYmlsZTogW1xuICAgICAgICAgIG9tYXBpUHJvZHVjdEluZm9GYWN0b3J5LmJ1aWxkKHtcbiAgICAgICAgICAgIG9tYXBpSWQ6IFRIUklMTF8xLFxuICAgICAgICAgICAgcHJvZHVjdEluZm86IE9tYXBpUHJvZHVjdFRlc3RmYWN0b3J5LmJ1aWxkKHsgY2hhcmFjdGVyaXN0aWNzOiB7IG1heE1vYmlsZUxpbmVzOiAxIH0gfSksXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb21hcGlQcm9kdWN0SW5mb0ZhY3RvcnkuYnVpbGQoe1xuICAgICAgICAgICAgb21hcGlJZDogVEhSSUxMXzIsXG4gICAgICAgICAgICBwcm9kdWN0SW5mbzogT21hcGlQcm9kdWN0VGVzdGZhY3RvcnkuYnVpbGQoeyBjaGFyYWN0ZXJpc3RpY3M6IHsgbWF4TW9iaWxlTGluZXM6IDIgfSB9KSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvbWFwaVByb2R1Y3RJbmZvRmFjdG9yeS5idWlsZCh7XG4gICAgICAgICAgICBvbWFwaUlkOiBUSFJJTExfMyxcbiAgICAgICAgICAgIHByb2R1Y3RJbmZvOiBPbWFwaVByb2R1Y3RUZXN0ZmFjdG9yeS5idWlsZCh7IGNoYXJhY3RlcmlzdGljczogeyBtYXhNb2JpbGVMaW5lczogMyB9IH0pLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICBvcHRpbnM6IFtcbiAgICAgICAgICBvbWFwaUZhbWlseU9wdGluRmFjdG9yeS5idWlsZCh7XG4gICAgICAgICAgICBrZXk6ICdmaXhlZF90ZWxlcGhvbnknLFxuICAgICAgICAgICAgb21hcGlJZDogJ28tdGhyaWxsLTEtZnQnLFxuICAgICAgICAgICAgbW9iaWxlSWQ6IFRIUklMTF8xLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9tYXBpRmFtaWx5T3B0aW5GYWN0b3J5LmJ1aWxkKHtcbiAgICAgICAgICAgIGtleTogJ2ZpeGVkX3RlbGVwaG9ueScsXG4gICAgICAgICAgICBvbWFwaUlkOiAnby10aHJpbGwtMi1mdCcsXG4gICAgICAgICAgICBtb2JpbGVJZDogVEhSSUxMXzIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb21hcGlGYW1pbHlPcHRpbkZhY3RvcnkuYnVpbGQoe1xuICAgICAgICAgICAga2V5OiAnZml4ZWRfdGVsZXBob255JyxcbiAgICAgICAgICAgIG9tYXBpSWQ6ICdvLXRocmlsbC0zLWZ0JyxcbiAgICAgICAgICAgIG1vYmlsZUlkOiBUSFJJTExfMyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvbWFwaUZhbWlseU9wdGluRmFjdG9yeS5idWlsZCh7XG4gICAgICAgICAgICBrZXk6ICdkYXRhX3NpbScsXG4gICAgICAgICAgICBvbWFwaUlkOiAnby10aHJpbGwtMS1kcycsXG4gICAgICAgICAgICBtb2JpbGVJZDogVEhSSUxMXzEsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgb21hcGlGYW1pbHlPcHRpbkZhY3RvcnkuYnVpbGQoe1xuICAgICAgICAgICAga2V5OiAnZGF0YV9zaW0nLFxuICAgICAgICAgICAgb21hcGlJZDogJ28tdGhyaWxsLTItZHMnLFxuICAgICAgICAgICAgbW9iaWxlSWQ6IFRIUklMTF8yLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9tYXBpRmFtaWx5T3B0aW5GYWN0b3J5LmJ1aWxkKHtcbiAgICAgICAgICAgIGtleTogJ2RhdGFfc2ltJyxcbiAgICAgICAgICAgIG9tYXBpSWQ6ICdvLXRocmlsbC0zLWRzJyxcbiAgICAgICAgICAgIG1vYmlsZUlkOiBUSFJJTExfMyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0pO1xufTtcbiJdfQ==