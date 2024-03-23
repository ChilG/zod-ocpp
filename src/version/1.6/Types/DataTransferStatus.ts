export const DataTransferStatusEnum = {
  Accepted: 'Accepted',
  Rejected: 'Rejected',
  UnknownMessageId: 'UnknownMessageId',
  UnknownVendorId: 'UnknownVendorId',
};

export type DataTransferStatusEnum = (typeof DataTransferStatusEnum)[keyof typeof DataTransferStatusEnum];
