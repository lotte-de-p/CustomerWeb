export interface WindowInterface {
  location: {
    href: string;
    hash: string;
    search: string;
    pathname: string;
    assign: string;
  };
  document: {
    title: string;
    documentElement: {
      lang: string;
    };
    createEvent: (type: string) => unknown;
    createElement: (type: string) => unknown;
  };
  history: {
    back: () => void;
    replaceState: () => void;
  };
  grecaptcha?: {
    ready: (callback: () => void) => unknown;
    execute: (...args: unknown[]) => Promise<string>;
  };
  open: (url?: string, target?: string, windowFeatures?: string) => WindowProxy | null;
  ContextHub: {
    getStore: (name: string) => unknown;
    get: (storeName: string) => { uid: string; mail: string; roles: string } | undefined;
  };
  telenetgroupLoader: {
    showPageLoader: (option: unknown) => void;
    hidePageLoader: () => void;
  };
}

export const windowFactory = (): WindowInterface => ({
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
    ready: (callback: () => void) => {
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
    get: function (storeName: string) {
      if (storeName === 'internal-employee') {
        return {
          uid: 'Daniel',
          mail: 'daniel@daniel.com',
          roles: 'genius-care-advisor,genius-sales-advisor',
        };
      } else {
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
