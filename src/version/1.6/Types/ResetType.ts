export const ResetTypeEnum = {
  Hard: 'Hard',
  Soft: 'Soft',
};

export type ResetTypeEnum = (typeof ResetTypeEnum)[keyof typeof ResetTypeEnum];
