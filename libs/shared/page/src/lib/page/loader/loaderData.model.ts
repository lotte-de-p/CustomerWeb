export class LoaderData {
  isAPIExecutionInProgress: boolean;
  dataCapturedOn: number;

  public constructor(status: boolean) {
    this.isAPIExecutionInProgress = status;
    this.dataCapturedOn = new Date().getTime();
  }
}
