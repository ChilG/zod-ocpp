export const GetCompositeScheduleStatusEnum = {
  Accepted: 'Accepted',
  Rejected: 'Rejected',
};

export type GetCompositeScheduleStatusEnum =
  (typeof GetCompositeScheduleStatusEnum)[keyof typeof GetCompositeScheduleStatusEnum];
