export interface Facet {
  id: string;
  label: string;
  count?: number;
  selected: boolean;
}

export interface FacetGroup {
  title: string;
  facets: Facet[];
}

export interface Tag {
  id: string;
  name: string;
  items: TagItem[];
}
export interface TagItem {
  value: string;
  count: number;
}

export interface Collection {
  value: string;
  text: string;
}
