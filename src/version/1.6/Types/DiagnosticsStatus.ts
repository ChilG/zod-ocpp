export const DiagnosticsStatusEnum = {
  Idle: 'Idle',
  Uploaded: 'Uploaded',
  UploadFailed: 'UploadFailed',
  Uploading: 'Uploading',
};

export type DiagnosticsStatusEnum = (typeof DiagnosticsStatusEnum)[keyof typeof DiagnosticsStatusEnum];
