interface SharedLibConfigItem {
  singleton: boolean;
  strictVersion: boolean;
  requiredVersion: string;
  version?: string;
}

export type SharedLibConfig = Record<string, SharedLibConfigItem>;

export interface SharedLibs {
  sharedLibraries: SharedLibConfig;
}

export type ObjectWrapperInterface = Record<string, Record<string, ObjectInterface>>;

export type ObjectInterface = Record<string, string | unknown>;

export interface ModuleFederatedDebugInfoModuleConfig {
  /**
   * Function that will return the packageLock file
   * ex.: () => require('package-lock.json')
   */
  packageLockFunction: () => ObjectWrapperInterface;

  /**
   * Function that will return the sharedLibs file
   * ex.: () => require('shared-lib')
   */
  sharedLibsFunction: () => SharedLibConfig;
}
