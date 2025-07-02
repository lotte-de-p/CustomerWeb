import { FormLabelRendition } from './models/form-label.types';
export declare class FormLabel {
    label: string;
    helper?: string;
    labelId?: string;
    helperId?: string;
    rendition: FormLabelRendition;
    optionalText: string;
    showOptional: boolean;
    isDisabled: boolean;
    render(): any;
}
