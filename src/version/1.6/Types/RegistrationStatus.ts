export const RegistrationStatusEnum = {
  Accepted: 'Accepted',
  Pending: 'Pending',
  Rejected: 'Rejected',
};

export type RegistrationStatusEnum = (typeof RegistrationStatusEnum)[keyof typeof RegistrationStatusEnum];
