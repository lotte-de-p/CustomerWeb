import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownAccordionHeaderComponent } from './drop-down-accordion-header.component';
import { NgxsModule } from '@ngxs/store';
import { PricedCphState } from '../../state/priced-cph.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PricedCphDatalayerService } from '../../service/priced-cph-datalayer.service';

describe('DropDownAccordionHeaderComponent', () => {
  let component: DropDownAccordionHeaderComponent;
  let fixture: ComponentFixture<DropDownAccordionHeaderComponent>;
  let pricedCphDatalayerService: PricedCphDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule, NgxsModule.forRoot([PricedCphState])],
    }).compileComponents();

    pricedCphDatalayerService = TestBed.inject(PricedCphDatalayerService);
    fixture = TestBed.createComponent(DropDownAccordionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    pricedCphDatalayerService.pushComponentOpened = jest.fn();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleClick', () => {
    it('should send data to analytics if opened', function () {
      component.rotateChevron = false;
      component.handleClick();
      expect(pricedCphDatalayerService.pushComponentOpened).toHaveBeenCalledTimes(1);
    });
    it('should not send data to analytics if closed', function () {
      component.rotateChevron = true;
      component.handleClick();
      expect(pricedCphDatalayerService.pushComponentOpened).not.toHaveBeenCalled();
    });
  });
});
