export const RemoteStartStopStatusEnum = {
  Accepted: 'Accepted',
  Rejected: 'Rejected',
};

export type RemoteStartStopStatusEnum = (typeof RemoteStartStopStatusEnum)[keyof typeof RemoteStartStopStatusEnum];
