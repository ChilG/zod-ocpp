export const FirmwareStatusEnum = {
  Downloaded: 'Downloaded',
  DownloadFailed: 'DownloadFailed',
  Downloading: 'Downloading',
  Idle: 'Idle',
  InstallationFailed: 'InstallationFailed',
  Installing: 'Installing',
  Installed: 'Installed',
};

export type FirmwareStatusEnum = (typeof FirmwareStatusEnum)[keyof typeof FirmwareStatusEnum];
