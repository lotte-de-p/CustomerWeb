import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedSpecComponent } from './detailed-spec.component';

describe('DetailedSpecComponent', () => {
  let component: DetailedSpecComponent;
  let fixture: ComponentFixture<DetailedSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedSpecComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
