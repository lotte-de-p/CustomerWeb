import { MapperInterface } from '@telenet/ng-lib-shared';
import { LegalEnityRawInterface } from '../entities/interfaces/legal-entity.interface';

export class LegalEntityMapper implements MapperInterface<unknown, LegalEnityRawInterface> {
  toModel(data: unknown, httpStatus?: number): LegalEnityRawInterface {
    if (httpStatus && httpStatus > 400) {
      throw new Error();
    }
    return data as LegalEnityRawInterface;
  }
}
