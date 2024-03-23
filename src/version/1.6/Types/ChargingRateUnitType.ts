export const ChargingRateUnitTypeEnum = {
  W: 'W',
  A: 'A',
};

export type ChargingRateUnitTypeEnum = (typeof ChargingRateUnitTypeEnum)[keyof typeof ChargingRateUnitTypeEnum];
