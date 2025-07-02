export interface SimpleChange<T> {
    firstChange: boolean;
    previousValue?: T;
    currentValue?: T;
    isFirstChange: () => boolean;
}
export type SimpleChangeCallBackFunction<T> = (value: T, change?: SimpleChange<T>) => void;
export declare function OnChange<T = unknown>(callback: SimpleChangeCallBackFunction<T> | string): (target: NonNullable<unknown>, key: PropertyKey) => void;
//# sourceMappingURL=on-change.util.d.ts.map