import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { UUId } from '../../utils/utils';
import { TabTypes, TAB_TYPES } from './models/tabs.types';
import { INDICATOR_DIRECTIONS, IndicatorDirection } from '../../models/directions.types';

@Component({
  tag: 'wink-tabs',
  styleUrls: {
    telenet: 'styles/brands/tabs.telenet.scss',
    base: 'styles/brands/tabs.base.scss',
  },
  shadow: true,
})
export class Tabs {
  @Element() host!: HTMLWinkTabsElement;

  @Prop() appearance: TabTypes = TAB_TYPES.container;

  @State() activeTabIndex = 1;
  @State() isScrollable = false;
  @State() tabElements: Element[] = [];
  @State() uuidMap = new Map();

  private tabList!: HTMLElement;
  private tabItems!: NodeListOf<HTMLElement>;

  private readonly handleClickOnButton = (index: number) => {
    this.activeTabIndex = index;
    this.handleScroll();
    this.tabItems[this.activeTabIndex - 1].focus();
  };

  private readonly handleKeyDown = (e: { key: string }) => {
    this.assignTheRightActiveTabIndex(e.key);
  };

  private readonly handleKeyDownIndicator = (e: { key: string }, direction: IndicatorDirection) => {
    if (e.key === 'Enter') {
      direction === INDICATOR_DIRECTIONS.left
        ? this.handleScroll(INDICATOR_DIRECTIONS.left)
        : this.handleScroll(INDICATOR_DIRECTIONS.right);
    }
  };

  private assignTheRightActiveTabIndex(key: string): void {
    const supportedKeysMap = new Map<string, () => void>([
      [
        'ArrowRight',
        () => {
          this.handleScroll(INDICATOR_DIRECTIONS.right);
        },
      ],
      [
        'ArrowLeft',
        () => {
          this.handleScroll(INDICATOR_DIRECTIONS.left);
        },
      ],
      [
        'Home',
        () => {
          if (this.activeTabIndex !== 1) {
            this.activeTabIndex = 1;
          }
        },
      ],
      [
        'End',
        () => {
          if (this.activeTabIndex !== this.tabElements.length) {
            this.activeTabIndex = this.tabElements.length;
          }
        },
      ],
    ]);

    const handler = supportedKeysMap.get(key);

    if (handler) {
      handler();
    }
  }

  private findNextTabItemId(direction: IndicatorDirection) {
    if (direction === INDICATOR_DIRECTIONS.left) {
      for (let i = this.activeTabIndex - 1; i > 0; i--) {
        const nextItem = this.tabList.querySelector('#tab-' + i);
        if (nextItem && !nextItem.hasAttribute('disabled')) {
          return i;
        }
      }
    } else {
      for (let i = this.activeTabIndex + 1; i < this.tabElements.length + 1; i++) {
        const nextItem = this.tabList.querySelector('#tab-' + i);
        if (nextItem && !nextItem.hasAttribute('disabled')) {
          return i;
        }
      }
    }
    return undefined;
  }

  private handleScroll(direction?: IndicatorDirection) {
    if (direction) {
      this.activeTabIndex = this.findNextTabItemId(direction) || this.activeTabIndex;
    }

    const containerRect = this.tabList.getBoundingClientRect();
    const containerCenter = containerRect.width / 2;
    const activeTab = this.tabList.querySelector('#tab-' + this.activeTabIndex);

    if (activeTab) {
      const activeRect = activeTab.getBoundingClientRect();
      const activeCenter = activeRect.left + activeRect.width / 2;
      const scrollOffset = activeCenter - containerCenter;

      let scrollLeft = this.tabList.scrollLeft + scrollOffset - 8;
      if (this.activeTabIndex === 1) {
        scrollLeft = 0;
      }

      if (this.activeTabIndex === this.tabElements.length) {
        scrollLeft = this.tabList.scrollWidth;
      }

      this.tabList.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }

  private checkIfScrollable() {
    this.tabList = this.host?.shadowRoot?.querySelector('.tab-list') as HTMLElement;
    this.tabItems = this.host?.shadowRoot?.querySelectorAll('.tab') as NodeListOf<HTMLElement>;

    let tabitemWidth = 0;
    this.tabItems.forEach((item) => {
      tabitemWidth = tabitemWidth + item.offsetWidth;
    });

    if (tabitemWidth >= this.tabList.offsetWidth + 4) {
      this.isScrollable = true;
    } else {
      this.isScrollable = false;
    }
  }

  private renderSlots(type: string) {
    return this.tabElements.map((item, index) => {
      const slotname = (item.slot && item.slot.replace('tab-', '')) || `${index + 1}`;
      const computedSlotName = type === 'tabpanel' ? `tabpanel-${slotname}` : `tab-${slotname}`;

      let uuid = this.uuidMap.get(computedSlotName);
      if (uuid === undefined) {
        uuid = UUId();
        this.uuidMap.set(computedSlotName, uuid);
      }

      return type === 'tabpanel' ? (
        <div
          key={uuid}
          id={`tabpanel-${index + 1}`}
          role="tabpanel"
          aria-labelledby={`tab-${index + 1}`}
          tabIndex={this.activeTabIndex === index + 1 ? 0 : -1}
          class={{ 'is-hidden': this.activeTabIndex !== index + 1 }}>
          <slot name={`tab-${slotname}`}></slot>
        </div>
      ) : (
        <button
          key={uuid}
          id={`tab-${index + 1}`}
          type="button"
          role="tab"
          disabled={item.hasAttribute('disabled')}
          class={`tab ${this.activeTabIndex === index + 1 ? 'is-active-tab' : ''}`}
          aria-selected={`${this.activeTabIndex === index + 1}`}
          aria-controls={`tabpanel-${index + 1}`}
          aria-describedby={`tabpanel-${index + 1}`}
          onClick={() => this.handleClickOnButton(index + 1)}
          onKeyDown={this.handleKeyDown}>
          <div class="tab-content">
            <p class="tab-title"> {item.getAttribute('data-title')}</p>
            {item.getAttribute('data-subtitle')}
          </div>
        </button>
      );
    });
  }

  async componentWillLoad() {
    const tabDivs = this.host?.querySelectorAll('div[slot*="tab-"]');
    this.tabElements = Array.from(tabDivs);
  }

  componentDidLoad() {
    this.checkIfScrollable();
  }

  render() {
    return (
      <Host>
        <div class={`tabs tabs-${this.appearance}`}>
          <div class={`tab-header ${this.isScrollable ? 'is-scrollable' : ''}`}>
            <div
              class="tab-list"
              role="tablist"
              aria-labelledby="tablist-1"
              ref={(el) => (this.tabList = el as HTMLDivElement)}>
              {this.renderSlots('tab')}
            </div>

            {this.isScrollable && this.activeTabIndex > 1 && (
              <wink-indicator
                class="scroll-button scroll-button-left"
                direction="left"
                tabIndex={1}
                onKeyDown={(event) => this.handleKeyDownIndicator(event, INDICATOR_DIRECTIONS.left)}
                onClick={() => this.handleScroll(INDICATOR_DIRECTIONS.left)}></wink-indicator>
            )}
            {this.isScrollable && this.activeTabIndex !== this.tabElements.length && (
              <wink-indicator
                class="scroll-button scroll-button-right"
                direction="right"
                tabIndex={1}
                onKeyDown={(event) => this.handleKeyDownIndicator(event, INDICATOR_DIRECTIONS.right)}
                onClick={() => this.handleScroll(INDICATOR_DIRECTIONS.right)}></wink-indicator>
            )}
          </div>

          {this.renderSlots('tabpanel')}
        </div>
      </Host>
    );
  }
}
