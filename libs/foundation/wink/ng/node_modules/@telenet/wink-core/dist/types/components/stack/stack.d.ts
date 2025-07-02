import { Size } from './models/stack.types';
export declare class Stack {
    col: Size;
    gap: Size;
    direction?: Size;
    justifyContent?: Size;
    alignItems?: Size;
    wrap?: Size;
    private readonly getStackClasses;
    private getClassesByPostfix;
    render(): any;
}
