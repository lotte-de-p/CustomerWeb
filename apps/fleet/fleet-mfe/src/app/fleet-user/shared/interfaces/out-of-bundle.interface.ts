export interface OutOfBundleInterface {
  usedUnits: string;
  unitType: string;
  details?: RawOutOfBundleDetailsInterface[];
}
export interface RawOutOfBundleDetailsInterface {
  type: string;
  value: number;
}
