import { Meta } from '@storybook/web-components';
import { BadgeColor, BadgeSize } from './models/badge.types';
declare const _default: Meta;
export default _default;
type Args = {
    text: string;
    size: BadgeSize;
    background: BadgeColor;
};
export declare const Default: (args: Args) => import("lit-html").TemplateResult<1>;
