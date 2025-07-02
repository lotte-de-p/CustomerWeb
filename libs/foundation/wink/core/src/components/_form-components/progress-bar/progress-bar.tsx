import { Component, h, Host, Prop } from '@stencil/core';
import { PROGRESS_BGS, ProgressBgs } from './models/progress-bar.types';
import { UUId } from '../../../utils/utils';
@Component({
  tag: 'wink-progress-bar',
  styleUrls: {
    telenet: 'styles/brands/progress-bar.telenet.scss',
    base: 'styles/brands/progress-bar.base.scss',
  },
  scoped: true,
})
export class ProgressBar {
  @Prop() percent = 0;
  @Prop() trailColor: ProgressBgs = PROGRESS_BGS.default;
  @Prop() ariaLabel?: string;
  @Prop() progressId!: string;
  @Prop() showLabel = false;

  componentDidRender() {
    this.progressId = this.progressId?.length > 0 ? this.progressId : UUId();
  }
  render() {
    return (
      <Host>
        {this.ariaLabel && this.showLabel && <label htmlFor={this.progressId}>{this.ariaLabel}</label>}
        <progress
          id={this.progressId}
          value={this.percent}
          max="100"
          class={`progress-bar  progress-bar-${this.trailColor}`}>
          {this.percent}%
        </progress>
      </Host>
    );
  }
}
