import { PricingAlign, Language, PricingType } from './models/pricing.types';
export declare class Pricing {
    price: string;
    priceStrikethrough?: string;
    startingFrom?: string;
    frequency?: string;
    duration?: string;
    appearance: PricingType;
    annotation: Language;
    alignment: PricingAlign;
    private readonly normalText;
    private readonly strikeThroughText;
    private readonly screenReaderAnnotations;
    private readonly pricingChild;
    private readonly alignmentClass;
    componentWillRender(): void;
    render(): any;
}
