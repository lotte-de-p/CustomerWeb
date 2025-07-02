export class FactorSessionStorage {
  type: string;
  id: string;
  successPageUrl: string;

  constructor(type: string, id: string, successPageUrl: string) {
    this.type = type;
    this.id = id;
    this.successPageUrl = successPageUrl;
  }
}
