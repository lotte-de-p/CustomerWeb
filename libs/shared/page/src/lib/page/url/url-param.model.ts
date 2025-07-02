export class UrlParam {
  key: string;
  value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  getKeyValue(): string {
    return this.key + '=' + this.value;
  }
}
