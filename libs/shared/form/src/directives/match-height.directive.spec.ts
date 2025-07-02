import { Component, Input } from '@angular/core';
import { ClientBrowserTypeService } from '@telenet/ng-lib-page';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchHeightDirective } from '.';

@Component({
  template: `<span [matchHeightClass]="matchHeightClass"></span>`,
})
export class TestComponent {
  @Input()
  matchHeightClass: string;
}

describe('MatchHeightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, MatchHeightDirective],
      providers: [ClientBrowserTypeService],
    }).createComponent(TestComponent);

    component = fixture.componentInstance;
  });

  describe('Creation', () => {
    it('should be created', function () {
      expect(component).toBeTruthy();
    });

    it('should ', function () {
      component.matchHeightClass = 'matchHeightClass';
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });
});
