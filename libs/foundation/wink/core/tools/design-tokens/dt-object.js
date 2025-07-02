/**
 * An object containing mappings of old semantic tokens names to their new corresponding new names.
 * These mappings are used for replacing old name with their respective new name in files.
 * Please just always update this object with the new data each time the the structure is changed or tokens has been renamed.
 * sourceObj={"oldTokenName":"newTokenName", "oldTokenName":"newTokenName"...}
 */

const sourceObj = {
  'semantic-color-background-canvas-overlapping': 'semantic-color-background-surface-overlapping-default',
  'semantic-color-border-checkbox-default': 'semantic-components-checkbox-color-border-default',
  'semantic-color-background-overlapping-button-default':
    'semantic-components-overlapping-button-color-background-surface-default',
  'semantic-color-background-form-default-default':
    'semantic-components-toggle-color-background-surface-default-default',
  'semantic-color-background-form-default-hovered':
    'semantic-components-toggle-color-background-surface-default-hovered',
  'semantic-color-background-form-selected-default':
    'semantic-components-toggle-color-background-surface-selected-default',
  'semantic-color-background-form-selected-hovered':
    'semantic-components-toggle-color-background-surface-selected-hovered',
  'semantic-color-background-icon-primary': 'semantic-components-icon-color-background-surface-primary',
  'semantic-color-background-icon-secondary': 'semantic-components-icon-color-background-surface-secondary',
  'semantic-color-background-icon-transparant': 'semantic-components-icon-color-background-surface-transparant',
  'semantic-color-background-input-suffix': 'semantic-components-input-color-background-surface-suffix',
  'semantic-color-background-input-outlined': 'semantic-components-input-color-background-surface-outlined',
  'semantic-color-background-input-filled': 'semantic-components-input-color-background-surface-filled',
  'semantic-color-background-tab-default': 'semantic-components-tab-color-background-surface-default',
  'semantic-color-border-form-selected': 'semantic-components-checkbox-color-border-selected',
  'semantic-color-border-form-default': 'semantic-components-checkbox-color-border-default',
  'semantic-color-border-button-default': 'semantic-components-button-color-border-default',
  'semantic-color-border-button-underline': 'semantic-components-button-color-border-underline',
  'semantic-color-border-input-default': 'semantic-components-input-color-border-default',
  'semantic-color-border-input-selected': 'semantic-components-input-color-border-selected',
};

module.exports = { sourceObj };
