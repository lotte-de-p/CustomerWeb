export interface Country {
  iso: string;
  region: string;
  country: string;
  roamingZone: string;
  internationalZone: string;
}

export const initCountry: Country = {
  iso: '',
  region: '',
  country: '',
  internationalZone: '',
  roamingZone: '',
};

export interface CountryResponse {
  countries: Country[];
}
