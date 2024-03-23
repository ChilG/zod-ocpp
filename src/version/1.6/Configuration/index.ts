import CoreProfile from './CoreProfile';
import LocalAuthListManagementProfile from './LocalAuthListManagementProfile';
import ReservationProfile from './ReservationProfile';
import SmartChargingProfile from './SmartChargingProfile';

const ConfigurationKey = {
  ...CoreProfile,
  ...LocalAuthListManagementProfile,
  ...ReservationProfile,
  ...SmartChargingProfile,
};

export default ConfigurationKey;

export type ConfigurationKey = (typeof ConfigurationKey)[keyof typeof ConfigurationKey];
