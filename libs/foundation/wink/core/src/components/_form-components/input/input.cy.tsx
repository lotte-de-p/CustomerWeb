/// <reference types="cypress" />

describe('input', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=form-components-input--basic&viewMode=story');
  });

  describe('Element', () => {
    it('should find the wink-input element in input', () => {
      cy.get('wink-input').should('exist');
      cy.get('wink-input').find('input').should('exist');
      cy.get('wink-input').find('input').should('have.class', 'input');
    });
  });
  describe('inputId', () => {
    it('should assign id', () => {
      cy.get('wink-input').invoke('attr', 'input-id', 'myId');
      cy.get('wink-input').find('input').should('have.attr', 'id', 'myId');
      cy.get('input#myId').should('exist');
    });
  });
  describe('input name attr', () => {
    it('should assign name', () => {
      cy.get('wink-input').invoke('attr', 'name', 'myName');
      cy.get('wink-input').find('input').should('have.attr', 'name', 'myName');
    });
  });
  describe('type', () => {
    it('should assign type text', () => {
      cy.get('wink-input').invoke('attr', 'type', 'text');
      cy.get('wink-input').find('input').should('have.attr', 'type', 'text');
    });

    it('should assign type password', () => {
      cy.get('wink-input').invoke('attr', 'type', 'password');
      cy.get('wink-input').find('input').should('have.attr', 'type', 'password');
    });
  });
  describe('placeholder', () => {
    it('should assign placeholder', () => {
      cy.get('wink-input').invoke('attr', 'placeholder', 'Placeholder');
      cy.get('wink-input').find('input').should('have.attr', 'placeholder', 'Placeholder');
    });
  });

  describe('autocomplete', () => {
    it('should assign autocomplete off', () => {
      cy.get('wink-input').invoke('attr', 'autocomplete', 'off');
      cy.get('wink-input').find('input').should('have.attr', 'autocomplete', 'off');
    });

    it('should assign autocomplete username', () => {
      cy.get('wink-input').invoke('attr', 'autocomplete', 'username');
      cy.get('wink-input').find('input').should('have.attr', 'autocomplete', 'username');
    });
  });

  describe('inputModeType', () => {
    it('should assign inputModeOption text by default', () => {
      cy.get('wink-input').find('input').should('have.attr', 'input-mode', 'text');
    });

    it('should assign inputModeOption numeric', () => {
      cy.get('wink-input').invoke('attr', 'input-mode-option', 'numeric');
      cy.get('wink-input').find('input').should('have.attr', 'input-mode', 'numeric');
    });
  });

  describe('enterkeyhintOption', () => {
    it('should assign enterkeyhintOption enter', () => {
      cy.get('wink-input').invoke('attr', 'enterkeyhint-option', 'enter');
      cy.get('wink-input').find('input').should('have.attr', 'enterkeyhint', 'enter');
    });

    it('should assign enterkeyhintOption done', () => {
      cy.get('wink-input').invoke('attr', 'enterkeyhint-option', 'done');
      cy.get('wink-input').find('input').should('have.attr', 'enterkeyhint', 'done');
    });
  });

  describe('is-readonly', () => {
    it('should assign attribute readonly', () => {
      cy.get('wink-input').invoke('attr', 'is-readonly', true);
      cy.get('wink-input').find('input').should('have.attr', 'readonly');
    });
    it('should not assign attribute readonly', () => {
      cy.get('wink-input').invoke('attr', 'is-readonly', false);
      cy.get('wink-input').find('input').should('not.have.attr', 'readonly');
    });
  });

  describe('isDisabled', () => {
    it('should assign attribute disabled', () => {
      cy.get('wink-input').invoke('attr', 'is-disabled', true);
      cy.get('wink-input').find('input').should('have.attr', 'disabled');
    });
    it('should not assign attribute disabled', () => {
      cy.get('wink-input').invoke('attr', 'is-disabled', false);
      cy.get('wink-input').find('input').should('not.have.attr', 'disabled');
    });
  });

  describe('isRequired', () => {
    it('should assign attribute required', () => {
      cy.get('wink-input').invoke('attr', 'is-required', true);
      cy.get('wink-input').find('input').should('have.attr', 'required');
    });
    it('should not assign attribute required', () => {
      cy.get('wink-input').invoke('attr', 'is-required', false);
      cy.get('wink-input').find('input').should('not.have.attr', 'required');
    });
  });

  describe('isError', () => {
    it('should not assign attribute', () => {
      cy.get('wink-input').find('div[class="error-msg"]').should('not.exist');
    });
    it('should assign class invalid and add the error-message', () => {
      cy.get('wink-input').invoke('attr', 'error', ' ');
      cy.get('wink-input').find('input').should('have.class', 'invalid');
      cy.get('wink-input').find('div').should('have.class', 'error-msg');
    });
  });

  describe('iconLeft', () => {
    it('should assign the button-left class to input-wrapper and icon-button, and add the icon-button in DOM', () => {
      cy.get('wink-input').invoke('attr', 'icon-left', 'search');
      cy.get('wink-input')
        .find('.input-wrapper')
        .should('have.class', 'input-with-icon-button input-with-icon-button-left');
      cy.get('wink-input').find('.input-icon-button.input-icon-button-left').should('exist');
      cy.get('wink-input')
        .find('.input-icon-button.input-icon-button-left button.input-icon-button-button')
        .should('exist');
      cy.get('wink-input').find('.input-icon-button-left').find('wink-icon').should('exist');
      cy.get('wink-input').find('.input-icon-button-left').find('i').should('have.attr', 'part', 'icon icon-search');
    });
    it('should not assign the button-left classes to input-wrapper nor to icon-button, nor add the icon-button in DOM', () => {
      cy.get('wink-input').invoke('attr', 'icon-left', '');
      cy.get('wink-input').find('.input-wrapper').should('not.have.class', 'input-with-icon-button-left');
      cy.get('wink-input').find('.input-icon-button.input-icon-button-left').should('not.exist');
      cy.get('wink-input')
        .find('.input-icon-button.input-icon-button-left button.input-icon-button-button')
        .should('not.exist');
    });
  });

  describe('iconRight', () => {
    it('should assign the button-right class to input-wrapper and icon-button, and add the icon-button in DOM', () => {
      cy.get('wink-input').invoke('attr', 'icon-right', 'backspace');
      cy.get('wink-input')
        .find('.input-wrapper')
        .should('have.class', 'input-with-icon-button input-with-icon-button-right');
      cy.get('wink-input').find('.input-icon-button.input-icon-button-right').should('exist');
      cy.get('wink-input')
        .find('.input-icon-button.input-icon-button-right button.input-icon-button-button')
        .should('exist');
      cy.get('wink-input').find('.input-icon-button-right').find('wink-icon').should('exist');
      cy.get('wink-input')
        .find('.input-icon-button-right')
        .find('i')
        .should('have.attr', 'part', 'icon icon-backspace');
    });
    it('should not assign the button-right class to input-wrapper nor to icon-button, nor add the icon-button in DOM', () => {
      cy.get('wink-input').invoke('attr', 'icon-right', '');
      cy.get('wink-input').find('.input-wrapper').should('not.have.class', 'input-with-icon-button-right');
      cy.get('wink-input').find('.input-icon-button.input-icon-button-right').should('not.exist');
      cy.get('wink-input')
        .find('.input-icon-button.input-icon-button-right button.input-icon-button-button')
        .should('not.exist');
    });
  });

  describe('label', () => {
    it('should assign default label properties', () => {
      cy.get('wink-input').invoke('attr', 'label', 'Default label');
      cy.get('wink-input').find('label').should('exist');
      cy.get('wink-input').find('label.label').should('exist');
    });
    it('should not assign default label properties to input', () => {
      cy.get('wink-input').invoke('attr', 'label', '');
      cy.get('wink-input').find('label').should('not.exist');
    });
  });

  describe('helper', () => {
    it('should assign default label helper text properties', () => {
      cy.get('wink-input').invoke('attr', 'label', 'Default label');
      cy.get('wink-input').invoke('attr', 'helper', 'Helper');
      cy.get('wink-input').find('wink-form-label').should('exist');
    });
  });

  describe('labelOptionalText', () => {
    it('should assign default label helper text properties to input', () => {
      cy.get('wink-input').invoke('attr', 'label', 'Default label');
      cy.get('wink-input').find('wink-form-label').should('exist');
      cy.get('wink-input').find('wink-form-label .label--optional').should('exist');
    });
  });

  describe('prefixValue', () => {
    it('should assign prefix text and prefix properties to input', () => {
      cy.get('wink-input').invoke('attr', 'prefix-value', '.be');
      cy.get('wink-input').find('.input-affix.input-affix-prefix').should('exist');
    });
    it('should assign no prefix text nor prefix properties to input', () => {
      cy.get('wink-input').invoke('attr', 'prefix-value', '');
      cy.get('wink-input').find('.input-affix.input-affix-prefix').should('not.exist');
    });
  });

  describe('postfixValue', () => {
    it('should assign postfix text and postfix properties to input', () => {
      cy.get('wink-input').invoke('attr', 'postfix-value', '.be');
      cy.get('wink-input').find('.input-affix.input-affix-postfix').should('exist');
    });
    it('should assign no postfix text nor postfix properties to input', () => {
      cy.get('wink-input').invoke('attr', 'postfix-value', '');
      cy.get('wink-input').find('.input-affix.input-affix-postfix').should('not.exist');
    });
  });

  describe('numerical values', () => {
    it('should assign min, max and step values', () => {
      cy.get('wink-input').invoke('attr', 'min-value', '2');
      cy.get('wink-input').invoke('attr', 'max-value', '20');
      cy.get('wink-input').invoke('attr', 'step', '2');
      cy.get('wink-input').find('input').should('have.attr', 'min', '2');
      cy.get('wink-input').find('input').should('have.attr', 'max', '20');
      cy.get('wink-input').find('input').should('have.attr', 'step', '2');
    });
  });
});

describe('date', () => {
  beforeEach(() => {
    cy.visit('iframe.html?id=form-components-date-picker--default&viewMode=story');
  });

  describe('find element', () => {
    it('finding wink-search element', () => {
      cy.get('wink-input').should('exist');
    });
  });

  describe('date props', () => {
    it('should allow user to input a date', () => {
      cy.get('wink-input').invoke('attr', 'value', '2024-06-01');
      cy.get('wink-input').find('input').should('have.value', '2024-06-01');
    });

    it('should allow user to input a date by typing', () => {
      cy.get('wink-input').find('input').type('2024-06-01');
      cy.get('wink-input').should('have.attr', 'value', '2024-06-01');
    });

    it('should render the minlength attribute', () => {
      cy.get('wink-input').invoke('attr', 'min-value', '2018-10-01');
      cy.get('wink-input').find('input').should('have.attr', 'min', '2018-10-01');
    });

    it('should render the maxlength attribute', () => {
      cy.get('wink-input').invoke('attr', 'max-value', '2024-10-01');
      cy.get('wink-input').find('input').should('have.attr', 'max', '2024-10-01');
    });
  });
});
