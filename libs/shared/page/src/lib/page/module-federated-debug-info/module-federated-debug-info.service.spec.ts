import { DEBUG_CONFIG_TOKEN, ModuleFederatedDebugInfoService } from './module-federated-debug-info.service';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ObjectWrapperInterface, SharedLibs } from './shared-lib-config.model';

describe('ModuleFederatedDebugInfoService', () => {
  let moduleFederatedDebugInfoService: ModuleFederatedDebugInfoService;

  const buildTestModule = (queryParams?: object, sharedLibs?: SharedLibs) => {
    TestBed.configureTestingModule({
      providers: [
        RouterTestingModule,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of(queryParams),
          },
        },
        {
          provide: DEBUG_CONFIG_TOKEN,
          useValue: {
            packageLockFunction: () => dummyPackageLock,
            sharedLibsFunction: () => sharedLibs || {},
          },
        },
      ],
    }).compileComponents();
    moduleFederatedDebugInfoService = TestBed.inject(ModuleFederatedDebugInfoService);
  };

  describe('isDebug$', () => {
    it('should be true given debug queryParams', () => {
      buildTestModule({ debug: 'true' });
      moduleFederatedDebugInfoService.isDebug$.subscribe((value) => expect(value).toBe(true));
    });
    it('should be false given no debug queryParams', () => {
      buildTestModule({ debug: 'false' });
      moduleFederatedDebugInfoService.isDebug$.subscribe((value) => expect(value).toBe(false));
    });
  });

  describe('getSharedLibraries$', () => {
    it('should return an empty libraries given debug is false and no libraries', () => {
      buildTestModule({ debug: 'false' });
      moduleFederatedDebugInfoService.sharedLibraries$.subscribe((value) => expect(value).toEqual([]));
    });

    it('should return all libraries given sharedLibraries exists', () => {
      buildTestModule(
        { debug: 'true' },
        {
          sharedLibraries: {
            '@dummy-libs/testA': {
              singleton: false,
              version: '^1.0.0',
              strictVersion: false,
              requiredVersion: 'auto',
            },
            '@dummy-libs/testB': {
              singleton: false,
              version: '^1.0.0',
              strictVersion: false,
              requiredVersion: 'auto',
            },
          },
        }
      );
      moduleFederatedDebugInfoService.sharedLibraries$.subscribe((value) => {
        expect(value).toEqual([
          {
            '@dummy-libs/testA': {
              singleton: false,
              version: '1.5.6645',
              strictVersion: false,
              requiredVersion: 'auto',
            },
          },
          {
            '@dummy-libs/testB': {
              singleton: false,
              version: '1.0.4654',
              strictVersion: false,
              requiredVersion: 'auto',
            },
          },
        ]);
      });
    });
  });
});

const dummyPackageLock: ObjectWrapperInterface = {
  dependencies: {
    '@dummy-libs/testA': {
      version: '1.5.6645',
    },
    '@dummy-libs/testB': {
      version: '1.0.4654',
    },
  },
};
