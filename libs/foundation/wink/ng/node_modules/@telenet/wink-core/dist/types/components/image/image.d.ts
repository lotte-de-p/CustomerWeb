import { LoadingType } from './models/image.types';
export declare class Image {
    srcDesktop: string;
    srcTablet?: string;
    srcMobile?: string;
    alt?: string;
    loading: LoadingType;
    render(): any;
}
