export interface fieldDependency {
  weight: number;
  key: string;
  enableAndReset: string[]; // Fields to enable and reset
  disableAndReset: string[]; // Fields to disable and reset
}
