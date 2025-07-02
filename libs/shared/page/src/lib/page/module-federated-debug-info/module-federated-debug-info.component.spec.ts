import { ModuleFederatedDebugInfoService } from './module-federated-debug-info.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuleFederatedDebugInfoComponent } from './module-federated-debug-info.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModuleFederatedDebugInfoComponent', () => {
  let fixture: ComponentFixture<ModuleFederatedDebugInfoComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ModuleFederatedDebugInfoComponent],
      providers: [ModuleFederatedDebugInfoService],
    }).compileComponents();
    fixture = TestBed.createComponent(ModuleFederatedDebugInfoComponent);
  });
  it('should create component', () => {
    expect(fixture.componentInstance).toBeDefined();
  });
});
