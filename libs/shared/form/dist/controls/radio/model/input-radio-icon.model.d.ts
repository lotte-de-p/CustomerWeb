import { InputOption } from './input-radio.model';
export declare class InputOptionWithIcon extends InputOption {
    icon: string;
    text: string | undefined;
    constructor(value?: string, label?: string, icon?: string, text?: string);
    withValue(value: string): InputOptionWithIcon;
    withLabel(label: string): InputOptionWithIcon;
    withIcon(icon: string): InputOptionWithIcon;
    withText(text: string): InputOptionWithIcon;
}
//# sourceMappingURL=input-radio-icon.model.d.ts.map