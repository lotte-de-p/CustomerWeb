import { useEffect, useGlobals } from '@storybook/preview-api';

const localhost = 'http://localhost:8080';

// @ts-ignore
const mock = {
  'ocapi-url': localhost,
  'openid-auth-url': localhost,
  'openid-url': localhost,
  'openid-client-id': 'ocapi',
  'omapi-query-url': localhost,
};

const envConfig = function (env: string) {
  return {
    'ocapi-url': `https://api.${env}.telenet.be/ocapi`,
    'openid-auth-url': `https://login.${env}.telenet.be/openid/oauth/authorize`,
    'openid-url': `https://login.${env}.telenet.be/openid`,
    'openid-client-id': 'ocapi',
    'omapi-query-url': `https://api.${env}.telenet.be/omapi-query/public`,
  };
};

export const apiConfig = (StoryFn: () => unknown) => {
  const [{ environment }] = useGlobals();

  useEffect(() => {
    if (environment === 'Mock') {
      window['Config'] = mock;
    } else {
      window['Config'] = envConfig(environment.toLowerCase());
    }
  }, [environment]);

  return StoryFn();
};
