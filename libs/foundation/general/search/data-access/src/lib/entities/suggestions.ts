import { SuggestionItem } from './suggestion-item';

export interface Suggestions {
  locale: string;
  hits: SuggestionItem[];
  asYouType: SuggestionItem[];
}
