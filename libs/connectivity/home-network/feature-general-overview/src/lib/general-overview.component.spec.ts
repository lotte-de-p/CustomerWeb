import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralOverviewComponent } from './general-overview.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('GeneralOverviewComponent', () => {
  let component: GeneralOverviewComponent;
  let fixture: ComponentFixture<GeneralOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralOverviewComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
