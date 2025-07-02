import { toggleAlignment } from './models/toggle-switch.types';
export declare class ToggleSwitch {
    internals: ElementInternals;
    host: HTMLWinkToggleSwitchElement;
    label: string;
    toggleSwitchId: string;
    toggleSwitchName: string;
    alignment: toggleAlignment;
    checked: boolean;
    disabled: boolean;
    private readonly labelOnClick;
    private readonly handleKeyDown;
    componentDidRender(): void;
    render(): any;
}
