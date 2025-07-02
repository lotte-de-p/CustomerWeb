import { ToastType } from './models/toast.types';
import { Target } from '../../../../models/targets.types';
export declare class Toast {
    appearance: ToastType;
    text: string;
    linkText?: string;
    href?: string;
    target?: Target;
    duration?: number | undefined;
    isOpen: boolean;
    theme: string;
    currentTheme: string;
    private timer;
    private readonly iconsNamesMap;
    watchOpenPropHandler(newValue: boolean, oldValue: boolean): void;
    watchThemePropHandler(newValue: string, oldValue: string): void;
    handleKeyDown(ev: KeyboardEvent): void;
    componentDidLoad(): void;
    private changeTheme;
    private closeToast;
    private closeToastAfterTimeout;
    render(): any;
}
