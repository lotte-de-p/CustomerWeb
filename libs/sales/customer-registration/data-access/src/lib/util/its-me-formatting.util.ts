import { ItsMeResponseInterface } from './../infrastructure/its-me.interface';

export class ItsMeFormattingUtil {
  static formatItsMeResponse(itsMeResponse: ItsMeResponseInterface): ItsMeResponseInterface {
    itsMeResponse.cardIDNumber = this.transformBelgianEID(itsMeResponse.cardIDNumber);
    itsMeResponse.rrn = this.transformNRN(itsMeResponse.rrn);
    itsMeResponse.firstName = this.formatFirstLetterCapital(itsMeResponse.firstName);
    itsMeResponse.lastName = this.formatFirstLetterCapital(itsMeResponse.lastName);
    itsMeResponse.birthLocation = this.formatFirstLetterCapital(itsMeResponse.birthLocation);
    if (itsMeResponse.customerAddress?.street)
      itsMeResponse.customerAddress.street = itsMeResponse.customerAddress.street.replace(/\([^()]*\)/g, '');
    return itsMeResponse;
  }

  private static transformBelgianEID(input: string): string {
    if (input.length !== 12 || !/^[a-zA-Z0-9]{3}\d{7}\d{2}$/.test(input)) {
      throw new Error('Its me eid response is not valid.');
    }

    const part1 = input.slice(0, 3);
    const part2 = input.slice(3, 10);
    const checksum = input.slice(10, 12);

    return `${part1}-${part2}-${checksum}`;
  }

  private static transformNRN(input: string): string {
    if (input.length !== 11 || !/^\d{2}\d{2}\d{2}\d{3}\d{2}$/.test(input)) {
      throw new Error('Its me nrn response is not valid.');
    }

    const yy = input.slice(0, 2);
    const mm = input.slice(2, 4);
    const dd = input.slice(4, 6);
    const seq = input.slice(6, 9);
    const checksum = input.slice(9, 11);

    return `${yy}.${mm}.${dd}-${seq}.${checksum}`;
  }

  private static formatFirstLetterCapital(input: string): string {
    const parts = input.toLowerCase().split(/[- ]/);
    const capitalizedParts = parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1));
    const delimiter = input.includes('-') ? '-' : ' ';
    return capitalizedParts.join(delimiter);
  }
}
