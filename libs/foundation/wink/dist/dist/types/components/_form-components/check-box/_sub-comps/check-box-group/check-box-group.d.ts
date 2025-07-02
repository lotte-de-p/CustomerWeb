import { Directions } from '../../../../../models/positions.types';
export declare class CheckBoxGroup {
    internals: ElementInternals;
    label: string;
    helper: string;
    direction: Directions;
    error?: string;
    isRequired: boolean;
    optionalText: string;
    setValidation(errorMsg?: string): Promise<void>;
    render(): any;
}
