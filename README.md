# zod-ocpp

zod-ocpp is a TypeScript library that provides validation schemas for the Open Charge Point Protocol (OCPP) 1.6J specification using the [Zod](https://github.com/colinhacks/zod) library. It allows you to validate OCPP 1.6J request and response payloads against the official specification.

## Road map

- Schema ocpp v2.0.1

## Table of contents

- [Installation](#installation)
- [Example](#example)
- [Schema and Enum](#schema-and-enum)
  - [Message](#Message)
  - [Configuration](#Configuration)
  - [Types](#Types)

## Installation

You can install zod-ocpp using npm:

```bash
npm install zod-ocpp
```
## Example

### Call Validate message
```typescript
import { CallSchema } from 'zod-ocpp';

const message = [2, '4ae886ab-407d-45a7-839c-3632cf108f53', "Heartbeat", {}];

const result = CallSchema.safeParse(requestPayload);

if (result.success) {
  console.log('Valid payload');
  console.log(result.data);
} else {
  console.error('Invalid payload:', result.error);
}
```
### CallResult Validate message
```typescript
import { CallResultSchema } from 'zod-ocpp';

const message = [3, '4ae886ab-407d-45a7-839c-3632cf108f53', {currentTime: '2024-03-31T15:01:21.325Z'}];

const result = CallResultSchema.safeParse(message);

if (result.success) {
  console.log('Valid payload');
  console.log(result.data);
} else {
  console.error('Invalid payload:', result.error);
}
```
### CallError Validate message
```typescript
import { CallErrorSchema } from 'zod-ocpp';

const message = [4, '4ae886ab-407d-45a7-839c-3632cf108f53', 'NotSupported', 'Not support this protocol', {}];

const result = CallErrorSchema.safeParse(message);

if (result.success) {
  console.log('Valid payload');
  console.log(result.data);
} else {
  console.error('Invalid payload:', result.error);
}
```
### BootNotification Validate payload
#### Request
```typescript
import { BootNotificationRequestSchema } from 'zod-ocpp';

const requestPayload = {
  chargePointVendor: 'VendorX',
  chargePointModel: 'ModelA',
  chargePointSerialNumber: '123456789',
  chargeBoxSerialNumber: '987654321',
  firmwareVersion: '1.2.3',
  iccid: '89012345678901234567',
  imsi: '123456789012345',
  meterType: 'Metertype1',
  meterSerialNumber: 'ABC123',
};

const result = BootNotificationRequestSchema.safeParse(requestPayload);

if (result.success) {
  console.log('Valid payload');
} else {
  console.error('Invalid payload:', result.error);
}
```
#### Response
```typescript
import { BootNotificationResponseSchema } from 'zod-ocpp';

const responsePayload = {
  status: 'Accepted',
  currentTime: '2024-03-31T15:01:21.325Z',
  interval: 300,
};

const result = BootNotificationResponseSchema.safeParse(responsePayload);

if (result.success) {
  console.log('Valid payload');
  console.log(result.data);
} else {
  console.error('Invalid payload:', result.error);
}
```


## Schema and Enum
### Message
- [Authorize](src%2Fversion%2F1.6%2FMessages%2FAuthorize.ts)
- [BootNotification](src%2Fversion%2F1.6%2FMessages%2FBootNotification.ts)
- [CancelReservation](src%2Fversion%2F1.6%2FMessages%2FCancelReservation.ts)
- [ChangeAvailability](src%2Fversion%2F1.6%2FMessages%2FChangeAvailability.ts)
- [ChangeConfiguration](src%2Fversion%2F1.6%2FMessages%2FChangeConfiguration.ts)
- [ClearCache](src%2Fversion%2F1.6%2FMessages%2FClearCache.ts)
- [ClearChargingProfile](src%2Fversion%2F1.6%2FMessages%2FClearChargingProfile.ts)
- [DataTransfer](src%2Fversion%2F1.6%2FMessages%2FDataTransfer.ts)
- [DiagnosticsStatusNotification](src%2Fversion%2F1.6%2FMessages%2FDiagnosticsStatusNotification.ts)
- [FirmwareStatusNotification](src%2Fversion%2F1.6%2FMessages%2FFirmwareStatusNotification.ts)
- [GetCompositeSchedule](src%2Fversion%2F1.6%2FMessages%2FGetCompositeSchedule.ts)
- [GetConfiguration](src%2Fversion%2F1.6%2FMessages%2FGetConfiguration.ts)
- [GetDiagnostics](src%2Fversion%2F1.6%2FMessages%2FGetDiagnostics.ts)
- [GetLocalListVersion](src%2Fversion%2F1.6%2FMessages%2FGetLocalListVersion.ts)
- [Heartbeat](src%2Fversion%2F1.6%2FMessages%2FHeartbeat.ts)
- [MeterValues](src%2Fversion%2F1.6%2FMessages%2FMeterValues.ts)
- [RemoteStartTransaction](src%2Fversion%2F1.6%2FMessages%2FRemoteStartTransaction.ts)
- [RemoteStopTransaction](src%2Fversion%2F1.6%2FMessages%2FRemoteStopTransaction.ts)
- [ReserveNow](src%2Fversion%2F1.6%2FMessages%2FReserveNow.ts)
- [Reset](src%2Fversion%2F1.6%2FMessages%2FReset.ts)
- [SendLocalList](src%2Fversion%2F1.6%2FMessages%2FSendLocalList.ts)
- [SetChargingProfile](src%2Fversion%2F1.6%2FMessages%2FSetChargingProfile.ts)
- [StartTransaction](src%2Fversion%2F1.6%2FMessages%2FStartTransaction.ts)
- [StatusNotification](src%2Fversion%2F1.6%2FMessages%2FStatusNotification.ts)
- [StopTransaction](src%2Fversion%2F1.6%2FMessages%2FStopTransaction.ts)
- [TriggerMessage](src%2Fversion%2F1.6%2FMessages%2FTriggerMessage.ts)
- [UnlockConnector](src%2Fversion%2F1.6%2FMessages%2FUnlockConnector.ts)
- [UpdateFirmware](src%2Fversion%2F1.6%2FMessages%2FUpdateFirmware.ts)
### Configuration
- [CoreProfile](src%2Fversion%2F1.6%2FConfiguration%2FCoreProfile.ts)
- [LocalAuthListManagementProfile](src%2Fversion%2F1.6%2FConfiguration%2FLocalAuthListManagementProfile.ts)
- [ReservationProfile](src%2Fversion%2F1.6%2FConfiguration%2FReservationProfile.ts)
- [SmartChargingProfile](src%2Fversion%2F1.6%2FConfiguration%2FSmartChargingProfile.ts)
### Types
- [Action](src%2Fversion%2F1.6%2FTypes%2FAction.ts)
- [AuthorizationData](src%2Fversion%2F1.6%2FTypes%2FAuthorizationData.ts)
- [AuthorizationStatus](src%2Fversion%2F1.6%2FTypes%2FAuthorizationStatus.ts)
- [AvailabilityStatus](src%2Fversion%2F1.6%2FTypes%2FAvailabilityStatus.ts)
- [AvailabilityType](src%2Fversion%2F1.6%2FTypes%2FAvailabilityType.ts)
- [Call](src%2Fversion%2F1.6%2FTypes%2FCall.ts)
- [CallError](src%2Fversion%2F1.6%2FTypes%2FCallError.ts)
- [CallResult](src%2Fversion%2F1.6%2FTypes%2FCallResult.ts)
- [CancelReservationStatus](src%2Fversion%2F1.6%2FTypes%2FCancelReservationStatus.ts)
- [ChargePointErrorCode](src%2Fversion%2F1.6%2FTypes%2FChargePointErrorCode.ts)
- [ChargePointStatus](src%2Fversion%2F1.6%2FTypes%2FChargePointStatus.ts)
- [ChargingProfile](src%2Fversion%2F1.6%2FTypes%2FChargingProfile.ts)
- [ChargingProfileKindType](src%2Fversion%2F1.6%2FTypes%2FChargingProfileKindType.ts)
- [ChargingProfilePurposeType](src%2Fversion%2F1.6%2FTypes%2FChargingProfilePurposeType.ts)
- [ChargingProfileStatus](src%2Fversion%2F1.6%2FTypes%2FChargingProfileStatus.ts)
- [ChargingRateUnitType](src%2Fversion%2F1.6%2FTypes%2FChargingRateUnitType.ts)
- [ChargingSchedule](src%2Fversion%2F1.6%2FTypes%2FChargingSchedule.ts)
- [ChargingSchedulePeriod](src%2Fversion%2F1.6%2FTypes%2FChargingSchedulePeriod.ts)
- [CiString20Type](src%2Fversion%2F1.6%2FTypes%2FCiString20Type.ts)
- [CiString25Type](src%2Fversion%2F1.6%2FTypes%2FCiString25Type.ts)
- [CiString50Type](src%2Fversion%2F1.6%2FTypes%2FCiString50Type.ts)
- [CiString255Type](src%2Fversion%2F1.6%2FTypes%2FCiString255Type.ts)
- [CiString500Type](src%2Fversion%2F1.6%2FTypes%2FCiString500Type.ts)
- [ClearCacheStatus](src%2Fversion%2F1.6%2FTypes%2FClearCacheStatus.ts)
- [ClearChargingProfileStatus](src%2Fversion%2F1.6%2FTypes%2FClearChargingProfileStatus.ts)
- [ConfigurationStatus](src%2Fversion%2F1.6%2FTypes%2FConfigurationStatus.ts)
- [DataTransferStatus](src%2Fversion%2F1.6%2FTypes%2FDataTransferStatus.ts)
- [DiagnosticsStatus](src%2Fversion%2F1.6%2FTypes%2FDiagnosticsStatus.ts)
- [ErrorCode](src%2Fversion%2F1.6%2FTypes%2FErrorCode.ts)
- [FirmwareStatus](src%2Fversion%2F1.6%2FTypes%2FFirmwareStatus.ts)
- [GetCompositeScheduleStatus](src%2Fversion%2F1.6%2FTypes%2FGetCompositeScheduleStatus.ts)
- [IdTagInfo](src%2Fversion%2F1.6%2FTypes%2FIdTagInfo.ts)
- [IdToken](src%2Fversion%2F1.6%2FTypes%2FIdToken.ts)
- [KeyValue](src%2Fversion%2F1.6%2FTypes%2FKeyValue.ts)
- [Location](src%2Fversion%2F1.6%2FTypes%2FLocation.ts)
- [Measurand](src%2Fversion%2F1.6%2FTypes%2FMeasurand.ts)
- [MessageTrigger](src%2Fversion%2F1.6%2FTypes%2FMessageTrigger.ts)
- [MeterValue](src%2Fversion%2F1.6%2FTypes%2FMeterValue.ts)
- [Phase](src%2Fversion%2F1.6%2FTypes%2FPhase.ts)
- [ReadingContext](src%2Fversion%2F1.6%2FTypes%2FReadingContext.ts)
- [Reason](src%2Fversion%2F1.6%2FTypes%2FReason.ts)
- [RecurrencyKindType](src%2Fversion%2F1.6%2FTypes%2FRecurrencyKindType.ts)
- [RegistrationStatus](src%2Fversion%2F1.6%2FTypes%2FRegistrationStatus.ts)
- [RemoteStartStopStatus](src%2Fversion%2F1.6%2FTypes%2FRemoteStartStopStatus.ts)
- [ReservationStatus](src%2Fversion%2F1.6%2FTypes%2FReservationStatus.ts)
- [ResetStatus](src%2Fversion%2F1.6%2FTypes%2FResetStatus.ts)
- [ResetType](src%2Fversion%2F1.6%2FTypes%2FResetType.ts)
- [SampledValue](src%2Fversion%2F1.6%2FTypes%2FSampledValue.ts)
- [TriggerMessageStatus](src%2Fversion%2F1.6%2FTypes%2FTriggerMessageStatus.ts)
- [UnitOfMeasure](src%2Fversion%2F1.6%2FTypes%2FUnitOfMeasure.ts)
- [UnlockStatus](src%2Fversion%2F1.6%2FTypes%2FUnlockStatus.ts)
- [UpdateStatus](src%2Fversion%2F1.6%2FTypes%2FUpdateStatus.ts)
- [UpdateType](src%2Fversion%2F1.6%2FTypes%2FUpdateType.ts)
- [ValueFormat](src%2Fversion%2F1.6%2FTypes%2FValueFormat.ts)
