import { global } from '@storybook/global';
import { StoryContext, StoryFn } from '@storybook/web-components';

export const brandsSwitcherDecorator = (story: StoryFn, context: StoryContext): ReturnType<StoryFn> => {
  const selectedBrand = context.globals['brand'];
  const { frameElement, localStorage } = global;
  const currentBrand = localStorage.getItem('currentBrand');

  localStorage.setItem('currentBrand', selectedBrand);

  if (selectedBrand != currentBrand && frameElement) {
    let selectedtheme = context.globals['theme'].includes('dark') ? '-dark' : '-light';
    context.globals['theme'] = selectedBrand + selectedtheme;

    setTimeout(() => {
      (frameElement as HTMLIFrameElement).contentWindow?.location.reload();
    }, 200);
  }

  const fontTag = document.getElementById('icon-font');
  if (fontTag) {
    fontTag.remove();
  }

  const newFontTag = document.createElement('link');
  newFontTag.id = 'icon-font';
  newFontTag.rel = 'stylesheet';
  newFontTag.href =
    selectedBrand === 'base'
      ? '/assets/base/icons/icons-font/base-icons-font.css'
      : '/assets/telenet/icons/icons-font/telenet-icons-font.css';

  document.head.appendChild(newFontTag);

  return story(context.args, context);
};

export const brandGlobalTypes = {
  name: 'Brand',
  description: 'Brand switcher',
  defaultValue: 'telenet',
  toolbar: {
    title: 'Brands',
    icon: 'mirror',
    items: [
      { title: 'Telenet', value: 'telenet' },
      { title: 'Base', value: 'base' },
    ],
    dynamicTitle: true,
  },
};
