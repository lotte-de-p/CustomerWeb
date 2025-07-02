export class DateUtil {
  public static inRange(currentDate: Date, startDate: Date, endDate: Date): boolean {
    const curDate = this.convert(currentDate).valueOf();
    const strDate = this.convert(startDate).valueOf();
    const edDate = this.convert(endDate).valueOf();
    return isFinite(curDate) && isFinite(strDate) && isFinite(edDate) ? strDate <= curDate && curDate <= edDate : false;
  }

  private static convert(date: Date): Date | number {
    return date.constructor === Date
      ? date
      : date.constructor === Array
        ? new Date(date[0], date[1], date[2])
        : typeof date === 'object'
          ? new Date(date.getFullYear(), date.getMonth(), date.getDate())
          : NaN;
  }
}
