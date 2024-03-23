export const UpdateStatusEnum = {
  Accepted: 'Accepted',
  Failed: 'Failed',
  NotSupported: 'NotSupported',
  VersionMismatch: 'VersionMismatch',
};

export type UpdateStatusEnum = (typeof UpdateStatusEnum)[keyof typeof UpdateStatusEnum];
