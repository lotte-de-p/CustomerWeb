export class LineProductDetailsHelper {
  static checkIfValidUri(url: string): boolean {
    const urlRegex = new RegExp(/^((.*(?!\\W))[^\\/])$/g);
    return urlRegex.test(url);
  }
}
