export class ExtractDobUtil {
  private static readonly TEN_YEARS = 10;

  static extractDateOfBirth(DoBFromNRN: string): Date {
    const replaced = DoBFromNRN.replace(/\./g, '');
    const matches = replaced ? replaced.match(/.{1,2}/g) : null;

    if (!matches || matches.length < 3) {
      throw new Error('Invalid date format');
    }

    const [year, month, day] = matches
      .slice(0, 3)
      .map(Number)
      .map((val: number, index: number) => {
        return index > 0 && !val ? 1 : val;
      });

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      throw new Error('Invalid date format');
    }

    const extractedYear = this.calculateCenturyFromNRN(year);

    return new Date(extractedYear, month - 1, day);
  }

  private static calculateCenturyFromNRN(yearFromNRN: number): number {
    const currentYear = new Date().getFullYear();
    const century = Math.floor(currentYear / 100);
    const lastTwoDigitsCurrentYear = currentYear % 100;

    if (yearFromNRN >= lastTwoDigitsCurrentYear - this.TEN_YEARS) {
      return (century - 1) * 100 + yearFromNRN;
    } else {
      return century * 100 + yearFromNRN;
    }
  }

  static parseDateOfBirth(day: string, month: string, year: string): Date {
    return new Date(year + '/' + month + '/' + day);
  }

  static getMonthAsString(dateOfBirth: Date): string {
    return dateOfBirth ? dateOfBirth.getMonth() + 1 + '' : '';
  }

  static formatDOB(date: Date | undefined): string {
    let formattedDOB = '';
    if (date) {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      formattedDOB = `${year}-${month}-${day}`;
    }
    return formattedDOB;
  }
}
