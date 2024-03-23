export const ReadingContextEnum = {
  'Interruption.Begin': 'Interruption.Begin',
  'Interruption.End': 'Interruption.End',
  'Sample.Clock': 'Sample.Clock',
  'Sample.Periodic': 'Sample.Periodic',
  'Transaction.Begin': 'Transaction.Begin',
  'Transaction.End': 'Transaction.End',
  Trigger: 'Trigger',
  Other: 'Other',
};

export type ReadingContextEnum = (typeof ReadingContextEnum)[keyof typeof ReadingContextEnum];
