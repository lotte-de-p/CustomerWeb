export interface StepUserInputInterface {
  readonly stepKey: string;
  input: InputInterface;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputInterface {}

export interface SimNumberInterface extends InputInterface {
  simNumber: string;
}
