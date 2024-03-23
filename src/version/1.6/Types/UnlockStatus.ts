export const UnlockStatusEnum = {
  Unlocked: 'Unlocked',
  UnlockFailed: 'UnlockFailed',
  NotSupported: 'NotSupported',
};

export type UnlockStatusEnum = (typeof UnlockStatusEnum)[keyof typeof UnlockStatusEnum];
