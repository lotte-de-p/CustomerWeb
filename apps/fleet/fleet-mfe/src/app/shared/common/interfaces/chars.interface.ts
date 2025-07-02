import { CharsEnum } from './chars.enum';

export interface CharsInterface {
  key: CharsEnum;
  values: string[];
  unit: string;
}

export interface RawCharsInterface {
  key: CharsEnum;
  values: string[];
  unit: string;
}

export interface ElementaryCharacteristicsInterface {
  key: CharsEnum;
  value: string;
  unit: string;
}
