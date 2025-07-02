# demo-product-feat-detail

## Features

Features contain domain-specific use cases and components used by the client or shared across different domains. To ensure reusability, we recommend separating features into different projects within the NX workspace.

A feature library contains a set of files that configure a business use case or a page in an application. Most of the components in such a library are smart components that interact with data sources. This type of library also contains most of the UI logic, form validation code, etc. Feature libraries are almost always app-specific and are often lazy-loaded.
Example: Let's consider our demo application, which has a domain product, in that domain, we have a detail feature which contain components and logic specific to product. It would be structured as follows:

book-feature
libs/foundation/demo/product/feat-detail

```
├───demo
│   ├───product
│   │   ├───feat-detail
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │   │           ├───product-bundle
│   │   │           ├───product-specifications
│   │   │           └───product-bundle-detail
```

**Tags:** type:feature, scope:demo-product, scope:demo-mfe

#### Dependency Constraints

A feature library can depend on any type of library.
