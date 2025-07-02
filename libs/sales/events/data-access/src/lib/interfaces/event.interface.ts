export interface EventInterface<T = unknown> {
  eventType: string;
  body?: T | undefined;
}
