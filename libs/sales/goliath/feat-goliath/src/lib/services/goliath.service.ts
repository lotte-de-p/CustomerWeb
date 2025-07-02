import { Injectable } from '@angular/core';
import {
  Customer,
  Flow,
  GoliathFacade,
  SalesOrderState,
  ShoppingBasket,
  StateAction,
  Step,
} from '@sales/goliath/data-access';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoliathService {
  constructor(private readonly goliathFacade: GoliathFacade) {}

  getRequiredFlows<T>(flows: Flow<T>[], shoppingBasket: ShoppingBasket): Flow<T>[] {
    // Find all flows that are needed
    return flows.filter((flow) => flow.isRequired(shoppingBasket));
  }

  /**
   * Adds actions to the afterExecutionHooks of default actions based on matching names.
   *
   * @param defaultActions The list of default StateActions.
   * @param actionsLists A list of lists containing StateActions to add to the default actions' afterExecutionHooks.
   */
  createActionsList<T>(defaultActions: StateAction<T>[], actionsLists: StateAction<T>[][]): StateAction<T>[] {
    const combinedActions = defaultActions.map((action) => ({
      ...action,
      afterExecutionHooks: action.afterExecutionHooks ? [...action.afterExecutionHooks] : [],
    }));

    actionsLists.forEach((actionsList) => {
      actionsList.forEach((action) => {
        const targetAction = combinedActions.find((defaultAction) => defaultAction.name === action.name);

        if (targetAction) {
          targetAction.afterExecutionHooks.push({ ...action });
        }
      });
    });

    // Return the modified list of combined actions, which is a deep copy and doesn't affect the originals
    return combinedActions;
  }

  getStatesToProcess(currentState: SalesOrderState, targetState: SalesOrderState): SalesOrderState[] {
    if (currentState > targetState) {
      console.warn('Current state is later in the sequence than the target state. No states to process.');
      return [];
    }

    const statesToProcess: SalesOrderState[] = [];

    // if currentState is INITIALIZED we need to include it so that initializing actions are executed
    const startState = currentState === SalesOrderState.INITIALIZED ? currentState : currentState + 1;

    // Start from currentState + 1 to include the next state up to and including targetState
    for (let state = startState; state <= targetState; state++) {
      statesToProcess.push(state);
    }

    return statesToProcess;
  }

  executeActionsBetweenSteps() {
    return this.goliathFacade.steps$.pipe(take(1));
  }

  getSteps<T>(requiredFlows: Flow<T>[], shoppingBasket: ShoppingBasket, customer?: Customer): Step[] {
    // then we build a list of steps that are possible for that flow
    // whenever we press next or previous we rebuild the list of steps as the optional steps can change
    const requiredSteps: Step[] = requiredFlows.flatMap((flow) =>
      flow.steps.filter((step) => step.isRequired(shoppingBasket, customer))
    );

    // When we have the flows that apply we can go over the steps that are needed, if a step needs to have a certain
    // Sales order state before load then we add that required state to the first step we find that needs it
    // All other flows that require this state will add their requirement to that state
    // This way we assure the correct flow of api calls to the backend

    // In the end we have a list of steps each step will need a state that happens by making backend calls
    // Some flows will require custom api calls for their steps

    // If some states are skipped we need to execute the required ones first
    return this.createListOfUniqueStepsWithCorrectStateRequirements(requiredSteps);
  }

  private createListOfUniqueStepsWithCorrectStateRequirements(requiredSteps: Step[]) {
    const uniqueStepsWithCorrectStates = requiredSteps.reduce((acc: Step[], currentStep: Step) => {
      // Check if a step with the same name already exists in the accumulator
      const existingStepIndex = acc.findIndex((accStep) => accStep.name === currentStep.name);

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
}
