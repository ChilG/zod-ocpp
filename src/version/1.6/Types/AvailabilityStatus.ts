export const AvailabilityStatusEnum = {
  Accepted: 'Accepted',
  Rejected: 'Rejected',
  Scheduled: 'Scheduled',
};

export type AvailabilityStatusEnum = (typeof AvailabilityStatusEnum)[keyof typeof AvailabilityStatusEnum];
