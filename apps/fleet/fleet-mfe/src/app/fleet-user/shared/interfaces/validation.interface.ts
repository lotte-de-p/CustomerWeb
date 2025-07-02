export interface ValidationInterface {
  message: string;
  typeOfProblem: string;
  validationPriority: string;
  targetOrderItemId?: string;
}
