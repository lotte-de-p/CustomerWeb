import { LinkAppearance, LinkPositions, LinkSize, LinkSizeSnowflake } from './models/link.types';
import { IconTypeBasis } from '../icon/models/icon.types';
import { Target } from '../../models/targets.types';
export declare class Link {
    appearance: LinkAppearance;
    size: LinkSize | LinkSizeSnowflake;
    icon?: string;
    iconPosition: LinkPositions;
    iconAppearance: IconTypeBasis;
    isDisabled: boolean;
    href: string;
    target: Target;
    private getTypeClasses;
    private hasBackdrop;
    render(): any;
}
