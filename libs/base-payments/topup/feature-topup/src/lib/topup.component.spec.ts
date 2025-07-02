import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopupComponent } from './topup.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopupComponent', () => {
  let component: TopupComponent;
  let fixture: ComponentFixture<TopupComponent>;

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

    fixture = TestBed.createComponent(TopupComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
