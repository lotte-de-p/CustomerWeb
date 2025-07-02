import { MapperInterface } from '@telenet/ng-lib-shared';

export class GenericMapper<T> implements MapperInterface<unknown, T> {
  toModel(data: unknown, httpStatus?: number): T {
    if (httpStatus && httpStatus > 400) {
      throw new Error();
    }
    return data as T;
  }
}
