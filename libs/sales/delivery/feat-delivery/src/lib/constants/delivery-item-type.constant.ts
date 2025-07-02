import { DeliveryItemType } from '@sales/delivery/data-access';

export const HardwareItemType: DeliveryItemType = {
  typeKey: 'accessories',
  iconType: 'accessories',
  labelText: 'accessories',
  types: [
    'cable',
    'cable hub',
    'charger',
    'cover',
    'watch strap',
    'headphone',
    'holder',
    'powerbank',
    'screenprotector',
    'accessories',
  ],
};

export const SmartPhoneItemType: DeliveryItemType = {
  typeKey: 'smartphone',
  iconType: 'mobile',
  labelText: 'smartphone',
  types: ['smartphones', 'handset'],
};

export const SmartWatchItemType: DeliveryItemType = {
  typeKey: 'smartwatch',
  iconType: 'smartwatch',
  labelText: 'smartwatch',
  types: ['smartwatch'],
};

export const MultimediaItemType: DeliveryItemType = {
  typeKey: 'multimedia',
  iconType: 'mobile',
  labelText: 'multimedia',
  types: ['ergonomics', 'keyboard', 'webcam', 'lightning', 'mouse'],
};

export const HomeOfficeItemType: DeliveryItemType = {
  typeKey: 'homeoffice',
  iconType: 'homeoffice',
  labelText: 'home-office',
  types: ['laptop', 'laptops', 'monitor', 'tablet', 'tablets', 'fixes phone', 'dect'],
};

export const TvAudioItemType: DeliveryItemType = {
  typeKey: 'tv-audio',
  iconType: 'tv-audio',
  labelText: 'tv-and-audio',
  types: ['game console', 'radio', 'speaker', 'tv', 'streaming_device'],
};

export const SmartHomeItemType: DeliveryItemType = {
  typeKey: 'smarthome',
  iconType: 'smart-home',
  labelText: 'smart-home',
  types: ['doorbell', 'security cam', 'smart_lock'],
};

export const GenericItemType: DeliveryItemType = {
  typeKey: 'other',
  iconType: 'mobile',
  labelText: 'other',
  types: [],
};

export const deliveryItemTypes: DeliveryItemType[] = [
  HardwareItemType,
  SmartPhoneItemType,
  SmartWatchItemType,
  MultimediaItemType,
  HomeOfficeItemType,
  TvAudioItemType,
  SmartHomeItemType,
  GenericItemType,
];
