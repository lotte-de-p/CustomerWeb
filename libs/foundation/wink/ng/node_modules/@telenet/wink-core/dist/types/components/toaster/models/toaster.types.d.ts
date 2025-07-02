import { ToastType } from '../_sub-comps/toast/models/toast.types';
import { Target } from '../../../models/targets.types';
export type ToastElement = {
    appearance: ToastType;
    text: string;
    duration: number;
    href: string;
    target: Target;
    linkText: string;
};
