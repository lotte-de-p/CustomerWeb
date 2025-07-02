import { Target } from '../../models/targets.types';
import { ButtonAppearance, ButtonElement, ButtonIconPosition, ButtonSize, ButtonState, ButtonType, ButtonWidth } from './models/button.types';
export declare class Button {
    text?: string;
    loadingText?: string;
    element: ButtonElement;
    appearance: ButtonAppearance;
    size: ButtonSize;
    width: ButtonWidth;
    status: ButtonState;
    href?: string;
    target: Target;
    type: ButtonType;
    icon?: string;
    iconButtonAriaLabel?: string;
    iconPosition?: ButtonIconPosition;
    private readonly getText;
    private readonly loaderSVG;
    private getClasses;
    private getAttributes;
    componentDidRender(): void;
    render(): any;
}
