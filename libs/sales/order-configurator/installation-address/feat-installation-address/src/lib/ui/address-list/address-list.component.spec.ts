import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressListComponent } from './address-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { MockWindow } from '@stencil/core/mock-doc';

describe('AddressListComponent', () => {
  let component: AddressListComponent;
  let fixture: ComponentFixture<AddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressListComponent, TranslateModule.forRoot()],
      providers: [{ provide: 'Window', useValue: MockWindow }, provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
