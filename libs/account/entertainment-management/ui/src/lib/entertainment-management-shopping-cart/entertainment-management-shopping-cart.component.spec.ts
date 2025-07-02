import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntertainmentManagementShoppingCartComponent } from './entertainment-management-shopping-cart.component';

describe('EntertainmentManagementShoppingCartComponent', () => {
  let component: EntertainmentManagementShoppingCartComponent;
  let fixture: ComponentFixture<EntertainmentManagementShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntertainmentManagementShoppingCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntertainmentManagementShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
