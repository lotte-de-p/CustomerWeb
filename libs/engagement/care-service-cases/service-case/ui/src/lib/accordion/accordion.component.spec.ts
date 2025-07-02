import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AccordionComponent, AccordionItemComponent } from './accordion.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { expect } from '@jest/globals';

describe('AccordionComponent', () => {
  let component: TestAccordionComponent;
  let fixture: ComponentFixture<TestAccordionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestAccordionComponent],
      imports: [AccordionComponent, AccordionItemComponent, CommonModule],
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize', () => {
    expect(component).toBeDefined();
  });

  it('should render and be toggleable', () => {
    const contentPanel = '.accordion__panel';
    expect(fixture.debugElement.query(By.css('.accordion__button h5')).nativeElement.textContent).toEqual('test title');
    expect(fixture.debugElement.query(By.css(contentPanel))).toBeFalsy();
    fixture.debugElement.query(By.css('.accordion__button')).nativeElement.click();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(contentPanel))).toBeTruthy();
    expect(fixture.debugElement.query(By.css(contentPanel)).nativeElement.textContent).toEqual('this is the content');
  });
});

@Component({
  selector: 'care-test-accordion',
  template: ` <care-accordion>
    <care-accordion-item [title]="'test title'">this is the content</care-accordion-item>
  </care-accordion>`,
})
export class TestAccordionComponent {}
