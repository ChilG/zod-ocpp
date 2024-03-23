export const ChargingProfilePurposeTypeEnum = {
  ChargePointMaxProfile: 'ChargePointMaxProfile',
  TxDefaultProfile: 'TxDefaultProfile',
  TxProfile: 'TxProfile',
};

export type ChargingProfilePurposeTypeEnum =
  (typeof ChargingProfilePurposeTypeEnum)[keyof typeof ChargingProfilePurposeTypeEnum];
