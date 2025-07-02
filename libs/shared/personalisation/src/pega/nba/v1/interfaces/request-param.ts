export class RequestParam {
  constructor(
    public key: string,
    public value: string
  ) {
    this.key = key;
    this.value = value;
  }
}

export enum Param {
  sdata = 'sdata',
  src = 'src',
  cid = 'cid',
  sa = 'sa',
  did = 'did',
  tid = 'tid',
  pt = 'pt',
  aid = 'aid',
  v = 'v',
  t = 't',
}
