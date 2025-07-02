import { RawSuccessModel } from '../entities/raw/raw-success.model';
import { SuccessModel } from '../entities/success.model';

export class SuccessMapper {
  toModel(rawSuccessModel: RawSuccessModel): SuccessModel {
    return { status: rawSuccessModel?.status };
  }
}
