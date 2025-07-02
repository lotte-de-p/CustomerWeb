import { ExtractDobUtil } from './extract-dob.util';
const DATE_DECEMBER_TWELVE = '2000/12/12';

const invalidDateError = Error('Invalid date format');

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2024, 4, 20));
});

describe('ExtractDobUtil', () => {
  it('should extract and set the date of birth correctly from NRN', () => {
    const DoBFromNRN = '93.12.31';
    const result = ExtractDobUtil.extractDateOfBirth(DoBFromNRN);

    expect(result.getDate().toString()).toBe('31');
    expect(result.getMonth().toString()).toBe('11');
    expect(result.getFullYear().toString()).toBe('1993');
  });

  it('should handle NRN with invalid date parts 00 as 01', () => {
    const DoBFromNRN = '93.00.00';

    const result = ExtractDobUtil.extractDateOfBirth(DoBFromNRN);

    expect(result.getDate().toString()).toBe('1');
    expect(result.getMonth().toString()).toBe('0');
    expect(result.getFullYear().toString()).toBe('1993');
  });

  it('should throw an error for non-numeric values', () => {
    expect(() => ExtractDobUtil.extractDateOfBirth('yy.mm.dd')).toThrow(invalidDateError);
  });

  it('should handle NRN with invalid date parts', () => {
    const DoBFromNRN = '93.13.35';

    const result = ExtractDobUtil.extractDateOfBirth(DoBFromNRN);

    expect(result.getDate().toString()).toBe('4');
    expect(result.getMonth().toString()).toBe('1');
    expect(result.getFullYear().toString()).toBe('1994');
  });

  it('should throw an error for invalid date format', () => {
    expect(() => ExtractDobUtil.extractDateOfBirth('invalid')).toThrow(invalidDateError);
  });

  it('should throw an error when year, month, or day is NaN', () => {
    expect(() => ExtractDobUtil.extractDateOfBirth('93..')).toThrow(invalidDateError);
  });
  it('should throw an error when input length is insufficient', () => {
    expect(() => ExtractDobUtil.extractDateOfBirth('93.12')).toThrow(invalidDateError);
  });
  // should be synced to the year in beforeAll
  const currentYearLastTwoDigits = 24;
  it.each([
    { offset: -1, expectedYear: 1923 },
    { offset: 0, expectedYear: 1924 },
    { offset: 1, expectedYear: 1925 },
    { offset: 99 - currentYearLastTwoDigits, expectedYear: 1999 },
    { offset: 0 - currentYearLastTwoDigits, expectedYear: 2000 },
    { offset: 1 - currentYearLastTwoDigits, expectedYear: 2001 },
    { offset: 13 - currentYearLastTwoDigits, expectedYear: 2013 },
    { offset: 14 - currentYearLastTwoDigits, expectedYear: 1914 },
    { offset: 15 - currentYearLastTwoDigits, expectedYear: 1915 },
  ])(`should calculate the correct century based on the current year + offset: $offset`, ({ offset, expectedYear }) => {
    const lastTwoDigitsYearNRN = String(currentYearLastTwoDigits + offset).padStart(2, '0');
    const DoBFromNRN = `${lastTwoDigitsYearNRN}.05.13`;

    const result = ExtractDobUtil.extractDateOfBirth(DoBFromNRN);

    expect(result.getDate().toString()).toBe('13');
    expect(result.getMonth().toString()).toBe('4');
    expect(result.getFullYear().toString()).toBe(expectedYear.toString());
  });
  describe('parseDateOfBirth', () => {
    it('should parse date of birth to DD/mm/yyyy format', () => {
      const result = ExtractDobUtil.parseDateOfBirth('12', '12', '2000');
      expect(result).toEqual(new Date(DATE_DECEMBER_TWELVE));
    });
  });
  describe('monthAsString', () => {
    it('should return month from date of birth', () => {
      const result = ExtractDobUtil.getMonthAsString(new Date(DATE_DECEMBER_TWELVE));
      expect(result).toEqual('12');
    });
  });
  describe('formatDOB', () => {
    it('should return format date of birth', () => {
      const result = ExtractDobUtil.formatDOB(new Date(DATE_DECEMBER_TWELVE));
      expect(result).toEqual('2000-12-12');
    });
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
