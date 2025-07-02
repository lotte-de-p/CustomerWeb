import { MapFunctionPipe } from './map-to.pipe';

describe('MapFunctionPipe', () => {
  const pipe: MapFunctionPipe = new MapFunctionPipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should correctly transform value using the provided function', () => {
    const value = 2;
    const functionToMap = (x: number) => x * x;
    expect(pipe.transform(value, functionToMap)).toBe(4);
  });

  it('should handle different types of functions', () => {
    const stringValue = 'test';
    const stringFunction = (str: string) => str.toUpperCase();
    expect(pipe.transform(stringValue, stringFunction)).toBe('TEST');
  });

  it('should return undefined for undefined input', () => {
    expect(pipe.transform(undefined, (x: number | undefined) => x)).toBeUndefined();
  });
});
