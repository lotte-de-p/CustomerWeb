# demo-product-ui

# UI

The UI type contains dumb components responsible for presenting information to the user interface.. An example would be: submit button.

A UI library is a collection of related presentational components. **There are generally no services injected into these components (all of the data they need should come from Inputs).**

Example: For instance, the submit button component belongs to the UI category.

```
libs/foundation/demo/product/ui
├───demo
│   ├───product
│   │   └───ui
│   │       └───project.json
│   │       └───src
│   │           └───lib
│   │               ├───collapsible-header
│   │               └───phone-number

```

**Tags:** type:ui, scope:demo-ui

#### Dependency Constraints

A ui library can depend on ui and util libraries.
