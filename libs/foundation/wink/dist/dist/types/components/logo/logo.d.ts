import { logoVariant } from './models/logo.types';
import { Target } from '../../models/targets.types';
export declare class Logo {
    alt: string;
    href: string;
    target: Target;
    appearance?: logoVariant;
    private getSrcDesktop;
    private getSrcMobile;
    private altText;
    private readonly renderLogoImage;
    render(): any;
}
