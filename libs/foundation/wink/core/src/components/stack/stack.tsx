import { Component, h, Host, Prop } from '@stencil/core';
import { CssClass, STACK_SIZES, Size } from './models/stack.types';

@Component({
  tag: 'wink-stack',
  styleUrls: {
    telenet: 'styles/brands/stack.telenet.scss',
    base: 'styles/brands/stack.base.scss',
  },
  shadow: true,
})
export class Stack {
  @Prop() col: Size = { default: 12 };
  @Prop() gap: Size = { default: STACK_SIZES.xs };
  @Prop() direction?: Size;
  @Prop() justifyContent?: Size;
  @Prop() alignItems?: Size;
  @Prop() wrap?: Size;

  private readonly getStackClasses = (): CssClass => {
    return {
      ...this.getClassesByPostfix('col', 'col'),
      ...this.getClassesByPostfix('gap', 'gap'),
      ...this.getClassesByPostfix('flex-direction', 'direction'),
      ...this.getClassesByPostfix('justify-content', 'justifyContent'),
      ...this.getClassesByPostfix('align-items', 'alignItems'),
      ...this.getClassesByPostfix('flex-wrap', 'wrap'),
    };
  };

  private getClassesByPostfix(postFix: string, prop: string | number): CssClass {
    if (!this[prop]) {
      return {};
    }
    return {
      ...(this[prop].default && { [`${postFix}-${this[prop].default}`]: true }),
      ...(this[prop].sm && { [`${postFix}-${this[prop].sm}-sm`]: true }),
      ...(this[prop].md && { [`${postFix}-${this[prop].md}-md`]: true }),
    };
  }

  render() {
    return (
      <Host class={this.getStackClasses()}>
        <slot />
      </Host>
    );
  }
}
