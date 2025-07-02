import { LocalizedContentInterface } from './localized-content.interface';

export interface SubCategoryInterface {
  name: string;
  localizedName?: string;
  localizedContent: LocalizedContentInterface[];
  weight: number;
  mutualExclusion: boolean;
}
