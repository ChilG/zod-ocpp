export const UnitOfMeasureEnum = {
  Wh: 'Wh',
  kWh: 'kWh',
  varh: 'varh',
  kvarh: 'kvarh',
  W: 'W',
  kW: 'kW',
  VA: 'VA',
  kVA: 'kVA',
  var: 'var',
  kvar: 'kvar',
  A: 'A',
  V: 'V',
  K: 'K',
  Celcius: 'Celcius',
  Fahrenheit: 'Fahrenheit',
  Percent: 'Percent',
};

export type UnitOfMeasureEnum = (typeof UnitOfMeasureEnum)[keyof typeof UnitOfMeasureEnum];
