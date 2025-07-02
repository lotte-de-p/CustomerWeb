import { IconSize, IconType } from './models/icon.types';
export declare class Icon {
    appearance: IconType;
    size: IconSize;
    icon: string;
    hasBackdrop: boolean;
    componentWillRender(): void;
    render(): any;
}
