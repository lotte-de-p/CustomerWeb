# demo-billing-util

# Util

A utility library contains low level code used by many libraries.
Often there is no framework-specific code and the library is simply a collection of utilities or pure functions.

Example: For instance, date formatting can be used as an util

```
libs/foundation/demo/billing/util
├───demo
│   ├───billing
│   │   └───util
│   │       └───project.json
│   │       └───src
│   │           └───lib
│   │               └───demo-billing-util

```

**Tags:** type:util, scope:demo-util

#### Dependency Constraints

A utility library can depend only on utility libraries.
