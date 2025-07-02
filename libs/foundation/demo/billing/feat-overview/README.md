# demo-billing-feat-overview

## Features

Features contain domain-specific use cases and components used by the client or shared across different domains. To ensure reusability, we recommend separating features into different projects within the NX workspace.

A feature library contains a set of files that configure a business use case or a page in an application. Most of the components in such a library are smart components that interact with data sources. This type of library also contains most of the UI logic, form validation code, etc. Feature libraries are almost always app-specific and are often lazy-loaded.
Example: Let's consider our demo application, which has a domain billing, in that domain, we have an overview feature which contain components and logic specific to billing. It would be structured as follows:

book-feature
libs/foundation/demo/billing/feat-overview

```
├───demo
│   ├───billing
│   │   ├───feat-overview
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │   │           └───billing-overview
```

**Tags:** type:feature, scope:demo-billing, scope:demo-mfe

#### Dependency Constraints

A feature library can depend on any type of library.
