import { EventEmitter } from '../../../../stencil-public-runtime';
import { mainNavEventEmitterDetails, MenuItem } from './models/main-navigation.types';
export declare class MainNavigation {
    menuItems: string;
    _menuItems: MenuItem[];
    isOpen: boolean;
    activeIndex: number | undefined;
    ActiveLinkRef: HTMLAnchorElement | undefined;
    mainNavigationItemClicked: EventEmitter<mainNavEventEmitterDetails> | undefined;
    handleFlyoutBackLinkClicked(e: CustomEvent): void;
    componentWillLoad(): void;
    private mainNavigationItemEmitter;
    private handleFlyOutOpening;
    private handleItemClick;
    private handleItemMouseOver;
    private handleKeyDownEvent;
    private getATagCssClasses;
    render(): any;
}
