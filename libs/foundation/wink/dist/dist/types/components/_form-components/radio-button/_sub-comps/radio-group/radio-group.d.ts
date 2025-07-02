import { Directions } from '../../../../../models/positions.types';
export declare class RadioGroup {
    internals: ElementInternals;
    label: string;
    helper: string;
    direction: Directions;
    isRequired: boolean;
    optionalText: string;
    error?: string;
    setValidation(errorMsg?: string): Promise<void>;
    render(): any;
}
