export const ReservationStatusEnum = {
  Accepted: 'Accepted',
  Faulted: 'Faulted',
  Occupied: 'Occupied',
  Rejected: 'Rejected',
  Unavailable: 'Unavailable',
};

export type ReservationStatusEnum = (typeof ReservationStatusEnum)[keyof typeof ReservationStatusEnum];
