export interface MapperInterface<T, K> {
  toModel(data: T, httpStatus?: number): K;
}
