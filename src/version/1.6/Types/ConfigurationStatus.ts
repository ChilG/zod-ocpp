export const ConfigurationStatusEnum = {
  Accepted: 'Accepted',
  Rejected: 'Rejected',
  NotSupported: 'NotSupported',
};

export type ConfigurationStatusEnum = (typeof ConfigurationStatusEnum)[keyof typeof ConfigurationStatusEnum];
