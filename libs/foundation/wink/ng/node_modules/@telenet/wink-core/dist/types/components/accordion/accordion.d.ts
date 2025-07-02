export declare class Accordion {
    heading: string;
    icon: string;
    isExpanded: boolean;
    componentDidLoad(): void;
    private activeContentPanel;
    private get dynamicIdBasedOnTitle();
    private readonly onButtonClick;
    private readonly panelTransitionStart;
    private readonly panelTransitionEnd;
    render(): any;
}
