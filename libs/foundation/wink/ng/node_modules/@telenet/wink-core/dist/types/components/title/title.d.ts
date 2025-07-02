import { ComponentInterface } from '../../stencil-public-runtime';
import { TitleSize, TitleSpacingY } from './models/title.types';
export declare class Title implements ComponentInterface {
    htmlTag: TitleSize;
    noSeo: boolean;
    text: string;
    spacingY: TitleSpacingY;
    _HtmlTag: TitleSize;
    componentWillRender(): void;
    render(): any;
}
