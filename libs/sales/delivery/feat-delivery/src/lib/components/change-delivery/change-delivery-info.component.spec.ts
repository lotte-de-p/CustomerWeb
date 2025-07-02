import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ChangeDeliveryInfoComponent } from '../change-delivery/change-delivery-info.component';
import { windowFactory } from '@telenet/ng-lib-page';
import { ConfigService } from '@telenet/ng-lib-config';

describe('ChangeDeliveryInfoComponent', () => {
  let component: ChangeDeliveryInfoComponent;
  let fixture: ComponentFixture<ChangeDeliveryInfoComponent>;
  let configService: ConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore(), { provide: 'Window', useValue: windowFactory() }, ConfigService],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
    configService = TestBed.inject(ConfigService);
    jest.spyOn(configService, 'getConfig').mockReturnValue('https://api.int.telenet.be/ocapi');
    fixture = TestBed.createComponent(ChangeDeliveryInfoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
