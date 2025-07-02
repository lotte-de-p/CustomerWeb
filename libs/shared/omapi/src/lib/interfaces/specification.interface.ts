import { LocalizedContentInterface } from './localized-content.interface';

export interface SpecificationInterface {
  labelKey: string;
  unit: string;
  visible: boolean;
  disclaimerLocalizedContent?: LocalizedContentInterface;
  weight: string;
  localizedContent?: LocalizedContentInterface;
  serviceType: string;
  id?: string;
  showUnit?: boolean;
  isValue?: boolean;
  isMonetary?: boolean;
  isRange?: boolean;
  isAsterisk?: boolean;
  value?: string;
  minValue?: string;
  maxValue?: string;
  productType?: string;
}
