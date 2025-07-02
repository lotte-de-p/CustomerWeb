export function cleanStylesFromDom(): void {
  const MAX_STYLE_TAGS = 20;
  const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
  const styles: HTMLCollectionOf<HTMLStyleElement> = head && head.getElementsByTagName('style');

  if (styles && styles.length >= MAX_STYLE_TAGS) {
    for (const style of Array.from(styles)) {
      head.removeChild(style);
    }
  }
}
