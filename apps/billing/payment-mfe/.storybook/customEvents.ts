import { useEffect, useGlobals } from '@storybook/addons';

const brandCss = (brand: string): string => {
  const prefix = location.host.includes('localhost') ? '' : '/storybook';
  return `@import '${prefix}/assets/atomic/${brand}-generic-classes.css';
  @import '${prefix}/assets/atomic/${brand}-plugins.css';
  @import '${prefix}/assets/atomic/${brand}-themes.css';
  @import '${prefix}/assets/atomic/${brand}-fonts.css';
  @import '${prefix}/assets/atomic/${brand}-atomic-comps.css';
  @import '${prefix}/assets/atomic/${brand}-aem-cats/care.css';
  @import '${prefix}/assets/atomic/${brand}.css';`;
};

export const handleCustomEvents = (StoryFn: () => unknown) => {
  const [{ selectedMsisdn, locale, brand }] = useGlobals();

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent('selectedAccountModified', {
        bubbles: true,
        detail: { selectedAccount: { msisdn: selectedMsisdn } },
      })
    );
  }, [selectedMsisdn]);

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent('changeLanguage', {
        detail: { locale },
      })
    );
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const theme = document.getElementById('theme');
    const base = document.getElementsByTagName('base')[0];
    const winkTheme = document.getElementById('winkTheme');
    const brandWinkCss = `https://customer-web-foundation-wink-cdn.aem-modules-dev.awscloud.external.telenet.be/v1.2.0/assets/shared/tokens/${brand}-light-theme.css`;
    if (theme) {
      theme.innerHTML = brandCss(brand);
      base.href = location.host.includes('localhost') ? '' : '/storybook';
    }
    winkTheme?.setAttribute('href', brandWinkCss);
    document.body.className = brand;
  }, [brand]);

  return StoryFn();
};
