import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneConfiguratorComponent } from './one-configurator.component';
import { StoreModule } from '@ngrx/store';

describe('OneConfiguratorComponent', () => {
  let component: OneConfiguratorComponent;
  let fixture: ComponentFixture<OneConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneConfiguratorComponent, StoreModule.forRoot([])],
    })
      .overrideComponent(OneConfiguratorComponent, {
        set: {
          imports: [],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(OneConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
