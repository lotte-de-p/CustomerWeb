export const FORM_LABEL_RENDITION = {
  default: 'default',
  subComponent: 'subComponent',
} as const;
export type FormLabelRendition = (typeof FORM_LABEL_RENDITION)[keyof typeof FORM_LABEL_RENDITION];
