export function OnChange(callback) {
    const cachedValueKey = Symbol();
    const isFirstChangeKey = Symbol();
    return (target, key) => {
        // Retrieve the callback function either by string reference or direct function
        const callBackFn = typeof callback === 'string' ? target[callback] : callback;
        // Check if the callback function exists
        if (!callBackFn || typeof callBackFn !== 'function') {
            throw new Error(`Cannot find method ${callback} in class ${target.constructor.name}`);
        }
        Object.defineProperty(target, key, {
            set(value) {
                const isFirstChange = this[isFirstChangeKey] === undefined;
                if (isFirstChange)
                    this[isFirstChangeKey] = true;
                if (!isFirstChange && this[cachedValueKey] === value)
                    return;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tY2hhbmdlLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3V0aWxzL29uLWNoYW5nZS51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLE1BQU0sVUFBVSxRQUFRLENBQWMsUUFBa0Q7SUFDdEYsTUFBTSxjQUFjLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDaEMsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUVsQyxPQUFPLENBQUMsTUFBNEIsRUFBRSxHQUFnQixFQUFFLEVBQUU7UUFDeEQsK0VBQStFO1FBQy9FLE1BQU0sVUFBVSxHQUNkLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUUsTUFBMEQsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRWxILHdDQUF3QztRQUN4QyxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsRUFBRSxDQUFDO1lBQ3BELE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLFFBQVEsYUFBYSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDeEYsQ0FBQztRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNqQyxHQUFHLENBQUMsS0FBSztnQkFDUCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxTQUFTLENBQUM7Z0JBQzNELElBQUksYUFBYTtvQkFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEtBQUs7b0JBQUUsT0FBTztnQkFFN0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUU3QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7b0JBQzNCLFdBQVcsRUFBRSxhQUFhO29CQUMxQixhQUFhLEVBQUUsUUFBUTtvQkFDdkIsWUFBWSxFQUFFLEtBQUs7b0JBQ25CLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhO2lCQUNuQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLENBQUM7WUFDRCxHQUFHO2dCQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlCLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjIC0+IGh0dHBzOi8vbWVkaXVtLmNvbS9hbmd1bGFyLWluLWRlcHRoL2NyZWF0aXZlbHktZGVjb3VwbGUtbmdvbmNoYW5nZXMtZmFiOTUzOTVjYzZlXG5leHBvcnQgaW50ZXJmYWNlIFNpbXBsZUNoYW5nZTxUPiB7XG4gIGZpcnN0Q2hhbmdlOiBib29sZWFuO1xuICBwcmV2aW91c1ZhbHVlPzogVDtcbiAgY3VycmVudFZhbHVlPzogVDtcbiAgaXNGaXJzdENoYW5nZTogKCkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgU2ltcGxlQ2hhbmdlQ2FsbEJhY2tGdW5jdGlvbjxUPiA9ICh2YWx1ZTogVCwgY2hhbmdlPzogU2ltcGxlQ2hhbmdlPFQ+KSA9PiB2b2lkO1xuXG5leHBvcnQgZnVuY3Rpb24gT25DaGFuZ2U8VCA9IHVua25vd24+KGNhbGxiYWNrOiBTaW1wbGVDaGFuZ2VDYWxsQmFja0Z1bmN0aW9uPFQ+IHwgc3RyaW5nKSB7XG4gIGNvbnN0IGNhY2hlZFZhbHVlS2V5ID0gU3ltYm9sKCk7XG4gIGNvbnN0IGlzRmlyc3RDaGFuZ2VLZXkgPSBTeW1ib2woKTtcblxuICByZXR1cm4gKHRhcmdldDogTm9uTnVsbGFibGU8dW5rbm93bj4sIGtleTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAvLyBSZXRyaWV2ZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gZWl0aGVyIGJ5IHN0cmluZyByZWZlcmVuY2Ugb3IgZGlyZWN0IGZ1bmN0aW9uXG4gICAgY29uc3QgY2FsbEJhY2tGbjogU2ltcGxlQ2hhbmdlQ2FsbEJhY2tGdW5jdGlvbjxUPiA9XG4gICAgICB0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnID8gKHRhcmdldCBhcyBSZWNvcmQ8c3RyaW5nLCBTaW1wbGVDaGFuZ2VDYWxsQmFja0Z1bmN0aW9uPFQ+PilbY2FsbGJhY2tdIDogY2FsbGJhY2s7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gZXhpc3RzXG4gICAgaWYgKCFjYWxsQmFja0ZuIHx8IHR5cGVvZiBjYWxsQmFja0ZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIG1ldGhvZCAke2NhbGxiYWNrfSBpbiBjbGFzcyAke3RhcmdldC5jb25zdHJ1Y3Rvci5uYW1lfWApO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGlzRmlyc3RDaGFuZ2UgPSB0aGlzW2lzRmlyc3RDaGFuZ2VLZXldID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChpc0ZpcnN0Q2hhbmdlKSB0aGlzW2lzRmlyc3RDaGFuZ2VLZXldID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpc0ZpcnN0Q2hhbmdlICYmIHRoaXNbY2FjaGVkVmFsdWVLZXldID09PSB2YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpc1tjYWNoZWRWYWx1ZUtleV07XG4gICAgICAgIHRoaXNbY2FjaGVkVmFsdWVLZXldID0gdmFsdWU7XG5cbiAgICAgICAgY2FsbEJhY2tGbi5jYWxsKHRoaXMsIHZhbHVlLCB7XG4gICAgICAgICAgZmlyc3RDaGFuZ2U6IGlzRmlyc3RDaGFuZ2UsXG4gICAgICAgICAgcHJldmlvdXNWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgY3VycmVudFZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBpc0ZpcnN0Q2hhbmdlOiAoKSA9PiBpc0ZpcnN0Q2hhbmdlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpc1tpc0ZpcnN0Q2hhbmdlS2V5XSA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbY2FjaGVkVmFsdWVLZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==