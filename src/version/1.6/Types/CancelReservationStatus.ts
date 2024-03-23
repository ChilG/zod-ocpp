export const CancelReservationStatusEnum = {
  Accepted: 'Accepted',
  Rejected: 'Rejected',
};

export type CancelReservationStatusEnum =
  (typeof CancelReservationStatusEnum)[keyof typeof CancelReservationStatusEnum];
