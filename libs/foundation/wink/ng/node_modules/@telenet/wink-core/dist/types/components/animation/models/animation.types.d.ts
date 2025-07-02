export declare const ANIMATION_STATES: {
    readonly play: "play";
    readonly pauze: "pause";
    readonly stop: "stop";
};
export type AnimationState = (typeof ANIMATION_STATES)[keyof typeof ANIMATION_STATES];
