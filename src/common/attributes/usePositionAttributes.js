import { useMemo } from 'react';

export default (t) => useMemo(() => ({
  id: {
    name: t('deviceIdentifier'),
    type: 'number',
    property: true,
  },
  latitude: {
    name: t('positionLatitude'),
    type: 'number',
    property: true,
  },
  longitude: {
    name: t('positionLongitude'),
    type: 'number',
    property: true,
  },
  speed: {
    name: t('positionSpeed'),
    type: 'number',
    dataType: 'speed',
    property: true,
  },
  course: {
    name: t('positionCourse'),
    type: 'number',
    property: true,
  },
  altitude: {
    name: t('positionAltitude'),
    type: 'number',
    property: true,
  },
  accuracy: {
    name: t('positionAccuracy'),
    type: 'number',
    dataType: 'distance',
    property: true,
  },
  valid: {
    name: t('positionValid'),
    type: 'boolean',
    property: true,
  },
  protocol: {
    name: t('positionProtocol'),
    type: 'string',
    property: true,
  },
  address: {
    name: t('positionAddress'),
    type: 'string',
    property: true,
  },
  deviceTime: {
    name: t('positionDeviceTime'),
    type: 'string',
    property: true,
  },
  fixTime: {
    name: t('positionFixTime'),
    type: 'string',
    property: true,
  },
  serverTime: {
    name: t('positionServerTime'),
    type: 'string',
    property: true,
  },
  geofenceIds: {
    name: t('sharedGeofences'),
    property: true,
  },
  raw: {
    name: t('positionRaw'),
    type: 'string',
  },
  index: {
    name: t('positionIndex'),
    type: 'number',
  },
  hdop: {
    name: t('positionHdop'),
    type: 'number',
  },
  vdop: {
    name: t('positionVdop'),
    type: 'number',
  },
  pdop: {
    name: t('positionPdop'),
    type: 'number',
  },
  sat: {
    name: t('positionSat'),
    type: 'number',
  },
  satVisible: {
    name: t('positionSatVisible'),
    type: 'number',
  },
  rssi: {
    name: t('positionRssi'),
    type: 'number',
  },
  coolantTemp: {
    name: t('positionCoolantTemp'),
    type: 'number',
  },
  engineTemp: {
    name: t('positionEngineTemp'),
    type: 'number',
  },
  gps: {
    name: t('positionGps'),
    type: 'number',
  },
  roaming: {
    name: t('positionRoaming'),
    type: 'boolean',
  },
  event: {
    name: t('positionEvent'),
    type: 'string',
  },
  alarm: {
    name: t('positionAlarm'),
    type: 'string',
  },
  status: {
    name: t('positionStatus'),
    type: 'string',
  },
  odometer: {
    name: t('positionOdometer'),
    type: 'number',
    dataType: 'distance',
  },
  serviceOdometer: {
    name: t('positionServiceOdometer'),
    type: 'number',
    dataType: 'distance',
  },
  tripOdometer: {
    name: t('positionTripOdometer'),
    type: 'number',
    dataType: 'distance',
  },
  hours: {
    name: t('positionHours'),
    type: 'number',
    dataType: 'hours',
  },
  steps: {
    name: t('positionSteps'),
    type: 'number',
  },
  heartRate: {
    name: t('positionHeartRate'),
    type: 'number',
  },
  input: {
    name: t('positionInput'),
    type: 'number',
  },
  in1: {
    name: `${t('positionInput')} 1`,
    type: 'boolean',
  },
  in2: {
    name: `${t('positionInput')} 2`,
    type: 'boolean',
  },
  in3: {
    name: `${t('positionInput')} 3`,
    type: 'boolean',
  },
  in4: {
    name: `${t('positionInput')} 4`,
    type: 'boolean',
  },
  output: {
    name: t('positionOutput'),
    type: 'number',
  },
  out1: {
    name: `${t('positionOutput')} 1`,
    type: 'boolean',
  },
  out2: {
    name: `${t('positionOutput')} 2`,
    type: 'boolean',
  },
  out3: {
    name: `${t('positionOutput')} 3`,
    type: 'boolean',
  },
  out4: {
    name: `${t('positionOutput')} 4`,
    type: 'boolean',
  },
  power: {
    name: t('positionPower'),
    type: 'number',
    dataType: 'voltage',
  },
  battery: {
    name: t('positionBattery'),
    type: 'number',
    dataType: 'voltage',
  },
  batteryLevel: {
    name: t('positionBatteryLevel'),
    type: 'number',
    dataType: 'percentage',
  },
  fuel: {
    name: t('positionFuel'),
    type: 'number',
    dataType: 'volume',
  },
  fuelUsed: {
    name: t('positionFuelUsed'),
    type: 'number',
  },
  fuelConsumption: {
    name: t('positionFuelConsumption'),
    type: 'number',
  },
  versionFw: {
    name: t('positionVersionFw'),
    type: 'string',
  },
  versionHw: {
    name: t('positionVersionHw'),
    type: 'string',
  },
  type: {
    name: t('sharedType'),
    type: 'string',
  },
  ignition: {
    name: t('positionIgnition'),
    type: 'boolean',
  },
  flags: {
    name: t('positionFlags'),
    type: 'string',
  },
  charge: {
    name: t('positionCharge'),
    type: 'boolean',
  },
  ip: {
    name: t('positionIp'),
    type: 'string',
  },
  archive: {
    name: t('positionArchive'),
    type: 'boolean',
  },
  distance: {
    name: t('positionDistance'),
    type: 'number',
    dataType: 'distance',
  },
  totalDistance: {
    name: t('deviceTotalDistance'),
    type: 'number',
    dataType: 'distance',
  },
  rpm: {
    name: t('positionRpm'),
    type: 'number',
  },
  vin: {
    name: t('positionVin'),
    type: 'string',
  },
  approximate: {
    name: t('positionApproximate'),
    type: 'boolean',
  },
  throttle: {
    name: t('positionThrottle'),
    type: 'number',
  },
  motion: {
    name: t('positionMotion'),
    type: 'boolean',
  },
  armed: {
    name: t('positionArmed'),
    type: 'boolean',
  },
  geofence: {
    name: t('sharedGeofence'),
    type: 'string',
  },
  acceleration: {
    name: t('positionAcceleration'),
    type: 'number',
  },
  humidity: {
    name: t('positionHumidity'),
    type: 'number',
  },
  deviceTemp: {
    name: t('positionDeviceTemp'),
    type: 'number',
  },
  temp1: {
    name: `${t('positionTemp')} 1`,
    type: 'number',
  },
  temp2: {
    name: `${t('positionTemp')} 2`,
    type: 'number',
  },
  temp3: {
    name: `${t('positionTemp')} 3`,
    type: 'number',
  },
  temp4: {
    name: `${t('positionTemp')} 4`,
    type: 'number',
  },
  operator: {
    name: t('positionOperator'),
    type: 'string',
  },
  command: {
    name: t('deviceCommand'),
    type: 'string',
  },
  blocked: {
    name: t('positionBlocked'),
    type: 'boolean',
  },
  lock: {
    name: t('alarmLock'),
    type: 'boolean',
  },
  dtcs: {
    name: t('positionDtcs'),
    type: 'string',
  },
  obdSpeed: {
    name: t('positionObdSpeed'),
    type: 'number',
    dataType: 'speed',
  },
  obdOdometer: {
    name: t('positionObdOdometer'),
    type: 'number',
    dataType: 'distance',
  },
  result: {
    name: t('eventCommandResult'),
    type: 'string',
  },
  driverUniqueId: {
    name: t('sharedDriver'),
    type: 'string',
  },
  card: {
    name: t('positionCard'),
    type: 'string',
  },
  drivingTime: {
    name: t('positionDrivingTime'),
    type: 'number',
    dataType: 'hours',
  },
  color: {
    name: t('attributeColor'),
    type: 'string',
  },
  image: {
    name: t('positionImage'),
    type: 'string',
  },
  video: {
    name: t('positionVideo'),
    type: 'string',
  },
  audio: {
    name: t('positionAudio'),
    type: 'string',
  },
  
  io183: {
    name: t('ctDriveRecognize'),
    type: 'number',
  },  
  io186: {
    name: t('ctTachographOverSpeed'),
    type: 'number',
  },  
  io184: {
    name: t('ctDriver1WorkingState'),
    type: 'number',
  },
  io185: {
    name: t('ctDriver2WorkingState'),
    type: 'number',
  },
  io187: {
    name: t('ctDriver1CardPresence'),
    type: 'number',
  },
  io188: {
    name: t('ctDriver2CardPresence'),
    type: 'number',
  },
  io188: {
    name: t('ctVINPart3'),
    type: 'number',
  },
  io189: {
    name: t('ctDriver1TimeRelatedStates'),
    type: 'number',
  },
  io190: {
    name: t('ctDriver2TimeRelatedStates'),
    type: 'number',
  },
  io222: {
    name: t('ctCard1IssuingMemberState'),
    type: 'number',
  },
  io10501: {
    name: t('ctDriversHoursRulesPreWarningTimeDelay'),
    type: 'number',
  },
  io10502: {
    name: t('ctOutOfScopeCondition'),
    type: 'number',
  },
  io10510: {
    name: t('ctDriver1NumberOfTimes9hDailyDrivingTimeExceeds'),
    type: 'number',
  },
  io10543: {
    name: t('ctK-LinePrivacyMode'),
    type: 'number',
  },
  io48: {
    name: t('ctTachoDataSource'),
    type: 'number',
  },
  io22: {
    name: t('ctDataMode'),
    type: 'number',
  },
  io71: {
    name: t('ctGNSSStatus'),
    type: 'number',
  },
  io200: {
    name: t('ctSleepMode'),
    type: 'number',
  },  
  io202: {
    name: t('ctFuelTemp1'),
    type: 'number',
  },
  io204: {
    name: t('ctFuelTemp2'),
    type: 'number',
  },
  io81: {
    name: t('ctCruiseControlActive'),
    type: 'number',
  },
  io85: {
    name: t('ctEngineCurrentLoad'),
    type: 'number',
  },
  io110: {
    name: t('ctDiagnosticsSupported'),
    type: 'number',
  },
  io123: {
    name: t('ctTachographPerformance'),
    type: 'number',
  },
  io127: {
    name: t('ctEngineCoolantTemperature'),
    type: 'number',
  },
  io137: {
    name: t('ctPTODriveEngagement'),
    type: 'number',
  },
  io229: {
    name: t('ctAdBlueStatus'),
    type: 'number',
  },
  io10455: {
    name: t('ctAdBlueLevel'),
    type: 'number',
  },
  io191: {
    name: t('ctVehicleSpeed'),
    type: 'number',
  },
  io56: {
    name: t('ctDriver1ContinuousDrivingTime'),
    type: 'number',
  },
  io57: {
    name: t('ctDriver2ContinuousDrivingTime'),
    type: 'number',
  },
  io58: {
    name: t('ctDriver1CumulativeBreakTime'),
    type: 'number',
  },
  io59: {
    name: t('ctDriver2CumulativeBreakTime'),
    type: 'number',
  },
  io60 {
    name: t('ctDriver1SelectedActivityDuration'),
    type: 'number',
  },
  io61 {
    name: t('ctDriver1SelectedActivityDuration'),
    type: 'number',
  },
  io69 {
    name: t('ctDriver1CumulativeDrivingTime'),
    type: 'number',
  },
  io10507 {
    name: t('ctDriver1VurrentDailyDrivingTime'),
    type: 'number',
  },
  io10508 {
    name: t('ctDriver1CurrentWeeklyDrivingTime'),
    type: 'number',
  },
  io10509 {
    name: t('ctDriver1TimeLeftUntilNewDailyRestPeriod'),
    type: 'number',
  },
  io10522 {
    name: t('ctDriver1TimeLeftUntilNewWeeklyRestPeriod'),
    type: 'number',
  },
  io10524 {
    name: t('ctDriver1MinimumDailyRest'),
    type: 'number',
  },
  io10526 {
    name: t('ctDriver1MinimumWeeklyRest'),
    type: 'number',
  },
  io10528 {
    name: t('ctDriver1DurationOfNextBreakRest'),
    type: 'number',
  },
  io10530 {
    name: t('ctDriver1RemainingTimeUntilNextBreakOrRest'),
    type: 'number',
  },
  io10532 {
    name: t('ctDriver1RemainingCurrentDrivingTime'),
    type: 'number',
  },
  io10533 {
    name: t('ctDriver1RemainingDrivingTimeOnCurrentShift'),
    type: 'number',
  },
  io10534 {
    name: t('ctDriver1RemainingDrivingTimeOfCurrentWeek'),
    type: 'number',
  },
  io10535 {
    name: t('ctDriver1OpenCompensationInTheLastWeek'),
    type: 'number',
  },
  io10536 {
    name: t('ctDriver1OpenCompensationInWeekBeforeLast'),
    type: 'number',
  },
  io10537 {
    name: t('ctDriver1OpenCompensationIn2ndWeekBeforeLast'),
    type: 'number',
  },
  io10538 {
    name: t('ctDriver1AdditionalInformation'),
    type: 'number',
  },
  io10539 {
    name: t('ctDriver1RemainingTimeOfCurrentBreakRest'),
    type: 'number',
  },
  io10540 {
    name: t('ctDriver1TimeLeftUntilNextDrivingPeriod'),
    type: 'number',
  },
  io10541 {
    name: t('ctDriver1DurationOfNextDrivingPeriod'),
    type: 'number',
  },
  io68 {
    name: t('ctBatteryCurrent'),
    type: 'number',
  },
}), [t]);
