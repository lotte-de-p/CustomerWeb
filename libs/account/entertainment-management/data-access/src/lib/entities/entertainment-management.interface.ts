export interface EntertainmentManagement {
  activeOptions?: EntertainmentOption[];
  availableContentPacks?: EntertainmentOption[];
  availableStreamingOptions?: EntertainmentOption[];
}

export interface EntertainmentOption {
  id?: string;
  type?: string;
  logo: string;
  weight: number;
  name: EntertainmentOptionName;
  description?: EntertainmentOptionName;
  price?: number;
  priceAsOf?: number;
  tiers?: EntertainmentOption[];
}

export interface EntertainmentOptionName {
  fr: string;
  nl: string;
  en: string;
}
