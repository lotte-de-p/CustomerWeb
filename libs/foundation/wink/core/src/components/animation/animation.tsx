import { Component, h, Host, Prop, State, Element, Watch, Method } from '@stencil/core';
import { ANIMATION_STATES } from './models/animation.types';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  tag: 'wink-animation',
  styleUrls: {
    telenet: 'styles/brands/animation.telenet.scss',
    base: 'styles/brands/animation.base.scss',
  },
  shadow: true,
})
export class Animation {
  @Element() host!: HTMLWinkAnimationElement;

  @Prop() src = '';
  @Prop() count = 0;
  @Prop({ reflect: true, mutable: true }) autoplay = false;
  @Prop({ reflect: true }) controls = false;
  @Prop() clickToPlay = false;

  @State() lottie: AnimationItem = {} as AnimationItem;
  @State() status: string = ANIMATION_STATES.play;
  @State() loaded = false;

  @Watch('src')
  @Watch('count')
  @Watch('autoplay')
  @Watch('controls')
  watchPropHandler(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue && this.loaded) {
      this.loadAnimation();
    }
  }

  @Method()
  async toggleAnimation() {
    if (this.status === ANIMATION_STATES.stop || this.status === ANIMATION_STATES.pauze) {
      this.play();
      this.autoplay = true;
    } else {
      this.pause();
    }
  }

  componentDidLoad() {
    this.loadAnimation();

    if (!this.autoplay) {
      this.pause();
    }
  }

  private loadAnimation() {
    const container = this.host.shadowRoot?.querySelector('.animation-wrapper');
    if (container) {
      if (this.lottie.isLoaded) {
        this.lottie?.destroy();
      }
      container.innerHTML = '';

      this.lottie = lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: this.count > 0 ? this.count : true,
        autoplay: this.autoplay,
        path: this.src,
      });

      this.loaded = true;
    }

    if (this.autoplay) {
      this.play();
      this.status = ANIMATION_STATES.play;
    }

    this.lottie.addEventListener('complete', () => {
      this.status = ANIMATION_STATES.stop;
    });
  }

  private play() {
    if (this.status === ANIMATION_STATES.stop) {
      this.lottie.goToAndPlay(0);
    } else {
      this.lottie.play();
    }

    this.status = ANIMATION_STATES.play;
  }

  private pause() {
    this.status = ANIMATION_STATES.pauze;
    this.lottie.pause();
  }

  private stop() {
    this.status = ANIMATION_STATES.stop;
    this.lottie.stop();
  }

  private toggleAnimationOnClick() {
    if (!this.clickToPlay) return;
    if (this.status === ANIMATION_STATES.stop || this.status === ANIMATION_STATES.pauze) {
      this.play();
    } else {
      this.pause();
    }
  }

  private renderControls() {
    return (
      <div class="controls">
        {this.lottie.isPaused ? (
          <wink-button
            element="button"
            type="button"
            appearance="primary"
            size="sm"
            icon="play"
            onClick={this.play.bind(this)}></wink-button>
        ) : (
          <wink-button
            element="button"
            type="button"
            appearance="primary"
            size="sm"
            icon="pause"
            onClick={this.pause.bind(this)}></wink-button>
        )}

        <wink-button
          element="button"
          type="button"
          appearance="primary"
          size="sm"
          icon="stop"
          onClick={this.stop.bind(this)}></wink-button>
      </div>
    );
  }

  render() {
    return (
      <Host>
        <div onClick={() => this.toggleAnimationOnClick()} class="animation-wrapper" data-status={this.status}></div>
        {this.lottie && this.controls && this.renderControls()}
      </Host>
    );
  }
}
