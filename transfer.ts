export class Transfer {
  id?: number;
  transferValue: number;
  originAccount: string;
  destinationAccount: string;
  feeValue?: number;
  feeType?: string;
  transferDate: string;
  schedulingDate?: string;
}
