export const ChargePointErrorCodeEnum = {
  ConnectorLockFailure: 'ConnectorLockFailure',
  EVCommunicationError: 'EVCommunicationError',
  GroundFailure: 'GroundFailure',
  HighTemperature: 'HighTemperature',
  InternalError: 'InternalError',
  LocalListConflict: 'LocalListConflict',
  NoError: 'NoError',
  OtherError: 'OtherError',
  OverCurrentFailure: 'OverCurrentFailure',
  PowerMeterFailure: 'PowerMeterFailure',
  PowerSwitchFailure: 'PowerSwitchFailure',
  ReaderFailure: 'ReaderFailure',
  ResetFailure: 'ResetFailure',
  UnderVoltage: 'UnderVoltage',
  OverVoltage: 'OverVoltage',
  WeakSignal: 'WeakSignal',
};

export type ChargePointErrorCodeEnum = (typeof ChargePointErrorCodeEnum)[keyof typeof ChargePointErrorCodeEnum];
