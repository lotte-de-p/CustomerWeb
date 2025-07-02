export interface IngenicoResultUtil {
  isSuccessful: () => boolean;
  isFailed: () => boolean;
}

export function createIngenicoResultUtil(ingenicoResult: string | null | undefined): IngenicoResultUtil {
  const _result = ingenicoResult;

  function isSuccessful(): boolean {
    return _result === 'accept';
  }
  function isFailed(): boolean {
    return !!_result && !isSuccessful() && _result !== 'cancel';
  }

  return {
    isSuccessful,
    isFailed,
  };
}
