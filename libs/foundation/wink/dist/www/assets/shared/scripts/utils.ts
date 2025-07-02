import { themesSwatchesMap } from '../maps';

// TO repeat element in case you need to test performance
export function repeat(length: number, aThing: any) {
  return Array.from({ length }, () => aThing);
}

export function getStorybookPreviewIframeCssBg(selectedTheme: string): string {
  return themesSwatchesMap.get(selectedTheme) as string;
}

export function capitalize(s: string) {
  if (s && typeof s === 'string') {
    return s.trim().charAt(0).toUpperCase() + s.slice(1);
  }
  return 'CHECK YOUR STRING!';
}

export function replaceDashesWithSpace(s: string) {
  return s.replace(/-/g, ' ').trim();
}
