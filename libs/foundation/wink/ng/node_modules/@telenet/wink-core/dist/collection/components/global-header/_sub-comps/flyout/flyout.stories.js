import { html } from "lit-html";
import { BADGES } from "../../../../models";
export default {
    title: 'COMPONENTS/Global header/Flyout',
    component: 'Flyout',
    tags: ['hidden'],
    parameters: {
        badges: [BADGES.inProgress],
    },
    argTypes: {},
    args: {},
    render: () => html ` <wink-flyout flyout-id="0" slot="flyout" open>
      <div slot="col-1">
        <wink-navigation-list has-bold-links>
          <wink-navigation-list-item href="#">Internet Abonnementen</wink-navigation-list-item>
        </wink-navigation-list>
        <wink-navigation-list list-title="Uitgelicht" has-bold-links>
          <wink-navigation-list-item href="#">Internet Abonnementen</wink-navigation-list-item>
          <wink-navigation-list-item href="#">Bundels met internet</wink-navigation-list-item>
        </wink-navigation-list>

        <wink-navigation-list list-title="Welk aanbod past bij jou?">
          <wink-navigation-list-item href=""> Doe de test</wink-navigation-list-item>
        </wink-navigation-list>
      </div>

      <div slot="col-2">
        <wink-navigation-list list-title="Internet Producten" has-bold-links="true">
          <wink-navigation-list-item href="">Internet + Mobiel + TV</wink-navigation-list-item>
          <wink-navigation-list-item href="#">Internet + Mobiel</wink-navigation-list-item>
          <wink-navigation-list-item href="#">Internet + TV</wink-navigation-list-item>
          <wink-navigation-list-item href="#">Internet only</wink-navigation-list-item>
        </wink-navigation-list>
      </div>

      <div slot="col-3">
        <wink-navigation-list list-title="Support">
          <wink-navigation-list-item href="">Hulp nodig met internet</wink-navigation-list-item>
          <wink-navigation-list-item href="#">Jouw product beheren</wink-navigation-list-item>
          <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
          <wink-navigation-list-item href="#">Meer inspiratie omtrent internet</wink-navigation-list-item>
        </wink-navigation-list>
      </div>

      <div slot="col-4">
        <wink-img src-desktop="/assets/shared/img/place-holders/flyout.svg" alt="flyout image" loading="lazy" />
      </div>
    </wink-flyout>`,
};
export const Default = {};
//# sourceMappingURL=flyout.stories.js.map
