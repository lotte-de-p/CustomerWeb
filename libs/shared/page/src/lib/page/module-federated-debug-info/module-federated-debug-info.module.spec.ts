import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { ModuleFederatedDebugInfoService } from './module-federated-debug-info.service';
import { ModuleFederatedDebugInfoModule } from './module-federated-debug-info.module';

describe('ModuleFederatedDebugInfoModule', () => {
  const buildTestModule = () => {
    TestBed.configureTestingModule({
      imports: [
        ModuleFederatedDebugInfoModule.forRoot({
          sharedLibsFunction: () => ({
            '@dummy-libs/testA': {
              singleton: false,
              version: '^1.0.0',
              strictVersion: false,
              requiredVersion: 'auto',
            },
          }),
          packageLockFunction: () => ({ dependencies: {} }),
        }),
      ],
      providers: [ModuleFederatedDebugInfoService, { provide: APP_BASE_HREF, useValue: '/my/app' }],
    }).compileComponents();
  };

  it('should set the correct configToken correctly', () => {
    buildTestModule();
    const moduleFederatedDebugInfoService = TestBed.inject(ModuleFederatedDebugInfoService);
    moduleFederatedDebugInfoService.sharedLibraries$.subscribe((value) =>
      expect(value).toEqual([
        {
          '@dummy-libs/testA': {
            singleton: false,
            version: '^1.0.0',
            strictVersion: false,
            requiredVersion: 'auto',
          },
        },
      ])
    );
  });
});
