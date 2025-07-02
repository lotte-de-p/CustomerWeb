import { Component, h, Host, Prop } from '@stencil/core';
import {
  HorizontalTooltipPositions,
  VerticalTooltipPositions,
  HORIZONTAL_TOOLTIP_POSITIONS,
  VERTICAL_TOOLTIP_POSITIONS,
} from './models/tooltip.types';

@Component({
  tag: 'wink-tooltip',
  styleUrls: {
    telenet: 'styles/brands/tooltip.telenet.scss',
    base: 'styles/brands/tooltip.base.scss',
  },
  shadow: true,
})
export class Tooltip {
  @Prop() hideIcon = false;
  @Prop() verticalPosition: VerticalTooltipPositions = VERTICAL_TOOLTIP_POSITIONS.top;
  @Prop() horizontalPosition: HorizontalTooltipPositions = HORIZONTAL_TOOLTIP_POSITIONS.center;
  @Prop() icon? = 'question-shape';

  render() {
    return (
      <Host>
        <div class="tooltip">
          {!this.hideIcon ? (
            <wink-icon icon={this.icon} appearance="default" size="md" icon-color="subtlest"></wink-icon>
          ) : (
            <slot name="trigger" />
          )}
          <span class={`tooltip__content ${this.verticalPosition} ${this.horizontalPosition}`}>
            <slot />
          </span>
        </div>
      </Host>
    );
  }
}
