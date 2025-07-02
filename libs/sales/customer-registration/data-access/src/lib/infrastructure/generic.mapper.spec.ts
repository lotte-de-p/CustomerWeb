import { GenericMapper } from './generic.mapper';

describe('GenericMapper', () => {
  interface TestModel {
    name: string;
  }

  let mapper: GenericMapper<TestModel>;

  beforeEach(() => {
    mapper = new GenericMapper<TestModel>();
  });

  it('should convert data to model', () => {
    const data = { name: 'Test Name' };
    const result = mapper.toModel(data);
    expect(result).toEqual(data);
  });

  it('should throw an error if httpStatus is greater than 400', () => {
    const data = { name: 'Test Name' };
    expect(() => mapper.toModel(data, 401)).toThrow(Error);
  });

  it('should not throw an error if httpStatus is 400 or less', () => {
    const data = { name: 'Test Name' };
    expect(() => mapper.toModel(data, 200)).not.toThrow();
    expect(mapper.toModel(data, 200)).toEqual(data);
  });

  it('should not throw an error if httpStatus is undefined', () => {
    const data = { name: 'Test Name' };
    expect(() => mapper.toModel(data)).not.toThrow();
    expect(mapper.toModel(data)).toEqual(data);
  });
});
