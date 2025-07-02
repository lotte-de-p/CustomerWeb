# <%= prefix %>-data-access

## Data-access

A data-access library contains +state, interfaces and code for interacting with a back-end system.

<%= dataAccessRootPath %>

```
├───<%= leanIxName %>
│   ├───<%= mfeNameWithoutSuffix %>
│   │   ├───<%= domain %>
│   │   │   ├───data-access
│   │   │   │   └───project.json
│   │   │   │   └───src
│   │   │   │       └───lib
│   │   │   │           ├───+state
│   │   │   │           └───facade
```

**Tags:** type:data-access, scope:<%= prefix %>, scope:<%= mfeName %>
**Naming Convention**

`data-access` (e.g. `data-access-seatmap`)

#### Dependency Constraints

A data-access library can depend on data-access and util libraries.
