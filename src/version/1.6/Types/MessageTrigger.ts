export const MessageTriggerEnum = {
  BootNotification: 'BootNotification',
  DiagnosticsStatusNotification: 'DiagnosticsStatusNotification',
  FirmwareStatusNotification: 'FirmwareStatusNotification',
  Heartbeat: 'Heartbeat',
  MeterValues: 'MeterValues',
  StatusNotification: 'StatusNotification',
};

export type MessageTriggerEnum = (typeof MessageTriggerEnum)[keyof typeof MessageTriggerEnum];
