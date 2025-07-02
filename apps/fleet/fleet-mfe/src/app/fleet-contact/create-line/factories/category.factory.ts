import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Category, CategoryConfig, StepCategoryData } from '../models/category.interface';
import { CreateFleetLineFlowSelectors } from '../state/create-line-flow.selectors';
import { CreateFleetLineConstants } from '../constants/create-line.constants';
import { CreateFleetLineFlowUtil } from '../utils/create-line-flow.util';
import { cloneDeep } from 'lodash-es';
import { Step, StepConfig, StepFlowState } from '@telenet/ng-lib-step-flow';

@Injectable({
  providedIn: 'root',
})
export class CategoryFactory {
  constructor(private readonly store: Store) {}

  public create(): Category[] {
    const categories = this.createCategories();

    this.enhanceCategories(categories, this.store.selectSnapshot(StepFlowState.currentStep));

    return categories;
  }

  private createCategories(): Category[] {
    const categories: Category[] = [];
    const categoryConfigs = this.store.selectSnapshot(CreateFleetLineFlowSelectors.categoryConfigs);
    const obsoleteCategories = this.store.selectSnapshot(CreateFleetLineFlowSelectors.categories);
    const steps = this.store.selectSnapshot(StepFlowState.steps);

    categoryConfigs.forEach((categoryConfig) => {
      const category = this.createCategory(obsoleteCategories, steps, categoryConfig);
      if (category.steps.length > 0) {
        categories.push(category);
      }
    });

    return categories;
  }

  private createCategory(obsoleteCategories: Category[], steps: Step[], categoryConfig: CategoryConfig): Category {
    const obsoleteCategory = obsoleteCategories.find((category) => category.key === categoryConfig.key);
    const newCategory = obsoleteCategory ? cloneDeep(obsoleteCategory) : this.createNewCategory(categoryConfig);

    return this.addStepsToCategory(newCategory, categoryConfig, steps);
  }

  private addStepsToCategory(category: Category, categoryConfig: CategoryConfig, steps: Step[]): Category {
    const stepConfigData: StepCategoryData[] = [];

    categoryConfig.stepConfigs.forEach((stepConfig) => {
      const oldCategoryStep = CreateFleetLineFlowUtil.getStepFromCategory(category, stepConfig.key);
      if (CreateFleetLineFlowUtil.isStepWithKeyInSteps(steps, stepConfig.key)) {
        oldCategoryStep ? stepConfigData.push(oldCategoryStep) : stepConfigData.push(this.createNewStep(stepConfig));
      }
    });

    category.steps = stepConfigData;
    return category;
  }

  private enhanceCategories(categories: Category[], currentStep?: Step): void {
    const currentCategoryIndex: number = categories.indexOf(
      CreateFleetLineFlowUtil.getCategoryOfStep(categories, currentStep?.key)
    );

    categories.forEach((category) => {
      const categoryIndex = categories.indexOf(category);
      if (categoryIndex < currentCategoryIndex) {
        this.changePreviousCategory(category);
      } else if (categoryIndex === currentCategoryIndex) {
        this.changeCurrentCategory(category);
      } else if (categoryIndex > currentCategoryIndex && category.display) {
        this.changeNextCategory(category);
      }
      this.enhanceCategorySteps(category, currentStep);
    });
  }

  private changePreviousCategory(category: Category): void {
    category.display = true;
    category.class = CreateFleetLineConstants.CSS_CLASS_COMPLETED;
    category.toggle = false;
  }

  private changeCurrentCategory(category: Category): void {
    category.class = CreateFleetLineConstants.CSS_CLASS_ACTIVE;
    category.display = true;
    category.toggle = true;
  }

  private changeNextCategory(category: Category): void {
    category.class = CreateFleetLineConstants.CSS_CLASS_VISITED;
    category.toggle = false;
  }

  private enhanceCategorySteps(category: Category, currentStep: Step): void {
    for (const step of category.steps) {
      const stepKey = step.key;
      const currentStepKey = currentStep?.key;

      if (stepKey === currentStepKey) {
        step.class = CreateFleetLineConstants.CSS_CLASS_ACTIVE;
        step.display = true;
      }
      if (stepKey !== currentStepKey && step.display) {
        step.class = CreateFleetLineConstants.CSS_CLASS_COMPLETED;
      }
    }
  }

  private createNewCategory(categoryConfig: CategoryConfig): Category {
    const category = {} as Category;

    category.key = categoryConfig.key;
    category.steps = [];

    return category;
  }

  private createNewStep(stepConfig: StepConfig): StepCategoryData {
    const step = {} as StepCategoryData;

    step.key = stepConfig.key;

    return step;
  }
}
