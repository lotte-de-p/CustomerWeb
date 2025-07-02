import { RawApiResponseInterface } from '../interfaces/raw-api-response.interface';
import { ApiResponse } from '../models/api-response.model';

export class ApiResponseMapper {
  static toModel(rawApiResponse: RawApiResponseInterface): ApiResponse {
    return { status: rawApiResponse?.status };
  }
}
