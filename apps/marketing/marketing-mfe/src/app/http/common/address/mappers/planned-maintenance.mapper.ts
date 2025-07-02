import { Injectable } from '@angular/core';
import { PlannedMaintenceImpactModel } from '../models/planned-maintenance-impact.model';
import {
  PlannedMaintenanceModel,
  RawPlannedMaintenanceModel,
  RawPlannedMessages,
} from '../models/planned-maintenance.model';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { RawPlannedMaintenance } from '../models/raw-planned-maintenance.interface';
import { PlannedMaintenanceConstants } from '../models/planned-maintenance.constants';

@Injectable({
  providedIn: 'root',
})
export class PlannedMaintenanceMapper implements MapperInterface<RawPlannedMaintenance, PlannedMaintenanceModel[]> {
  toModel(data: RawPlannedMaintenance): PlannedMaintenanceModel[] {
    return this.buildPlanMaintenanceDetails(data);
  }

  private buildPlanMaintenanceDetails(rawPlannedMaintenance: RawPlannedMaintenance): PlannedMaintenanceModel[] {
    const plannedMaintenanceDetails: PlannedMaintenanceModel[] = [];
    rawPlannedMaintenance.messages.forEach((messageDetails) => {
      const model = new PlannedMaintenanceModel();
      const plannedMaintenanceImpact: PlannedMaintenceImpactModel[] = [];
      const payloadData = JSON.parse(messageDetails.payload);
      if (payloadData.contents) {
        payloadData.contents.forEach((contentData: RawPlannedMaintenanceModel) => {
          if (contentData.addressId) {
            model.addressId = contentData.addressId;
          }
          this.setScheduledDates(contentData, model);
          this.setImptWindowDetails(contentData, plannedMaintenanceImpact);
          this.setDescripion(contentData, model);
        });
        if (plannedMaintenanceImpact.length > 0) {
          model.impact = plannedMaintenanceImpact;
        }
      }
      plannedMaintenanceDetails.push(model);
    });
    return this.sortPlannedMaintenanceData(plannedMaintenanceDetails);
  }

  private setDescripion(contentData: RawPlannedMaintenanceModel, model: PlannedMaintenanceModel) {
    if (contentData.messages.length > 0) {
      contentData.messages.forEach((message: RawPlannedMessages) => {
        if (model?.description) model.description[message.lang] = message.description;
      });
    }
  }

  private setImptWindowDetails(
    contentData: RawPlannedMaintenanceModel,
    plannedMaintenanceImpact: PlannedMaintenceImpactModel[]
  ) {
    if (contentData.impactwindows) {
      const impactWindow = contentData.impactwindows;
      if (impactWindow.impactWindowStartDate && impactWindow.impactWindowEndDate) {
        const impactModel = new PlannedMaintenceImpactModel();
        impactModel.impactWindowStartDate = new Date(impactWindow.impactWindowStartDate);
        impactModel.impactWindowEndDate = new Date(impactWindow.impactWindowEndDate);
        impactModel.impactWindowNr = impactWindow.impactWindowNr;
        plannedMaintenanceImpact.push(impactModel);
      }
    }
  }

  private setScheduledDates(contentData: RawPlannedMaintenanceModel, model: PlannedMaintenanceModel) {
    if (contentData.scheduledEndDate && contentData.scheduledStartDate) {
      model.startDate = new Date(contentData.scheduledStartDate);
      model.endDate = new Date(contentData.scheduledEndDate);
      this.setStatus(model, model.startDate, model.endDate);
    }
  }

  private setStatus(model: PlannedMaintenanceModel, startDate: Date, endDate: Date) {
    const today = new Date();
    model.isCompleted = endDate < today;
    model.isInProgress = startDate <= today && !model.isCompleted;
    model.isPlanned = startDate > today;
  }

  private sortPlannedMaintenanceData(plannedMaintenance: PlannedMaintenanceModel[]): PlannedMaintenanceModel[] {
    let sortedPlannedMaintenance: PlannedMaintenanceModel[] = [];
    const inProgressPLM = this.filterAndSortPLMByDate(
      plannedMaintenance.filter((currentPlan) => currentPlan.isInProgress === true),
      PlannedMaintenanceConstants.IS_IN_PROGRESS
    );
    const plannedPLM = this.filterAndSortPLMByDate(
      plannedMaintenance.filter((currentPlan) => currentPlan.isPlanned === true),
      PlannedMaintenanceConstants.IS_PLANNED
    );
    const completedPLM = this.filterAndSortPLMByDate(
      plannedMaintenance.filter((currentPlan) => currentPlan.isCompleted === true),
      PlannedMaintenanceConstants.IS_COMPLETED
    );
    sortedPlannedMaintenance = inProgressPLM.concat(plannedPLM).concat(completedPLM);
    return sortedPlannedMaintenance;
  }

  private filterAndSortPLMByDate(statusDetails: PlannedMaintenanceModel[], status: string): PlannedMaintenanceModel[] {
    if (status === PlannedMaintenanceConstants.IS_COMPLETED) {
      return statusDetails
        .filter(filterCompletedPlans)
        .sort((val1, val2) => (val2?.endDate && val1?.endDate ? val2.endDate.getTime() - val1.endDate.getTime() : 0));
    } else if (status === PlannedMaintenanceConstants.IS_PLANNED) {
      return statusDetails
        .filter(filterPlannedPlans)
        .sort((val1, val2) =>
          val2?.startDate && val1?.startDate ? val1.startDate.getTime() - val2.startDate.getTime() : 0
        );
    } else if (status === PlannedMaintenanceConstants.IS_IN_PROGRESS) {
      return statusDetails.sort((val1, val2) =>
        val2?.startDate && val1?.startDate ? val1.startDate.getTime() - val2.startDate.getTime() : 0
      );
    }
    return statusDetails;
  }
}

function filterCompletedPlans(currentPlan: PlannedMaintenanceModel) {
  return (
    currentPlan?.endDate && (currentPlan.today.getTime() - currentPlan.endDate.getTime()) / (1000 * 3600 * 24) <= 7
  );
}

function filterPlannedPlans(currentPlan: PlannedMaintenanceModel) {
  return (
    currentPlan?.startDate && (currentPlan.startDate.getTime() - currentPlan.today.getTime()) / (1000 * 3600 * 24) <= 7
  );
}
