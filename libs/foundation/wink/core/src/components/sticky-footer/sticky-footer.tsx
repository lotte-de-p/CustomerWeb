import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'wink-sticky-footer',
  styleUrls: {
    telenet: 'styles/brands/sticky-footer.telenet.scss',
    base: 'styles/brands/sticky-footer.base.scss',
  },
  scoped: true,
})
export class StickyFooter {
  @Prop() current = 0;
  @Prop() final = 0;
  @Prop() buttonLeftText = 'Back';
  @Prop() buttonRightText = 'Next';

  private calculatePercentage() {
    return this.final > 0 ? (this.current * 100) / this.final : 0;
  }
  private hasProgress() {
    return this.final > 0;
  }

  render() {
    return (
      <Host>
        {this.hasProgress() && (
          <wink-progress-bar
            percent={this.calculatePercentage()}
            trail-color="default"
            progressId=""></wink-progress-bar>
        )}
        <div class="container">
          <div class="section-left">
            {this.buttonLeftText && (
              <wink-button
                appearance="secondary"
                size="md"
                width="full"
                status="none"
                element="button"
                type="button"
                text={this.buttonLeftText}></wink-button>
            )}
          </div>
          {this.hasProgress() && (
            <wink-paragraph size="regular" appearance="body" paragraph-color="default">
              {this.current}/{this.final}
            </wink-paragraph>
          )}
          <div class="section-right">
            {this.buttonRightText && (
              <wink-button
                appearance="primary"
                size="md"
                width="full"
                status="none"
                element="button"
                type="button"
                text={this.buttonRightText}></wink-button>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
