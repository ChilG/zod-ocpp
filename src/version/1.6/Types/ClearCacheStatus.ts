export const ClearCacheStatusEnum = {
  Accepted: 'Accepted',
  Rejected: 'Rejected',
};

export type ClearCacheStatusEnum = (typeof ClearCacheStatusEnum)[keyof typeof ClearCacheStatusEnum];
