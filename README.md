# zod-ocpp

zod-ocpp is a TypeScript library that provides validation schemas for the Open Charge Point Protocol (OCPP) 1.6J specification using the [Zod](https://github.com/colinhacks/zod) library. It allows you to validate OCPP 1.6J request and response payloads against the official specification.

## Installation

You can install zod-ocpp using npm:

```bash
npm install zod-ocpp
```
## Example
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

const schema = BootNotificationRequestSchema;

const result = schema.safeParse(requestPayload);

if (result.success) {
  console.log('Valid payload');
} else {
  console.error('Invalid payload:', result.error);
}
