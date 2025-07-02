# Designing Your Domain Structure in the "libs" Folder

This document provides a beginner-friendly guide on how to organize your code in the "libs" folder, using examples and simplified explanations.

### Definitions

| Term            | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dumb Components | Dumb components, also known as "presentational" components, have a straightforward role. They are responsible for presenting information to the user interface (DOM) and don't handle complex logic or state management. Once they've fulfilled their purpose, they are done. <br/> **Example**: Imagine a submit button that triggers an action when clicked. It's a dumb component because it only presents the button to the user interface. |

|
| Smart Components | Smart components, or container components, have a more significant responsibility. They not only present information but also manage state and control how the application works. They handle the complex logic behind the scenes. |

# DDD

Following our DDD discussions, we have decided to go with the [NX recommended](https://nx.dev/more-concepts/library-types) and have only 4 types of libraries:

- feature
- ui
- data-access
- util
 <div style="display: flex">
  <img alt="Demo lib DDD structure" src="../../tools/assets/ddd-demo-lib.png" width="600"/>
  <img alt="Demo structure" src="../../tools/assets/ddd-demo-lib-1.png" width="500"/>
</div>

## DDD Library Types

### Features

Features contain domain-specific use cases and components used by the client or shared across different domains. To ensure reusability, we recommend separating features into different projects within the NX workspace.

A feature library contains a set of files that configure a business use case or a page in an application. Most of the components in such a library are smart components that interact with data sources. This type of library also contains most of the UI logic, form validation code, etc. Feature libraries are almost always app-specific and are often lazy-loaded.
Example: Let's consider our demo application, which has a domain billing, in that domain,, we have a detail feature which contain components and logic specific to billing. It would be structured as follows:

book-feature
libs/foundation/demo/billing/feat-detail

```
├───demo
│   ├───billing
│   │   ├───feat-book
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │   │           ├───flight-edit
│   │   │           ├───flight-search
│   │   │           └───passenger-search
│   │               └───passenger-card
```

**Tags:** type:feature, scope:demo-billing, scope:demo-mfe

#### Dependency Constraints

A feature library can depend on any type of library.

### UI

The UI type contains dumb components responsible for presenting information to the user interface.. An example would be: submit button.

A UI library is a collection of related presentational components. **There are generally no services injected into these components (all of the data they need should come from Inputs).**

Example: For instance, the submit button component belongs to the UI category.

```
libs/foundation/demo/billing/ui
├───demo
│   ├───billing
│   │   └───ui
│   │       └───project.json
│   │       └───src
│   │           └───lib
│   │               ├───accordion-list
│   │               ├───badge
│   │               ├───button
│   │               └───accordion-list
```

**Tags:** type:ui, scope:demo-billing, scope:demo-mfe

#### Dependency Constraints

A ui library can depend on ui and util libraries.

### Data-access

A data-access library contains +state, interfaces and code for interacting with a back-end system.

libs/foundation/demo/billing/data-access

```
├───demo
│   ├───billing
│   │   ├───data-access
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │   │           ├───+state
│   │   │           ├───entities
│   │   │           ├───facade
│   │   │           └───infrastructure
```

**Tags:** type:data-access, scope:demo-billing, scope:demo-mfe
**Naming Convention**

`data-access` (e.g. `data-access-seatmap`)

#### Dependency Constraints

A data-access library can depend on data-access and util libraries.

### Util

A utility library contains low level code used by many libraries. Often there is no framework-specific code and the library is simply a collection of utilities or pure functions.

libs/foundation/demo/billing/util

```
├───demo
│   ├───billing
│   │   ├───util
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │               └───demo-billing-util
```

**Tags:** type:util, scope:demo-billing, scope:demo-mfe

#### Dependency Constraints

A utility library can depend only on utility libraries.

### Putting it all together we would have this structure:

folder structure

```
├───demo
│   ├───billing
│   │   ├───data-access
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │   │           ├───+state
│   │   │           ├───entities
│   │   │           └───infrastructure
│   │   ├───feat-detail
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │   │           └───demo-billing
│   │   ├───feat-overview
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │   │           └───billing-overview
│   │   ├───ui
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │   │           ├───accordion-list
│   │   │           ├───badge
│   │   │           ├───button
│   │   │           └───accordion-list
│   │   └───util
│   │       └───project.json
│   │       └───src
│   │           └───lib
│   │               └───demo-billing-util
│   ├───product
│   │   ├───data-access
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │   │           ├───+state
│   │   │           ├───entities
│   │   │           ├───facade
│   │   │           └───infrastructure
│   │   ├───feat-detail
│   │   │   ├───cypress             Cypress config
│   │   │   │   └───support
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │   │           ├───product-bundle
│   │   │           ├───product-specifications
│   │   │           └───product-bundle-detail
│   │   ├───ui
│   │   │   └───project.json
│   │   │   └───src
│   │   │       └───lib
│   │   │           ├───collapsible-header
│   │   │           └───phone-number
│   │   └───util
│   │       └───project.json
│   │       └───src
│   │           └───lib
│   │               └───demo-product-util
│   └───shared
│       ├───ui
│       │   └───project.json
│       │   └───src
│       │       └───lib
│       │           └───demo-shared-ui
│       └───util
│           └───project.json
│           └───src
│               └───lib
│                   ├───city-pipe
│                   └───city-validator
```

# How to get started creating those libraries

You can either use nx plugins to create the libraries or use the below command to do so:

## Generate new library

MFE_NAME is the name of the domain.

```
npx nx generate @nrwl/angular:library --name={DDD_TYPE} --directory=libs/{MFE_NAME}/{BOUNDED_CONTEXT} --importPath=@{MFE_NAME}/{BOUNDED_CONTEXT}/{FEATURE} --tags=type:{DDD_TYPE},scope:{MFE_NAME}-{BOUNDED_CONTEXT},scope:{MFE_NAME} --skipPackageJson
```

ex.:

npx nx generate @nrwl/angular:library --name=<b>data-access</b> --directory=libs/<b>demo</b>/product --importPath=<b>@demo/product/data-access</b> --tags=type:<b>data-access</b>,scope:<b>demo-product</b> --skipPackageJson

or

npx nx generate @nrwl/angular:library --name=<b>feat-book</b> --directory=libs/<b>demo</b>/billing --importPath=<b>@demo/billing/book</b> --tags=type:<b>feature</b>,scope:<b>demo-billing</b> --skipPackageJson
