const EUROPE_SPECIAL = 'Europe Special';
const ZONE_EU = 'ZoneEU';
const WORLD1 = 'World1';
const WORLD2 = 'World2';

export interface CountryRaw {
  iso: string;
  region: string;
  brand: string;
  category: string;
  country: CountryLocale;
  roamingZone: string;
  internationalZone: string;
}

export interface CountryLocale {
  nl: string;
  fr: string;
  en: string;
}

export class Data {
  public static data = {
    countries: [
      {
        iso: 'DE',
        region: 'EU',
        brand: 'Telenet',
        category: 'Residential',
        country: 'Duitsland',
        roamingZone: ZONE_EU,
        internationalZone: ZONE_EU,
      },
      {
        iso: 'CL',
        region: 'SA',
        brand: 'Telenet',
        category: 'Residential',
        country: 'Chili',
        roamingZone: WORLD2,
        internationalZone: WORLD2,
      },
      {
        iso: 'FR',
        region: 'EU',
        brand: 'Telenet',
        category: 'Residential',
        country: 'Frankrijk',
        roamingZone: ZONE_EU,
        internationalZone: ZONE_EU,
      },
      {
        iso: 'ID',
        region: 'AS',
        brand: 'Telenet',
        category: 'Residential',
        country: 'Indonesië',
        roamingZone: WORLD2,
        internationalZone: WORLD2,
      },
      {
        iso: 'LUX',
        region: 'EU',
        brand: 'Telenet',
        category: 'Residential',
        country: 'Luxemburg',
        roamingZone: ZONE_EU,
        internationalZone: ZONE_EU,
      },
      {
        iso: 'NL',
        region: 'EU',
        brand: 'Telenet',
        category: 'Residential',
        country: 'Nederland',
        roamingZone: ZONE_EU,
        internationalZone: ZONE_EU,
      },
      {
        iso: 'NO',
        region: 'EU',
        brand: 'Telenet',
        category: 'Residential',
        country: 'Noorwegen',
        roamingZone: ZONE_EU,
        internationalZone: ZONE_EU,
      },
      {
        iso: 'SE',
        region: 'EU',
        brand: 'Telenet',
        category: 'Residential',
        country: 'Zweden',
        roamingZone: ZONE_EU,
        internationalZone: ZONE_EU,
      },
      {
        iso: 'CH',
        region: 'EU',
        brand: 'Telenet',
        category: 'Residential',
        country: 'Zwitserland',
        roamingZone: EUROPE_SPECIAL,
        internationalZone: EUROPE_SPECIAL,
      },
      {
        iso: 'ZA',
        region: 'AF',
        brand: 'Telenet',
        category: 'Residential',
        country: 'Zuid-Afrika',
        roamingZone: WORLD1,
        internationalZone: WORLD1,
      },
    ],
  };
}
