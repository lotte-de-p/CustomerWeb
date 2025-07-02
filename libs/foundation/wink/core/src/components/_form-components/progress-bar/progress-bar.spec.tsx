import { newSpecPage } from '@stencil/core/testing';
import { ProgressBar } from './progress-bar';
import { resetIdsInTest } from '../../../utils/utils';

describe('wink-progress-bar', () => {
  it('should create an instance of ProgressBar class component', () => {
    const comp = new ProgressBar();

    expect(comp).toBeInstanceOf(ProgressBar);
  });

  it('should render the element wink-progress-bar', async () => {
    const page = await newSpecPage({
      components: [ProgressBar],
      html: `<wink-progress-bar></wink-progress-bar>`,
    });

    expect(resetIdsInTest(page.root)).toEqualHtml(`
    <wink-progress-bar>
        <progress class="progress-bar progress-bar-default" max="100" value="0">0%</progress>
    </wink-progress-bar>
  `);
  });

  it('should render the element when you change the trailColor prop', async () => {
    const page = await newSpecPage({
      components: [ProgressBar],
      html: `<wink-progress-bar trail-color="transparent"></wink-progress-bar>`,
    });

    expect(resetIdsInTest(page.root)).toEqualHtml(`
      <wink-progress-bar trail-color="transparent">
      <progress class="progress-bar progress-bar-transparent" max="100" value="0">0%</progress>
      </wink-progress-bar>
    `);
  });

  it('should render the element when you change the percent prop', async () => {
    const page = await newSpecPage({
      components: [ProgressBar],
      html: `<wink-progress-bar percent="90"></wink-progress-bar>`,
    });

    expect(resetIdsInTest(page.root)).toEqualHtml(`
    <wink-progress-bar percent="90">
      <progress class="progress-bar progress-bar-default" max="100" value="90">
        90%
      </progress>
    </wink-progress-bar>
    `);
  });
});
