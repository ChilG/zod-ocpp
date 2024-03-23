export const RecurrencyKindTypeEnum = {
  Daily: 'Daily',
  Weekly: 'Weekly',
};

export type RecurrencyKindTypeEnum = (typeof RecurrencyKindTypeEnum)[keyof typeof RecurrencyKindTypeEnum];
