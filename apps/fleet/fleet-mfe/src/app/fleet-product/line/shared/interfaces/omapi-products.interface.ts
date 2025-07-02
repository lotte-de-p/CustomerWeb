export interface OmapiProductInfo {
  productId: string;
  name: string;
  subCategory: Category;
  services: Service[];
}

export interface Service {
  specifications: Specification[];
}

export interface Specification {
  value: string;
  unit: string;
}

interface Category {
  localizedName: string;
}
