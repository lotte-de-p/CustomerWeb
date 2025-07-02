import { provideHttpClient } from '@angular/common/http';
import { UrlService } from '@telenet/ng-lib-page';
import { LoginService } from '../services';
import { Component } from '@angular/core';
import { LoginModule } from '../login-module';
import { OpenidAuthenticationProvider } from '../services/authentication/providers';
import { ConfigService } from '@telenet/ng-lib-config';
import { TranslateModule } from '@ngx-translate/core';

const GET_USERDETAILS_ENDPOINT = '**/oauth/userdetails';
const AUTHENTICATE_ENDPOINT = '**/oauth/authorize**/**';
const CALLBACK_ENDPOINT = '**/oauth/callback**';

const HOST_CONTENT = '[data-cy="host-content"]';

const GET_USER_DETAILS = 'getUserDetails';
const GET_USERDETAILS_ALIAS = `@${GET_USER_DETAILS}`;
const ATTEMPT_AUTHENTICATE = 'attemptAuthenticate';
const ATTEMPT_AUTHENTICATE_ALIAS = `@${ATTEMPT_AUTHENTICATE}`;
const CALLBACK = 'callback';
const CALLBACK_ALIAS = `@${CALLBACK}`;

const STATE_AND_NONCE = '6a6fee06-278e-452c-910a-e1696609ce08,f373edb6-fb44-4d93-a119-0e0a93dd02f5';

describe('Login', () => {
  describe('Login Component', () => {
    it('should display ng-content when getUserDetails succeeds', () => {
      cy.intercept('GET', GET_USERDETAILS_ENDPOINT, {
        statusCode: 200,
        body: {},
      }).as(GET_USER_DETAILS);

      mountComponent();

      cy.wait(GET_USERDETAILS_ALIAS);
      cy.get(HOST_CONTENT).should('exist');
      cy.get(HOST_CONTENT).should('be.visible');
    });

    it('should not display ng-content when getUserDetails fails', () => {
      cy.intercept('GET', GET_USERDETAILS_ENDPOINT, {
        statusCode: 401,
        body: STATE_AND_NONCE,
      }).as(GET_USER_DETAILS);

      mountComponent();

      cy.wait(GET_USERDETAILS_ALIAS);
      cy.get(HOST_CONTENT).should('not.exist');
    });

    it('should display a login button when not logged in', () => {
      cy.intercept('GET', GET_USERDETAILS_ENDPOINT, {
        statusCode: 401,
        body: STATE_AND_NONCE,
      }).as(GET_USER_DETAILS);

      mountComponent();

      cy.wait(GET_USERDETAILS_ALIAS);
      cy.get('[data-cy="login-button-link"]').should('exist');
    });
  });

  describe('Login Service', () => {
    it('should send state and nonce when clicking login button', () => {
      cy.window().then((win) => {
        cy.stub(win, 'open')
          .as('windowOpen')
          .callsFake(() => {
            // Do nothing when window.open is called
          });
      });

      cy.intercept('GET', GET_USERDETAILS_ENDPOINT, {
        statusCode: 401,
        body: STATE_AND_NONCE,
      }).as(GET_USER_DETAILS);

      mountComponent();

      cy.wait(GET_USERDETAILS_ALIAS);
      cy.get('[data-cy="login-button-link"]').click();
      cy.get('@windowOpen').should('be.calledOnce');
      cy.get('@windowOpen').should('have.been.calledWithMatch', (url: string) => {
        expect(url).to.include('state=6a6fee06-278e-452c-910a-e1696609ce08&nonce=f373edb6-fb44-4d93-a119-0e0a93dd02f5');
        return true;
      });
    });
  });

  describe('Transparent Authentication', () => {
    it('should attempt to authenticate if getUserDetails fails and display content if it succeeds', () => {
      let userDetailsCallCount = 0;

      cy.intercept('GET', GET_USERDETAILS_ENDPOINT, (req) => {
        if (userDetailsCallCount === 0) {
          userDetailsCallCount++;
          req.reply({
            statusCode: 401,
            body: STATE_AND_NONCE,
          });
        } else if (userDetailsCallCount === 1) {
          req.reply({
            statusCode: 200,
            body: {
              httpStatus: 200,
            },
          });
        }
      }).as(GET_USER_DETAILS);

      cy.intercept('GET', AUTHENTICATE_ENDPOINT, {
        statusCode: 200,
        body: {
          data: 'https://localhost:8080/ocapi/oauth/callback?code=mGp9se4Ex3s8tlm68Bx9ZOR5eoyjIwsU&state=12a8319e-f252-4741-b7f2-47fe9bcb0383',
        },
      }).as(ATTEMPT_AUTHENTICATE);

      cy.intercept('GET', CALLBACK_ENDPOINT, {
        statusCode: 200,
        body: {},
      }).as(CALLBACK);

      mountComponent();

      cy.wait(GET_USERDETAILS_ALIAS);
      cy.wait(ATTEMPT_AUTHENTICATE_ALIAS);
      cy.wait(CALLBACK_ALIAS);
      cy.wait(GET_USERDETAILS_ALIAS);

      cy.get(HOST_CONTENT).should('exist');
      cy.get(HOST_CONTENT).should('be.visible');
    });

    it('should attempt to authenticate if getUserDetails fails and not display content if it that fails', () => {
      let userDetailsCallCount = 0;

      cy.intercept('GET', GET_USERDETAILS_ENDPOINT, (req) => {
        if (userDetailsCallCount === 0) {
          userDetailsCallCount++;
          req.reply({
            statusCode: 401,
            body: STATE_AND_NONCE,
          });
        }
      }).as(GET_USER_DETAILS);

      cy.intercept('GET', AUTHENTICATE_ENDPOINT, {
        statusCode: 401,
        body: {
          data: 'https://localhost:8080/ocapi/oauth/callback?code=mGp9se4Ex3s8tlm68Bx9ZOR5eoyjIwsU&state=12a8319e-f252-4741-b7f2-47fe9bcb0383',
        },
      }).as(ATTEMPT_AUTHENTICATE);

      mountComponent();

      cy.wait(GET_USERDETAILS_ALIAS);
      cy.wait(ATTEMPT_AUTHENTICATE_ALIAS);

      cy.get(HOST_CONTENT).should('not.exist');
    });
  });
});

@Component({
  selector: 'test-component',
  imports: [LoginModule],
  standalone: true,
  template: `
    <tg-login>
      <div [attr.data-cy]="'host-content'">Login content</div>
    </tg-login>
  `,
})
class HostComponent {}

function mountComponent() {
  window['Config'] = {
    'ocapi-url': 'https://localhost:8080/ocapi',
    'openid-auth-url': 'https://localhost:8080/openid/oauth/authorize',
    'ocapi-client-id': 'telenet_be',
    'openid-client-id': 'ocapi',
    'auth-provider': 'openid',
    'openid-url': 'https://localhost:8080/openid',
    'oauth-callback-url': '',
  };

  cy.mount(HostComponent, {
    imports: [TranslateModule.forRoot()],
    providers: [
      UrlService,
      LoginService,
      OpenidAuthenticationProvider,
      ConfigService,
      { provide: 'Window', useValue: window },
      provideHttpClient(),
    ],
    componentProperties: {
      scopes: [],
      messageGroupName: 'login',
      autoRedirect: false,
      styleHint: 'login',
      mode: 'login',
      registrationUrl: '/registration',
      showItsMeRegistrationOption: true,
      hasInstallableProductType: false,
      renderOnlyForOriginCustomer: false,
    },
  });
}
