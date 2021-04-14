export interface Transfer {
  id?: number
  originAccount: string
  destinationAccount: string
  transferValue: number
  feeValue: number
  feeType: string
  transferDate: string
  schedulingDate?: string
}
