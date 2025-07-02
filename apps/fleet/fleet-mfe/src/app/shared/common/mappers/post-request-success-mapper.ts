import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { RawPostRequestSuccessInterface } from '../services/billing/interfaces/raw-post-request-success.interface';
import { PostRequestSuccessInterface } from '../interfaces/post-request-success.interface';

@Injectable({
  providedIn: 'root',
})
export class PostRequestSuccessMapper
  implements MapperInterface<RawPostRequestSuccessInterface, PostRequestSuccessInterface>
{
  toModel(rawPostRequestSuccessInterface: RawPostRequestSuccessInterface): PostRequestSuccessInterface {
    const postRequestSuccessInterface = {} as PostRequestSuccessInterface;
    if (rawPostRequestSuccessInterface) {
      postRequestSuccessInterface.status = rawPostRequestSuccessInterface.status;
    }
    return postRequestSuccessInterface;
  }
}
