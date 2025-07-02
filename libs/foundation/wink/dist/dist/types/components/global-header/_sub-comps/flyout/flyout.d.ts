import { ComponentInterface, EventEmitter } from '../../../../stencil-public-runtime';
import { mainNavEventEmitterDetails } from '../main-navigation/models/main-navigation.types';
export declare class Flyout implements ComponentInterface {
    host: HTMLWinkFlyoutElement;
    flyoutId: number | undefined;
    activeId: number | undefined;
    backLabel: string | undefined;
    isFlyoutOpen: boolean;
    focusableElements: any[];
    focusedElementTracker: number;
    flyoutBackLinkClicked: EventEmitter<{
        eventType: 'mouse' | 'keyboard';
    }> | undefined;
    handleMainNavigationItemClicked(event: CustomEvent<mainNavEventEmitterDetails>): void;
    private shouldFetchFocusableElements;
    private resetFocusableElements;
    private focusOnElement;
    private getAllFocusableElements;
    handleKeyDown(e: KeyboardEvent): void;
    private resetFlyout;
    private closeFlyout;
    private handleFlyoutMouseLeave;
    render(): any;
}
