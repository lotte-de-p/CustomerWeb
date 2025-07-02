export declare class Sheet {
    host: HTMLWinkSheetElement;
    dashboard: boolean;
    multipage: boolean;
    isVisible: boolean;
    isOpen: boolean;
    hasStickyFooter: boolean;
    firstPage: boolean;
    onIsVisibleChange(): void;
    open(): Promise<void>;
    close(): Promise<void>;
    nextPage(): Promise<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private readonly handleOutsideClick;
    private readonly handleButtonClick;
    private openModal;
    private closeModal;
    private goBack;
    private goForward;
    private renderFooter;
    render(): any;
}
