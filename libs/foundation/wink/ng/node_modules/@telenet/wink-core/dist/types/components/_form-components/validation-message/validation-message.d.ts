import { ValidationTypes } from './models/validation-message.types';
export declare class ValidationMessage {
    message?: string;
    type: ValidationTypes;
    render(): any;
}
