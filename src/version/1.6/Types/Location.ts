export const LocationEnum = {
  Cable: 'Cable',
  EV: 'EV',
  Inlet: 'Inlet',
  Outlet: 'Outlet',
  Body: 'Body',
};

export type LocationEnum = (typeof LocationEnum)[keyof typeof LocationEnum];
