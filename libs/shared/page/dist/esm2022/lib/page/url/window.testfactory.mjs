export const windowFactory = () => ({
    location: {
        href: 'http://testurl.com',
        hash: '#foo',
        pathname: '',
        search: '?page=1&mode=b',
        assign: '',
    },
    document: {
        title: 'Test bed',
        documentElement: {
            lang: '',
        },
        createElement: function () {
            return {
                target: '',
                href: '',
                dispatchEvent: new Function(),
            };
        },
        createEvent: function () {
            return {
                initMouseEvent: new Function(),
            };
        },
    },
    history: {
        back: () => undefined,
        replaceState: () => undefined,
    },
    grecaptcha: {
        ready: (callback) => {
            return callback();
        },
        execute: function () {
            return new Promise((resolve) => {
                resolve('unique-grecaptcha-token');
            });
        },
    },
    open: () => window,
    ContextHub: {
        getStore: function () {
            return {
                eventing: {
                    once: function () {
                        // empty method
                    },
                },
            };
        },
        get: function (storeName) {
            if (storeName === 'internal-employee') {
                return {
                    uid: 'Daniel',
                    mail: 'daniel@daniel.com',
                    roles: 'genius-care-advisor,genius-sales-advisor',
                };
            }
            else {
                return undefined;
            }
        },
    },
    telenetgroupLoader: {
        showPageLoader: function (_option) {
            // empty
        },
        hidePageLoader: function () {
            // empty
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LnRlc3RmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9wYWdlL3VybC93aW5kb3cudGVzdGZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNBLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxHQUFvQixFQUFFLENBQUMsQ0FBQztJQUNuRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE1BQU0sRUFBRSxFQUFFO0tBQ1g7SUFDRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUUsVUFBVTtRQUNqQixlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsRUFBRTtTQUNUO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsT0FBTztnQkFDTCxNQUFNLEVBQUUsRUFBRTtnQkFDVixJQUFJLEVBQUUsRUFBRTtnQkFDUixhQUFhLEVBQUUsSUFBSSxRQUFRLEVBQUU7YUFDOUIsQ0FBQztRQUNKLENBQUM7UUFDRCxXQUFXLEVBQUU7WUFDWCxPQUFPO2dCQUNMLGNBQWMsRUFBRSxJQUFJLFFBQVEsRUFBRTthQUMvQixDQUFDO1FBQ0osQ0FBQztLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVM7UUFDckIsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVM7S0FDOUI7SUFDRCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsQ0FBQyxRQUFvQixFQUFFLEVBQUU7WUFDOUIsT0FBTyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUM3QixPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtJQUNELElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNO0lBQ2xCLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRTtZQUNSLE9BQU87Z0JBQ0wsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRTt3QkFDSixlQUFlO29CQUNqQixDQUFDO2lCQUNGO2FBQ0YsQ0FBQztRQUNKLENBQUM7UUFDRCxHQUFHLEVBQUUsVUFBVSxTQUFpQjtZQUM5QixJQUFJLFNBQVMsS0FBSyxtQkFBbUIsRUFBRSxDQUFDO2dCQUN0QyxPQUFPO29CQUNMLEdBQUcsRUFBRSxRQUFRO29CQUNiLElBQUksRUFBRSxtQkFBbUI7b0JBQ3pCLEtBQUssRUFBRSwwQ0FBMEM7aUJBQ2xELENBQUM7WUFDSixDQUFDO2lCQUFNLENBQUM7Z0JBQ04sT0FBTyxTQUFTLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7S0FDRjtJQUNELGtCQUFrQixFQUFFO1FBQ2xCLGNBQWMsRUFBRSxVQUFVLE9BQU87WUFDL0IsUUFBUTtRQUNWLENBQUM7UUFDRCxjQUFjLEVBQUU7WUFDZCxRQUFRO1FBQ1YsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBXaW5kb3dJbnRlcmZhY2Uge1xuICBsb2NhdGlvbjoge1xuICAgIGhyZWY6IHN0cmluZztcbiAgICBoYXNoOiBzdHJpbmc7XG4gICAgc2VhcmNoOiBzdHJpbmc7XG4gICAgcGF0aG5hbWU6IHN0cmluZztcbiAgICBhc3NpZ246IHN0cmluZztcbiAgfTtcbiAgZG9jdW1lbnQ6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRvY3VtZW50RWxlbWVudDoge1xuICAgICAgbGFuZzogc3RyaW5nO1xuICAgIH07XG4gICAgY3JlYXRlRXZlbnQ6ICh0eXBlOiBzdHJpbmcpID0+IHVua25vd247XG4gICAgY3JlYXRlRWxlbWVudDogKHR5cGU6IHN0cmluZykgPT4gdW5rbm93bjtcbiAgfTtcbiAgaGlzdG9yeToge1xuICAgIGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgcmVwbGFjZVN0YXRlOiAoKSA9PiB2b2lkO1xuICB9O1xuICBncmVjYXB0Y2hhPzoge1xuICAgIHJlYWR5OiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHVua25vd247XG4gICAgZXhlY3V0ZTogKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gUHJvbWlzZTxzdHJpbmc+O1xuICB9O1xuICBvcGVuOiAodXJsPzogc3RyaW5nLCB0YXJnZXQ/OiBzdHJpbmcsIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nKSA9PiBXaW5kb3dQcm94eSB8IG51bGw7XG4gIENvbnRleHRIdWI6IHtcbiAgICBnZXRTdG9yZTogKG5hbWU6IHN0cmluZykgPT4gdW5rbm93bjtcbiAgICBnZXQ6IChzdG9yZU5hbWU6IHN0cmluZykgPT4geyB1aWQ6IHN0cmluZzsgbWFpbDogc3RyaW5nOyByb2xlczogc3RyaW5nIH0gfCB1bmRlZmluZWQ7XG4gIH07XG4gIHRlbGVuZXRncm91cExvYWRlcjoge1xuICAgIHNob3dQYWdlTG9hZGVyOiAob3B0aW9uOiB1bmtub3duKSA9PiB2b2lkO1xuICAgIGhpZGVQYWdlTG9hZGVyOiAoKSA9PiB2b2lkO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3Qgd2luZG93RmFjdG9yeSA9ICgpOiBXaW5kb3dJbnRlcmZhY2UgPT4gKHtcbiAgbG9jYXRpb246IHtcbiAgICBocmVmOiAnaHR0cDovL3Rlc3R1cmwuY29tJyxcbiAgICBoYXNoOiAnI2ZvbycsXG4gICAgcGF0aG5hbWU6ICcnLFxuICAgIHNlYXJjaDogJz9wYWdlPTEmbW9kZT1iJyxcbiAgICBhc3NpZ246ICcnLFxuICB9LFxuICBkb2N1bWVudDoge1xuICAgIHRpdGxlOiAnVGVzdCBiZWQnLFxuICAgIGRvY3VtZW50RWxlbWVudDoge1xuICAgICAgbGFuZzogJycsXG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YXJnZXQ6ICcnLFxuICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogbmV3IEZ1bmN0aW9uKCksXG4gICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlRXZlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluaXRNb3VzZUV2ZW50OiBuZXcgRnVuY3Rpb24oKSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgaGlzdG9yeToge1xuICAgIGJhY2s6ICgpID0+IHVuZGVmaW5lZCxcbiAgICByZXBsYWNlU3RhdGU6ICgpID0+IHVuZGVmaW5lZCxcbiAgfSxcbiAgZ3JlY2FwdGNoYToge1xuICAgIHJlYWR5OiAoY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH0sXG4gICAgZXhlY3V0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHJlc29sdmUoJ3VuaXF1ZS1ncmVjYXB0Y2hhLXRva2VuJyk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxuICBvcGVuOiAoKSA9PiB3aW5kb3csXG4gIENvbnRleHRIdWI6IHtcbiAgICBnZXRTdG9yZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXZlbnRpbmc6IHtcbiAgICAgICAgICBvbmNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBlbXB0eSBtZXRob2RcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gKHN0b3JlTmFtZTogc3RyaW5nKSB7XG4gICAgICBpZiAoc3RvcmVOYW1lID09PSAnaW50ZXJuYWwtZW1wbG95ZWUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdWlkOiAnRGFuaWVsJyxcbiAgICAgICAgICBtYWlsOiAnZGFuaWVsQGRhbmllbC5jb20nLFxuICAgICAgICAgIHJvbGVzOiAnZ2VuaXVzLWNhcmUtYWR2aXNvcixnZW5pdXMtc2FsZXMtYWR2aXNvcicsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHRlbGVuZXRncm91cExvYWRlcjoge1xuICAgIHNob3dQYWdlTG9hZGVyOiBmdW5jdGlvbiAoX29wdGlvbikge1xuICAgICAgLy8gZW1wdHlcbiAgICB9LFxuICAgIGhpZGVQYWdlTG9hZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlbXB0eVxuICAgIH0sXG4gIH0sXG59KTtcbiJdfQ==