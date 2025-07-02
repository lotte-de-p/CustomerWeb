import { TogglePanelDirective } from './panel-toggler.directive';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { CommonModule } from '@angular/common';

@Component({
  imports: [TogglePanelDirective, CommonModule],
  standalone: true,
  template: `
    <div class="sibling-panel">
      <div class="header" tgMarketingTogglePanel>title</div>
      <div class="panel" [class.accordion--panel__collapsed]="isCollapsed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
    </div>

    <div class="nested-panel">
      <div class="header" [tgMarketingTogglePanel]="'panel'">title</div>
      <div>
        <div>
          <div class="panel" [class.accordion--panel__collapsed]="isCollapsed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ['accordion--panel__collapsed { max-height: 0; overflow: hidden; }'],
})
class TestComponent {
  @Input() isCollapsed: boolean;
}

describe('TogglePanelDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let nativeEl: HTMLElement;

  let siblingPanel: Element | undefined | null;
  let NestedPanel: Element | null | undefined;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;

    fixture.detectChanges();
  });

  describe('TogglePanelDirective when the panel is direct sibling', () => {
    let header: HTMLElement | undefined | null;
    let panel: HTMLElement;
    let scrollHeight: number;

    beforeEach(() => {
      siblingPanel = nativeEl.querySelector('.sibling-panel');
      header = siblingPanel?.querySelector('.header');
      panel = header?.nextElementSibling as HTMLElement;
      scrollHeight = 500;

      fixture.detectChanges();
    });

    it('should add collapsed class when click', () => {
      component.isCollapsed = false;
      fixture.detectChanges();

      header?.click();
      expect(panel.classList).toContain(TogglePanelDirective.CLASS_PANEL_COLLAPSED);
    });

    it('should not remove collapsed class when click', () => {
      component.isCollapsed = true;
      fixture.detectChanges();

      header?.click();
      expect(panel.classList).toContain(TogglePanelDirective.CLASS_PANEL_COLLAPSED);
    });

    it('should collapse the panel when click', () => {
      jest.spyOn(panel, 'scrollHeight', 'get').mockReturnValue(scrollHeight);

      component.isCollapsed = false;
      fixture.detectChanges();

      header?.click();
      expect(getComputedStyle(panel).maxHeight).toEqual('');
    });

    it('should expend the panel when click', () => {
      jest.spyOn(panel, 'scrollHeight', 'get').mockReturnValue(scrollHeight);

      component.isCollapsed = true;
      fixture.detectChanges();

      header?.click();
      expect(getComputedStyle(panel).maxHeight).toEqual(`${scrollHeight}px`);
    });
  });

  describe('TogglePanelDirective when the panel is nested inside other elements', () => {
    let header: HTMLElement | null | undefined;
    let panel: HTMLElement | null | undefined;
    let scrollHeight: number;

    beforeEach(() => {
      NestedPanel = nativeEl.querySelector('.nested-panel');
      header = NestedPanel?.querySelector('.header');
      panel = header?.parentElement?.querySelector('.panel') as HTMLElement;
      scrollHeight = 500;

      fixture.detectChanges();
    });

    it('should add collapsed class when click nested panel', () => {
      component.isCollapsed = false;
      fixture.detectChanges();

      header?.click();
      expect(panel?.classList).toContain(TogglePanelDirective.CLASS_PANEL_COLLAPSED);
    });

    it('should not remove collapsed class when click nested panel', () => {
      component.isCollapsed = true;
      fixture.detectChanges();

      header?.click();
      expect(panel?.classList).toContain(TogglePanelDirective.CLASS_PANEL_COLLAPSED);
    });

    it('should collapse the panel when click nested panel', () => {
      if (panel) jest.spyOn(panel, 'scrollHeight', 'get').mockReturnValue(scrollHeight);

      component.isCollapsed = false;
      fixture.detectChanges();

      header?.click();
      if (panel) expect(getComputedStyle(panel).maxHeight).toEqual('');
    });

    it('should expend the panel when click nested panel', () => {
      if (panel) jest.spyOn(panel, 'scrollHeight', 'get').mockReturnValue(scrollHeight);

      component.isCollapsed = true;
      fixture.detectChanges();

      header?.click();
      if (panel) expect(getComputedStyle(panel).maxHeight).toEqual(`${scrollHeight}px`);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
