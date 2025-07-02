import { Product } from './product';
import { Tag } from './tag';

export interface SearchResultItem {
  url: string;
  displayUrl: string;
  content: string;
  type: string;
  name: string;
  product: Product;
  tags: Tag[];
  id: string;
}
