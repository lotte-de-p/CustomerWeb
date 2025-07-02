import { Meta } from '@storybook/web-components';
import { AvatarSize } from './models/avatar.types';
declare const _default: Meta;
export default _default;
type Args = {
    src: string;
    size: AvatarSize;
};
export declare const Default: (args: Args) => import("lit-html").TemplateResult<1>;
