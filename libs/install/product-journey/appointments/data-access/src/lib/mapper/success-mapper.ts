import { RawSuccessModel } from '../entities/raw-success.model';
import { SuccessModel } from '../entities/success.model';

export class SuccessMapper {
  static toModel(rawSuccessModel: RawSuccessModel): SuccessModel {
    return { status: rawSuccessModel?.status };
  }
}
