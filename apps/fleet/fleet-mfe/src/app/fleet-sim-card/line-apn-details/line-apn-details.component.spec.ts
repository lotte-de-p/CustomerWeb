import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { LineApnDetailsComponent } from './line-apn-details.component';
import { expect } from '@jest/globals';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LineApnDetails', () => {
  let component: LineApnDetailsComponent;
  let fixture: ComponentFixture<LineApnDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LineApnDetailsComponent, TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [{ provide: 'Window', useValue: {} }],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineApnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });
});
