export const ReasonEnum = {
  DeAuthorized: 'DeAuthorized',
  EmergencyStop: 'EmergencyStop',
  EVDisconnected: 'EVDisconnected',
  HardReset: 'HardReset',
  Local: 'Local',
  Other: 'Other',
  PowerLoss: 'PowerLoss',
  Reboot: 'Reboot',
  Remote: 'Remote',
  SoftReset: 'SoftReset',
  UnlockCommand: 'UnlockCommand',
};

export type ReasonEnum = (typeof ReasonEnum)[keyof typeof ReasonEnum];
