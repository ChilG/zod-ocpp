export const ResetStatusEnum = {
  Accepted: 'Accepted',
  Rejected: 'Rejected',
};

export type ResetStatusEnum = (typeof ResetStatusEnum)[keyof typeof ResetStatusEnum];
