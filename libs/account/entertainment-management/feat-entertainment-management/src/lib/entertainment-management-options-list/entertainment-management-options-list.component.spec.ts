import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntertainmentManagementOptionsListComponent } from './entertainment-management-options-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('EntertainmentManagementOptionsListComponent', () => {
  let component: EntertainmentManagementOptionsListComponent;
  let fixture: ComponentFixture<EntertainmentManagementOptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EntertainmentManagementOptionsListComponent,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot({}),
      ],
      providers: [provideMockStore(), { provide: 'Window', useValue: window }],
    }).compileComponents();

    fixture = TestBed.createComponent(EntertainmentManagementOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
