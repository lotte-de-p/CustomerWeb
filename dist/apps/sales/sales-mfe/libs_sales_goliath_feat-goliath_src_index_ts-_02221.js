(self["webpackChunksales_mfe"] = self["webpackChunksales_mfe"] || []).push([["libs_sales_goliath_feat-goliath_src_index_ts-_02221"],{

/***/ 32925:
/*!******************************************************!*\
  !*** ./libs/sales/goliath/feat-goliath/src/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoliathService: () => (/* reexport safe */ _lib_services_goliath_service__WEBPACK_IMPORTED_MODULE_0__.GoliathService),
/* harmony export */   GoliathUtil: () => (/* reexport safe */ _lib_utils_goliath_util__WEBPACK_IMPORTED_MODULE_1__.GoliathUtil)
/* harmony export */ });
/* harmony import */ var _lib_services_goliath_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/services/goliath.service */ 20468);
/* harmony import */ var _lib_utils_goliath_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/utils/goliath.util */ 80752);



/***/ }),

/***/ 20468:
/*!*****************************************************************************!*\
  !*** ./libs/sales/goliath/feat-goliath/src/lib/services/goliath.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoliathService: () => (/* binding */ GoliathService)
/* harmony export */ });
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sales/goliath/data-access */ 90342);
/* harmony import */ var _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class GoliathService {
  constructor(goliathFacade) {
    this.goliathFacade = goliathFacade;
  }
  getRequiredFlows(flows, shoppingBasket) {
    // Find all flows that are needed
    return flows.filter(flow => flow.isRequired(shoppingBasket));
  }
  /**
   * Adds actions to the afterExecutionHooks of default actions based on matching names.
   *
   * @param defaultActions The list of default StateActions.
   * @param actionsLists A list of lists containing StateActions to add to the default actions' afterExecutionHooks.
   */
  createActionsList(defaultActions, actionsLists) {
    const combinedActions = defaultActions.map(action => ({
      ...action,
      afterExecutionHooks: action.afterExecutionHooks ? [...action.afterExecutionHooks] : []
    }));
    actionsLists.forEach(actionsList => {
      actionsList.forEach(action => {
        const targetAction = combinedActions.find(defaultAction => defaultAction.name === action.name);
        if (targetAction) {
          targetAction.afterExecutionHooks.push({
            ...action
          });
        }
      });
    });
    // Return the modified list of combined actions, which is a deep copy and doesn't affect the originals
    return combinedActions;
  }
  getStatesToProcess(currentState, targetState) {
    if (currentState > targetState) {
      console.warn('Current state is later in the sequence than the target state. No states to process.');
      return [];
    }
    const statesToProcess = [];
    // if currentState is INITIALIZED we need to include it so that initializing actions are executed
    const startState = currentState === _sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__.SalesOrderState.INITIALIZED ? currentState : currentState + 1;
    // Start from currentState + 1 to include the next state up to and including targetState
    for (let state = startState; state <= targetState; state++) {
      statesToProcess.push(state);
    }
    return statesToProcess;
  }
  executeActionsBetweenSteps() {
    return this.goliathFacade.steps$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
  }
  getSteps(requiredFlows, shoppingBasket, customer) {
    // then we build a list of steps that are possible for that flow
    // whenever we press next or previous we rebuild the list of steps as the optional steps can change
    const requiredSteps = requiredFlows.flatMap(flow => flow.steps.filter(step => step.isRequired(shoppingBasket, customer)));
    // When we have the flows that apply we can go over the steps that are needed, if a step needs to have a certain
    // Sales order state before load then we add that required state to the first step we find that needs it
    // All other flows that require this state will add their requirement to that state
    // This way we assure the correct flow of api calls to the backend
    // In the end we have a list of steps each step will need a state that happens by making backend calls
    // Some flows will require custom api calls for their steps
    // If some states are skipped we need to execute the required ones first
    return this.createListOfUniqueStepsWithCorrectStateRequirements(requiredSteps);
  }
  createListOfUniqueStepsWithCorrectStateRequirements(requiredSteps) {
    const uniqueStepsWithCorrectStates = requiredSteps.reduce((acc, currentStep) => {
      // Check if a step with the same name already exists in the accumulator
      const existingStepIndex = acc.findIndex(accStep => accStep.name === currentStep.name);
      if (existingStepIndex !== -1) {
        // A step with the same name was found
        const existingStep = acc[existingStepIndex];
        if (currentStep.requiredStateBeforeLoad.state > existingStep.requiredStateBeforeLoad.state) {
          // The current step has a "larger" state than the existing one, so we update the requiredStateBeforeLoad
          acc[existingStepIndex].requiredStateBeforeLoad = currentStep.requiredStateBeforeLoad;
        }
      } else {
        // No step with the same name was found, so we add the current step to the accumulator
        acc.push(currentStep);
      }
      return acc;
    }, []);
    // Sort the steps by their enum numeric values
    return uniqueStepsWithCorrectStates.sort((a, b) => a.name - b.name);
  }
  static #_ = this.ɵfac = function GoliathService_Factory(t) {
    return new (t || GoliathService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_sales_goliath_data_access__WEBPACK_IMPORTED_MODULE_0__.GoliathFacade));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: GoliathService,
    factory: GoliathService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 80752:
/*!***********************************************************************!*\
  !*** ./libs/sales/goliath/feat-goliath/src/lib/utils/goliath.util.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoliathUtil: () => (/* binding */ GoliathUtil)
/* harmony export */ });
class GoliathUtil {
  static removeComponentsFromFlows(flows) {
    return flows.map(flow => ({
      ...flow,
      steps: flow.steps.map(({
        component: _component,
        ...rest
      }) => rest)
    }));
  }
  static removeComponentsFromSteps(steps) {
    return steps.map(({
      component: _component,
      ...restStep
    }) => restStep);
  }
}

/***/ })

}])
//# sourceMappingURL=libs_sales_goliath_feat-goliath_src_index_ts-_02221.js.map