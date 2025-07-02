export interface GRecaptchaInterface {
  ready: (...args: unknown[]) => void;
  execute: (...args: unknown[]) => Promise<string>;
}
