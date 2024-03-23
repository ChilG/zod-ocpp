export const ChargingProfileKindEnum = {
  Absolute: 'Absolute',
  Recurring: 'Recurring',
  Relative: 'Relative',
};

export type ChargingProfileKindEnum = (typeof ChargingProfileKindEnum)[keyof typeof ChargingProfileKindEnum];
