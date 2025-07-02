import { useEffect, useGlobals } from '@storybook/addons';

const localhostURL = 'http://localhost:8080';

// @ts-ignore
const mock = {
  'ocapi-url': localhostURL,
  'openid-auth-url': localhostURL,
  'openid-url': localhostURL,
  'omapi-url': localhostURL + '/omapi',
  'openid-client-id': 'ocapi',
};

const environmentConfig = function (env) {
  return {
    'ocapi-url': `https://api.${env}.telenet.be/ocapi`,
    'openid-auth-url': `https://login.${env}.telenet.be/openid/oauth/authorize`,
    'openid-url': `https://login.${env}.telenet.be/openid`,
    'omapi-url': `https://api.${env}.telenet.be/omapi`,
    'openid-client-id': 'ocapi',
  };
};

export const apiConfig = (StoryFn) => {
  const [{ environment }] = useGlobals();

  useEffect(() => {
    if (environment === 'Mock') {
      window['Config'] = mock;
    } else {
      window['Config'] = environmentConfig(environment.toLowerCase());
    }
  }, [environment]);

  return StoryFn();
};
