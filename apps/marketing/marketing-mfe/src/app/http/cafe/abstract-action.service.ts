export abstract class AbstractActionService {
  _action: string;
  public set action(value: string) {
    this._action = value;
  }
}
