import { TabTypes } from './models/tabs.types';
export declare class Tabs {
    host: HTMLWinkTabsElement;
    appearance: TabTypes;
    activeTabIndex: number;
    isScrollable: boolean;
    tabElements: Element[];
    uuidMap: Map<any, any>;
    private tabList;
    private tabItems;
    private readonly handleClickOnButton;
    private readonly handleKeyDown;
    private readonly handleKeyDownIndicator;
    private assignTheRightActiveTabIndex;
    private findNextTabItemId;
    private handleScroll;
    private checkIfScrollable;
    private renderSlots;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    render(): any;
}
