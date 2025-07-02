import { Component, h, Host, Method, State } from '@stencil/core';
import { ToastElement } from './models/toaster.types';
import { TOAST_TYPES } from './_sub-comps/toast/models/toast.types';

@Component({
  tag: 'wink-toaster',
  styleUrls: {
    telenet: 'styles/brands/toaster.telenet.scss',
    base: 'styles/brands/toaster.base.scss',
  },
  shadow: false,
})
export class Toaster {
  @State() toasts: ToastElement[] = [];

  @Method()
  async winkCreateToast(toast: ToastElement) {
    this.toasts = [...this.toasts, toast];
  }

  render() {
    return (
      <Host aria-live="polite" aria-atomic="true">
        {this.toasts.map((toast) => (
          <wink-toast
            appearance={toast.appearance || TOAST_TYPES.actionable}
            text={toast.text || ''}
            duration={toast.duration || 6000}
            href={toast.href || '#'}
            target={toast.target || '_self'}
            linkText={toast.linkText || 'link'}
            is-open></wink-toast>
        ))}
        <slot></slot>
      </Host>
    );
  }
}
