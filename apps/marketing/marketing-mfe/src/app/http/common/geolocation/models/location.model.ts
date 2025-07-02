export class Location {
  postalCode: string;
  location: string;

  toString(): string {
    return `${this.postalCode} - ${this.location}`;
  }
}
