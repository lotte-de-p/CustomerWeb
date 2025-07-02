import { DropdownAlign } from './models/dropdown-menu.types';
export declare class DropdownMenu {
    host: HTMLWinkDropdownMenuElement;
    heading?: string;
    isExpanded?: boolean;
    dropdownTabIndex?: number;
    itemSelected?: string;
    listPosition: DropdownAlign;
    focusableItem: number;
    componentDidLoad(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    private focusOnItem;
    private getDropdownItems;
    private readonly toggleDropdown;
    private readonly setPosition;
    render(): any;
}
