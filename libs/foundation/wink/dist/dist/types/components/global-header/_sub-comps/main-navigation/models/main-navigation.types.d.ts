export type MenuItem = {
    name: string;
    url: string;
    hasSubNav?: boolean;
};
export type mainNavEventEmitterDetails = {
    index: number;
    name?: string;
    eventType?: 'mouse' | 'keyboard';
};
