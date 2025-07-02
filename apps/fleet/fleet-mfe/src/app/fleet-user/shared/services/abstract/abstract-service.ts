export abstract class AbstractService {
  protected computeEndpointFromPayload(endpoint: string, queryParamList: string[], payload: object): string {
    queryParamList.forEach((queryParam) => {
      if (payload[queryParam]) {
        endpoint = this.setQueryParam(endpoint, queryParam, payload[queryParam]);
      }
    });
    return endpoint;
  }

  protected setQueryParam(endpoint: string, queryParam: string, queryParamValue: string | boolean): string {
    return endpoint.indexOf('?') !== -1
      ? endpoint + `&${queryParam}=${queryParamValue}`
      : endpoint + `?${queryParam}=${queryParamValue}`;
  }

  protected getServiceURI(prefix: string, context: string, endpoint: string, parameters = ''): string {
    return prefix.concat(context).concat(endpoint).concat(parameters);
  }
}
