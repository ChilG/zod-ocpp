export const UpdateTypeEnum = {
  Differential: 'Differential',
  Full: 'Full',
};

export type UpdateTypeEnum = (typeof UpdateTypeEnum)[keyof typeof UpdateTypeEnum];
