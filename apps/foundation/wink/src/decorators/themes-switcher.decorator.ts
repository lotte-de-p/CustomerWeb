import {
  capitalize,
  getStorybookPreviewIframeCssBg,
  replaceDashesWithSpace,
  themesSwatchesMap,
} from '@telenet/wink-core/shared';
import { global } from '@storybook/global';
import { StoryContext, StoryFn } from '@storybook/web-components';

export const themesSwitcherDecorator = (story: StoryFn, context: StoryContext): ReturnType<StoryFn> => {
  const { frameElement, localStorage, document, location } = global;
  const { canvasElement, globals, args } = context;
  const selectedTheme = globals['theme'];
  const currentTheme = localStorage.getItem('currentTheme');

  if (selectedTheme !== currentTheme) {
    localStorage.setItem('currentTheme', selectedTheme);
  }

  if (frameElement && (currentTheme || selectedTheme !== currentTheme)) {
    (frameElement as HTMLIFrameElement).style.background = getStorybookPreviewIframeCssBg(selectedTheme);
    canvasElement.setAttribute('theme', `${selectedTheme || currentTheme}-theme`);
  }

  if (document && location.href.includes('viewMode=story')) {
    const body = document.querySelector('body');
    if (body) {
      body.style.background = getStorybookPreviewIframeCssBg(selectedTheme);
      body.setAttribute('theme', `${selectedTheme || currentTheme}-theme`);
    }
  }

  return story(args, context);
};

// Themes switcher
export const themeGlobalTypes = {
  name: 'Themes',
  description: 'theme switcher',
  defaultValue: 'telenet-light',
  toolbar: {
    icon: 'paintbrush',
    items: [...themesSwatchesMap]
      .filter(([v]) => v.includes(localStorage.getItem('currentBrand') || ''))
      .map(([v]) => ({
        title: capitalize(replaceDashesWithSpace(v.replace(localStorage.getItem('currentBrand') || '', ''))),
        value: v,
      })),
    dynamicTitle: true,
  },
};
