export const AvailabilityTypeEnum = {
  Inoperative: 'Inoperative',
  Operative: 'Operative',
};

export type AvailabilityTypeEnum = (typeof AvailabilityTypeEnum)[keyof typeof AvailabilityTypeEnum];
