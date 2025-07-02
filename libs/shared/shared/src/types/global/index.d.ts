export {};

declare global {
  interface Window {
    digitalData: {
      page: {
        pageInfo: {
          pageID: string;
        };
      };
    };
    location: Location;
  }
}
