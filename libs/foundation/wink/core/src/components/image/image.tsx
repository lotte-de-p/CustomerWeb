import { Component, h, Host, Prop } from '@stencil/core';
import { LOADING_TYPES, LoadingType } from './models/image.types';
import { BREAKPOINTS } from '../../models/breakpoints.types';

@Component({
  tag: 'wink-img',
  styleUrls: {
    telenet: 'styles/brands/image.telenet.scss',
    base: 'styles/brands/image.base.scss',
  },
  shadow: true,
})
export class Image {
  @Prop({ reflect: true }) srcDesktop = '';
  @Prop() srcTablet?: string;
  @Prop() srcMobile?: string;
  @Prop() alt?: string;
  @Prop() loading: LoadingType = LOADING_TYPES.lazy;

  render() {
    const altText = this.srcDesktop?.length > 0 && this.alt ? this.alt : `Image of ${window.location.host}`;
    return (
      <Host>
        {this.srcDesktop ? (
          <picture>
            {this.srcMobile && <source srcSet={this.srcMobile} media={BREAKPOINTS.mobile} />}
            {this.srcTablet && <source srcSet={this.srcTablet} media={BREAKPOINTS.tablet} />}
            <img src={this.srcDesktop} alt={altText} loading={this.loading} />
          </picture>
        ) : (
          <p>Please set src </p>
        )}
      </Host>
    );
  }
}
