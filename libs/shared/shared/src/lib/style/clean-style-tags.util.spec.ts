import { cleanStylesFromDom } from './clean-style-tags.util';

describe('cleanStylesFromDom', () => {
  it('should remove child from head elements given more than allowed', () => {
    const dummyHeadCollection = document.getElementsByTagName('head');
    for (let i = 0; i < 22; i++) {
      const htmlStyleElement = document.createElement('style');
      htmlStyleElement.setAttribute('id', i.toString());
      htmlStyleElement.setAttribute('type', 'text/css');
      dummyHeadCollection.item(0)?.appendChild(htmlStyleElement);
    }

    jest.spyOn(document, 'getElementsByTagName').mockReturnValue(dummyHeadCollection);

    cleanStylesFromDom();
    expect(document.getElementsByTagName('head')[0].getElementsByTagName('style').length).toBe(0);
  });
});
