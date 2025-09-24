import { createContext, useState } from 'react';
import { UNIT_SYSTEMS, UNITS } from '../constants/unitConstants';

// Default unit settings
const defaultUnitSettings = {
  system: UNIT_SYSTEMS.METRIC,
  temperature: UNITS.TEMPERATURE.CELSIUS,
  windSpeed: UNITS.WIND_SPEED.KMH,
  precipitation: UNITS.PRECIPITATION.MM
};

// Create context
const UnitContext = createContext();

// Provider component
export function UnitProvider({ children }) {
  const [unitSettings, setUnitSettings] = useState(defaultUnitSettings);
  
  // Update the entire system (metric or imperial)
  const updateSystem = (system) => {
    if (system === UNIT_SYSTEMS.METRIC) {
      setUnitSettings({
        system: UNIT_SYSTEMS.METRIC,
        temperature: UNITS.TEMPERATURE.CELSIUS,
        windSpeed: UNITS.WIND_SPEED.KMH,
        precipitation: UNITS.PRECIPITATION.MM
      });
    } else {
      setUnitSettings({
        system: UNIT_SYSTEMS.IMPERIAL,
        temperature: UNITS.TEMPERATURE.FAHRENHEIT,
        windSpeed: UNITS.WIND_SPEED.MPH,
        precipitation: UNITS.PRECIPITATION.INCHES
      });
    }
  };
  
  // Update individual unit settings
  const updateUnitSetting = (key, value) => {
    setUnitSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  return (
    <UnitContext.Provider value={{ 
      unitSettings, 
      updateSystem, 
      updateUnitSetting 
    }}>
      {children}
    </UnitContext.Provider>
  );
}

// Export the context for use in the hook
export { UnitContext };