export const ChargingProfileStatusEnum = {
  Accepted: 'Accepted',
  Rejected: 'Rejected',
  NotSupported: 'NotSupported',
};

export type ChargingProfileStatusEnum = (typeof ChargingProfileStatusEnum)[keyof typeof ChargingProfileStatusEnum];
