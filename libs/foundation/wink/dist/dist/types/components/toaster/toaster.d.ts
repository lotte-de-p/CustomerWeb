import { ToastElement } from './models/toaster.types';
export declare class Toaster {
    toasts: ToastElement[];
    winkCreateToast(toast: ToastElement): Promise<void>;
    render(): any;
}
