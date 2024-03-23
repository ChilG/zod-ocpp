export const AuthorizationStatusEnum = {
  Accepted: 'Accepted',
  Blocked: 'Blocked',
  Expired: 'Expired',
  Invalid: 'Invalid',
  ConcurrentTx: 'ConcurrentTx',
};

export type AuthorizationStatusEnum = (typeof AuthorizationStatusEnum)[keyof typeof AuthorizationStatusEnum];
