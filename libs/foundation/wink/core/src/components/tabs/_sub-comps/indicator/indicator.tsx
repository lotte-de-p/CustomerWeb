import { Component, h, Host, Prop } from '@stencil/core';
import { BUTTON_SIZES, ButtonSize } from '../../../button/models/button.types';
import { INDICATOR_DIRECTIONS, IndicatorDirection } from '../../../../models/directions.types';

@Component({
  tag: 'wink-indicator',
  styleUrls: {
    telenet: 'styles/brands/indicator.telenet.scss',
    base: 'styles/brands/indicator.base.scss',
  },
})
export class Indicator {
  @Prop() direction: IndicatorDirection = INDICATOR_DIRECTIONS.right;
  @Prop() size: ButtonSize = BUTTON_SIZES.sm;

  private readonly iconsNamesMap = new Map([
    [INDICATOR_DIRECTIONS.left, 'chevron-left-small'],
    [INDICATOR_DIRECTIONS.right, 'chevron-right-small'],
    [INDICATOR_DIRECTIONS.up, 'chevron-up-small'],
    [INDICATOR_DIRECTIONS.down, 'chevron-down-small'],
  ]);

  render() {
    return (
      <Host>
        <div class="wrapper">
          <div class="indicator">
            <wink-icon appearance="default" size={this.size} icon={this.iconsNamesMap.get(this.direction)}></wink-icon>
          </div>
        </div>
      </Host>
    );
  }
}
