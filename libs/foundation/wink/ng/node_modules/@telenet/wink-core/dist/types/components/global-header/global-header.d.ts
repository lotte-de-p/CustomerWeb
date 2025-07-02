export declare class GlobalHeader {
    host: HTMLWinkGlobalHeaderElement;
    hasCustomerOrientation?: boolean | undefined;
    hasIntentBar?: boolean | undefined;
    hasCustomerZone?: boolean | undefined;
    hasLanguage?: boolean | undefined;
    hasBrand?: boolean | undefined;
    hasMainNavigation?: boolean | undefined;
    hasSearch?: boolean | undefined;
    hasCallToAction?: boolean | undefined;
    hasTopNavigation: boolean;
    hasMobileCustomerOrientation?: boolean | undefined;
    hasMobileIntentBar?: boolean | undefined;
    hasMobileCustomerZone?: boolean | undefined;
    hasMobileLanguage?: boolean | undefined;
    hasMobileBrand?: boolean | undefined;
    hasMobileMainNavigation?: boolean | undefined;
    hasMobileSearch?: boolean | undefined;
    hasMobileCallToAction?: boolean | undefined;
    IsMobileMinimal: boolean;
    hasFlyout: boolean;
    hasMobileFlyout: boolean;
    isSubNavOpen: boolean;
    handleMainNavigationItemClicked(event: CustomEvent<{
        index: number;
        name: string;
    }>): void;
    handleFlyoutBackLinkClicked(): void;
    componentWillLoad(): void;
    render(): any;
}
