// src -> https://medium.com/angular-in-depth/creatively-decouple-ngonchanges-fab95395cc6e
export interface SimpleChange<T> {
  firstChange: boolean;
  previousValue?: T;
  currentValue?: T;
  isFirstChange: () => boolean;
}

export type SimpleChangeCallBackFunction<T> = (value: T, change?: SimpleChange<T>) => void;

export function OnChange<T = unknown>(callback: SimpleChangeCallBackFunction<T> | string) {
  const cachedValueKey = Symbol();
  const isFirstChangeKey = Symbol();

  return (target: NonNullable<unknown>, key: PropertyKey) => {
    // Retrieve the callback function either by string reference or direct function
    const callBackFn: SimpleChangeCallBackFunction<T> =
      typeof callback === 'string' ? (target as Record<string, SimpleChangeCallBackFunction<T>>)[callback] : callback;

    // Check if the callback function exists
    if (!callBackFn || typeof callBackFn !== 'function') {
      throw new Error(`Cannot find method ${callback} in class ${target.constructor.name}`);
    }

    Object.defineProperty(target, key, {
      set(value) {
        const isFirstChange = this[isFirstChangeKey] === undefined;
        if (isFirstChange) this[isFirstChangeKey] = true;
        if (!isFirstChange && this[cachedValueKey] === value) return;

        const oldValue = this[cachedValueKey];
        this[cachedValueKey] = value;

        callBackFn.call(this, value, {
          firstChange: isFirstChange,
          previousValue: oldValue,
          currentValue: value,
          isFirstChange: () => isFirstChange,
        });
        this[isFirstChangeKey] = false;
      },
      get() {
        return this[cachedValueKey];
      },
    });
  };
}
