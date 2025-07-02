import { MapperInterface } from '@telenet/ng-lib-shared';
import { NavsResponseInterface } from './navs.interface';

export class NavsMapper implements MapperInterface<unknown, NavsResponseInterface> {
  toModel(data: unknown, httpStatus?: number): NavsResponseInterface {
    if (httpStatus && httpStatus > 400) {
      throw new Error();
    }
    return data as NavsResponseInterface;
  }
}
