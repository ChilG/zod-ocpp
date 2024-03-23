export const TriggerMessageStatusEnum = {
  Accepted: 'Accepted',
  Rejected: 'Rejected',
  NotImplemented: 'NotImplemented',
};

export type TriggerMessageStatusEnum = (typeof TriggerMessageStatusEnum)[keyof typeof TriggerMessageStatusEnum];
