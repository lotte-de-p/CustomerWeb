import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstallationTypeComponent } from './installation-type.component';
import { TranslateModule } from '@ngx-translate/core';
import { MockWindow } from '@stencil/core/mock-doc';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FeatInstallationTypeComponent', () => {
  let component: InstallationTypeComponent;
  let fixture: ComponentFixture<InstallationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationTypeComponent, TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [{ provide: 'Window', useValue: MockWindow }, provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
