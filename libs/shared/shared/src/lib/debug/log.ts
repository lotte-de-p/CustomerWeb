export interface Log {
  logDebug(message: string, ...parameters: unknown[]): void;

  logInfo(...message: unknown[]): void;

  logError(...message: unknown[]): void;

  log(...message: unknown[]): void;
}
