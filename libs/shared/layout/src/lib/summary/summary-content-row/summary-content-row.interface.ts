import { FontSize, FontWeight, MarginOptions, MarginPosition, MarginSize, TextFlowType } from '@telenet/ng-lib-form';

export interface SummaryContentRowConfiguration {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  margin?: MarginOptions | MarginOptions[];
  textFlow?: TextFlowType;
}

export const SummaryContentRowParentLevel1: SummaryContentRowConfiguration = {
  margin: [
    {
      position: MarginPosition.top,
      size: MarginSize.large,
    },
  ],
};

export const SummaryContentRowLevel1: SummaryContentRowConfiguration = {
  textFlow: TextFlowType.h4,
};

export const SummaryContentPromoRowLevel1: SummaryContentRowConfiguration = {
  textFlow: TextFlowType.legal,
};

export const SummaryContentRowLevel2: SummaryContentRowConfiguration = {
  fontSize: FontSize.m,
  fontWeight: FontWeight.xxl,
  margin: {
    position: MarginPosition.left,
    size: MarginSize.medium,
  },
  textFlow: TextFlowType.body,
};

export const SummaryContentPromoRowLevel2: SummaryContentRowConfiguration = {
  margin: {
    position: MarginPosition.left,
    size: MarginSize.medium,
  },
  textFlow: TextFlowType.legal,
};

export const SummaryContentRowLevel3: SummaryContentRowConfiguration = {
  fontSize: FontSize.s,
  margin: {
    position: MarginPosition.left,
    size: MarginSize.xLarge,
  },
  textFlow: TextFlowType.body,
};

export const SummaryContentPromoRowLevel3: SummaryContentRowConfiguration = {
  margin: {
    position: MarginPosition.left,
    size: MarginSize.xLarge,
  },
  textFlow: TextFlowType.legal,
};

export const StrikeTroughSummaryContentRow: SummaryContentRowConfiguration = {
  fontSize: FontSize.xxs,
  margin: {
    position: MarginPosition.right,
    size: MarginSize.xxSmall,
  },
};

export const SummaryContentMonthlyLabel: SummaryContentRowConfiguration = {
  fontSize: FontSize.s,
  margin: {
    position: MarginPosition.left,
    size: MarginSize.xLarge,
  },
  textFlow: TextFlowType.body,
};

export const SummaryContentMonthlyPrice: SummaryContentRowConfiguration = {
  textFlow: TextFlowType.h4,
};
