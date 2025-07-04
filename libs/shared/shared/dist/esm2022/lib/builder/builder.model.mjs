export function Builder(typeOrTemplate, template) {
    let type;
    if (typeOrTemplate instanceof Function) {
        type = typeOrTemplate;
    }
    else {
        template = typeOrTemplate;
    }
    const built = template ? Object.assign({}, template) : {};
    const builder = new Proxy({}, {
        get(_target, prop) {
            if ('build' === prop) {
                if (type) {
                    // A class name (identified by the constructor) was passed. Instantiate it with props.
                    const obj = new type();
                    return () => Object.assign(obj, { ...built });
                }
                else {
                    // No type information - just return the object.
                    return () => built;
                }
            }
            return (x) => {
                built[prop.toString()] = x;
                return builder;
            };
        },
    });
    return builder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYnVpbGRlci9idWlsZGVyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQSxNQUFNLFVBQVUsT0FBTyxDQUFtQixjQUFzQyxFQUFFLFFBQXFCO0lBQ3JHLElBQUksSUFBMEIsQ0FBQztJQUMvQixJQUFJLGNBQWMsWUFBWSxRQUFRLEVBQUUsQ0FBQztRQUN2QyxJQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ3hCLENBQUM7U0FBTSxDQUFDO1FBQ04sUUFBUSxHQUFHLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsTUFBTSxLQUFLLEdBQTRCLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVuRixNQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FDdkIsRUFBRSxFQUNGO1FBQ0UsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJO1lBQ2YsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ1Qsc0ZBQXNGO29CQUN0RixNQUFNLEdBQUcsR0FBTSxJQUFJLElBQUksRUFBRSxDQUFDO29CQUMxQixPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO3FCQUFNLENBQUM7b0JBQ04sZ0RBQWdEO29CQUNoRCxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDckIsQ0FBQztZQUNILENBQUM7WUFFRCxPQUFPLENBQUMsQ0FBVSxFQUFXLEVBQUU7Z0JBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztRQUNKLENBQUM7S0FDRixDQUNGLENBQUM7SUFFRixPQUFPLE9BQXNCLENBQUM7QUFDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTW9yZSBkZXRhaWxzIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9WaW5jZW50LVBhbmcvYnVpbGRlci1wYXR0ZXJuXG4gKi9cbmV4cG9ydCB0eXBlIElCdWlsZGVyPFQ+ID0ge1xuICBbayBpbiBrZXlvZiBUXS0/OiAoYXJnOiBUW2tdKSA9PiBJQnVpbGRlcjxUPjtcbn0gJiB7XG4gIGJ1aWxkKCk6IFQ7XG59O1xuXG50eXBlIENsYXp6PFQ+ID0gbmV3ICguLi5hcmdzOiB1bmtub3duW10pID0+IFQ7XG5cbi8qKlxuICogQ3JlYXRlIGEgQnVpbGRlciBmb3IgYSBjbGFzcy4gUmV0dXJuZWQgb2JqZWN0cyB3aWxsIGJlIG9mIHRoZSBjbGFzcyB0eXBlLlxuICpcbiAqIGUuZy4gbGV0IG9iajogTXlDbGFzcyA9IEJ1aWxkZXIoTXlDbGFzcykuc2V0QSg1KS5zZXRCKFwic3RyXCIpLmJ1aWxkKCk7XG4gKlxuICogQHBhcmFtIHR5cGUgdGhlIG5hbWUgb2YgdGhlIGNsYXNzIHRvIGluc3RhbnRpYXRlLlxuICogQHBhcmFtIHRlbXBsYXRlIG9wdGlvbmFsIGNsYXNzIHBhcnRpYWwgd2hpY2ggdGhlIGJ1aWxkZXIgd2lsbCBkZXJpdmUgaW5pdGlhbCBwYXJhbXMgZnJvbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJ1aWxkZXI8VD4odHlwZTogQ2xheno8VD4sIHRlbXBsYXRlPzogUGFydGlhbDxUPik6IElCdWlsZGVyPFQ+O1xuXG4vKipcbiAqIENyZWF0ZSBhIEJ1aWxkZXIgZm9yIGFuIGludGVyZmFjZS4gUmV0dXJuZWQgb2JqZWN0cyB3aWxsIGJlIHVudHlwZWQuXG4gKlxuICogZS5nLiBsZXQgb2JqOiBJbnRlcmZhY2UgPSBCdWlsZGVyPEludGVyZmFjZT4oKS5zZXRBKDUpLnNldEIoXCJzdHJcIikuYnVpbGQoKTtcbiAqXG4gKiBAcGFyYW0gdGVtcGxhdGUgb3B0aW9uYWwgcGFydGlhbCBvYmplY3Qgd2hpY2ggdGhlIGJ1aWxkZXIgd2lsbCBkZXJpdmUgaW5pdGlhbCBwYXJhbXMgZnJvbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJ1aWxkZXI8VD4odGVtcGxhdGU/OiBQYXJ0aWFsPFQ+KTogSUJ1aWxkZXI8VD47XG5cbmV4cG9ydCBmdW5jdGlvbiBCdWlsZGVyPFQgZXh0ZW5kcyBvYmplY3Q+KHR5cGVPclRlbXBsYXRlPzogQ2xheno8VD4gfCBQYXJ0aWFsPFQ+LCB0ZW1wbGF0ZT86IFBhcnRpYWw8VD4pOiBJQnVpbGRlcjxUPiB7XG4gIGxldCB0eXBlOiBDbGF6ejxUPiB8IHVuZGVmaW5lZDtcbiAgaWYgKHR5cGVPclRlbXBsYXRlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICB0eXBlID0gdHlwZU9yVGVtcGxhdGU7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGxhdGUgPSB0eXBlT3JUZW1wbGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGJ1aWx0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHRlbXBsYXRlID8gT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGUpIDoge307XG5cbiAgY29uc3QgYnVpbGRlciA9IG5ldyBQcm94eShcbiAgICB7fSxcbiAgICB7XG4gICAgICBnZXQoX3RhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAoJ2J1aWxkJyA9PT0gcHJvcCkge1xuICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAvLyBBIGNsYXNzIG5hbWUgKGlkZW50aWZpZWQgYnkgdGhlIGNvbnN0cnVjdG9yKSB3YXMgcGFzc2VkLiBJbnN0YW50aWF0ZSBpdCB3aXRoIHByb3BzLlxuICAgICAgICAgICAgY29uc3Qgb2JqOiBUID0gbmV3IHR5cGUoKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBPYmplY3QuYXNzaWduKG9iaiwgeyAuLi5idWlsdCB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gdHlwZSBpbmZvcm1hdGlvbiAtIGp1c3QgcmV0dXJuIHRoZSBvYmplY3QuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gYnVpbHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh4OiB1bmtub3duKTogdW5rbm93biA9PiB7XG4gICAgICAgICAgYnVpbHRbcHJvcC50b1N0cmluZygpXSA9IHg7XG4gICAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gYnVpbGRlciBhcyBJQnVpbGRlcjxUPjtcbn1cbiJdfQ==