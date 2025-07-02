import { LineOption } from '../../shared/models/line-option.model';
import { Option } from '../../shared/models/option.model';

export const mapLineOptionToProductOption = (selectedOption: LineOption): Option => ({
  id: selectedOption.id,
  label: selectedOption.label,
  category: selectedOption.category,
  volume: selectedOption.volume,
  oldVolume: selectedOption.upgradedFrom,
  optionCategory: selectedOption.optionCategory,
  isSelected: selectedOption.isSelected,
  isOptionUpgraded: selectedOption.isOptionUpgraded,
  isOptionAdded: selectedOption.isOptionAdded,
  isAffected: selectedOption.isAffected,
  price: {
    currency: undefined,
    recurrentTotal: undefined,
    recurrentDiscount: undefined,
    recurrentDiscounted: undefined,
    taxInclPrices: undefined,
    taxExclPrices: {
      currency: undefined,
      recurrentTotal: undefined,
      recurrentDiscount: undefined,
      recurrentDiscounted: undefined,
    },
  },
  productInfo: undefined,
  productId: selectedOption.id,
  status: selectedOption.status,
});

export const mapProductOptionToLineOption = (selectedOption: Option): LineOption => ({
  id: selectedOption.id,
  label: selectedOption.label,
  category: selectedOption.category,
  volume: selectedOption.volume,
  upgradedFrom: selectedOption.oldVolume,
  optionCategory: selectedOption.optionCategory,
  isSelected: selectedOption.isSelected,
  isOptionUpgraded: selectedOption.isOptionUpgraded,
  isOptionAdded: selectedOption.isOptionAdded,
  isAffected: selectedOption.isAffected,
  price: {
    currency: undefined,
    amount: undefined,
  },
  status: selectedOption.status,
});
