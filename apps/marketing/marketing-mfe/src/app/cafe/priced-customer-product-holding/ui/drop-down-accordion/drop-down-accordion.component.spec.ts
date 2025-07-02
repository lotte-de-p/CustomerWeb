import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { DropDownAccordionComponent } from './drop-down-accordion.component';
import { PricedCphDatalayerService } from '../../service/priced-cph-datalayer.service';
import { NgxsModule } from '@ngxs/store';
import { PricedCphState } from '../../state/priced-cph.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('DropDownAccordionComponent', () => {
  let component: DropDownAccordionComponent;
  let fixture: ComponentFixture<DropDownAccordionComponent>;
  let pricedCphDatalayerService: PricedCphDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxsModule.forRoot([PricedCphState]), TranslateModule.forRoot()],
      providers: [PricedCphDatalayerService, { provide: 'Window', useValue: {} }],
      schemas: [],
    }).compileComponents();
    pricedCphDatalayerService = TestBed.inject(PricedCphDatalayerService);
    fixture = TestBed.createComponent(DropDownAccordionComponent);
    component = fixture.componentInstance;
    component.overviews = [];
    fixture.detectChanges();
  });

  beforeEach(() => {
    pricedCphDatalayerService.pushComponentViewed = jest.fn();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', function () {
    it('should push data to analytics', function () {
      component.ngOnInit();
      expect(pricedCphDatalayerService.pushComponentViewed).toHaveBeenCalledTimes(1);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
