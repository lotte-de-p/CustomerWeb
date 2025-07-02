import { AutocompleteOptions } from './models/textarea.types';
import { InputEnterkeyhint } from '../input/models/input.types';
export declare class TextArea {
    isDisabled: boolean;
    isRequired: boolean;
    autocomplete: AutocompleteOptions;
    enterkeyhintOption: InputEnterkeyhint;
    textareaId: string;
    label?: string;
    helper?: string;
    name?: string;
    placeholder?: string;
    error?: string;
    minlength?: number;
    maxlength?: number;
    rows?: number;
    private getAttributes;
    componentDidRender(): void;
    render(): any;
}
