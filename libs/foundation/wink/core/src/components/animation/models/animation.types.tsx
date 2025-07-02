export const ANIMATION_STATES = {
  play: 'play',
  pauze: 'pause',
  stop: 'stop',
} as const;

export type AnimationState = (typeof ANIMATION_STATES)[keyof typeof ANIMATION_STATES];
