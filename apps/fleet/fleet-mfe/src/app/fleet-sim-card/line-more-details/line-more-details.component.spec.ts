import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LineMoreDetailsComponent } from './line-more-details.component';
import { expect } from '@jest/globals';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LineMoreDetails', () => {
  let component: LineMoreDetailsComponent;
  let fixture: ComponentFixture<LineMoreDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LineMoreDetailsComponent, HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [{ provide: 'Window', useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });
});
