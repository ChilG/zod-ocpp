export const ValueFormatEnum = {
  Raw: 'Raw',
  SignedData: 'SignedData',
};

export type ValueFormatEnum = (typeof ValueFormatEnum)[keyof typeof ValueFormatEnum];
