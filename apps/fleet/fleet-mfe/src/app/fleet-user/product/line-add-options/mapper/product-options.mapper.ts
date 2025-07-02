import { LineOption } from '../models/line-option.model';
import { Option } from '../../../shared/models/product.model';

export const mapLineOptionToProductOption = (selectedOption: LineOption): Option => ({
  id: selectedOption.id,
  activeOptions: undefined,
  label: selectedOption.label,
  category: selectedOption.category,
  volume: selectedOption.volume,
  weight: selectedOption.weight,
  description: selectedOption.description,
  upgradedFrom: selectedOption.upgradedFrom,
  optionCategory: selectedOption.optionCategory,
  isSelected: selectedOption.isSelected,
  isDisabled: selectedOption.isDisabled,
  isAffected: selectedOption.isAffected,
  price: {
    currency: selectedOption.price.currency,
    recurrentTotal: undefined,
    recurrentDiscount: undefined,
    recurrentDiscounted: undefined,
    taxInclPrices: undefined,
    taxExclPrices: {
      currency: selectedOption.price.currency,
      recurrentTotal: selectedOption.price.amount,
      recurrentDiscount: undefined,
      recurrentDiscounted: undefined,
    },
  },
  productInfo: undefined,
  status: selectedOption.status,
});
