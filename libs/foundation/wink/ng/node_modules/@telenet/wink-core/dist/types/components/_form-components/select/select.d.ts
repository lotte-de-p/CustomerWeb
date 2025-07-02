export declare class Select {
    internals: ElementInternals;
    host: HTMLWinkSelectElement;
    label?: string;
    helper?: string;
    isRequired: boolean;
    selectId: string;
    selectName?: string;
    error?: string;
    isDisabled: boolean;
    value?: string;
    placeholder?: string;
    componentDidRender(): void;
    private handleChange;
    render(): any;
}
