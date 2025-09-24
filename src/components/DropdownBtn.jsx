import { useState, useRef, useEffect } from "react";
import { UNIT_SYSTEMS, UNITS } from "../constants/unitConstants";
import { useUnitContext } from "../hooks/useUnitContext";

const DropdownBtn = ({ children, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { unitSettings, updateSystem, updateUnitSetting } = useUnitContext();
  
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Handle system selection
  const handleSystemSelect = (system) => {
    updateSystem(system);
  };
  
  // Handle individual unit selection
  const handleUnitSelect = (key, value) => {
    updateUnitSetting(key, value);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        className="flex items-center gap-2.5 px-4 py-3 bg-neutral-800 rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {image && <img src="/src/assets/images/icon-units.svg" alt="Icon" />}
        <div className="font-medium">{children}</div>
        <img 
          src="/src/assets/images/icon-dropdown.svg" 
          alt="Arrow Down" 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
          className="transition-transform duration-300"
        />
      </div>
      
      {/* Main Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-neutral-800 rounded-lg shadow-lg z-10">
          <div className="p-3">
            <h3 className="font-medium text-sm mb-2 text-white/60">Select Unit System</h3>
            <div className="flex gap-2 mb-2">
              <button
                className={`flex-1 py-2 px-3 rounded ${unitSettings.system === UNIT_SYSTEMS.METRIC ? 'bg-blue-700' : 'bg-neutral-700'}`}
                onClick={() => handleSystemSelect(UNIT_SYSTEMS.METRIC)}
              >
                Metric
              </button>
              <button
                className={`flex-1 py-2 px-3 rounded ${unitSettings.system === UNIT_SYSTEMS.IMPERIAL ? 'bg-blue-700' : 'bg-neutral-700'}`}
                onClick={() => handleSystemSelect(UNIT_SYSTEMS.IMPERIAL)}
              >
                Imperial
              </button>
            </div>
            
            {/* Unit Settings */}
            <div className="mt-4">
              <h3 className="font-medium text-sm mb-2 text-white/60">Customize Units</h3>
              
              {/* Temperature */}
              <div className="mb-3">
                <label className="text-xs text-white/60 block mb-1">Temperature</label>
                <div className="flex gap-2">
                  <button
                    className={`flex-1 py-1 px-2 text-sm rounded ${unitSettings.temperature === UNITS.TEMPERATURE.CELSIUS ? 'bg-blue-700' : 'bg-neutral-700'}`}
                    onClick={() => handleUnitSelect('temperature', UNITS.TEMPERATURE.CELSIUS)}
                  >
                    Celsius (°C)
                  </button>
                  <button
                    className={`flex-1 py-1 px-2 text-sm rounded ${unitSettings.temperature === UNITS.TEMPERATURE.FAHRENHEIT ? 'bg-blue-700' : 'bg-neutral-700'}`}
                    onClick={() => handleUnitSelect('temperature', UNITS.TEMPERATURE.FAHRENHEIT)}
                  >
                    Fahrenheit (°F)
                  </button>
                </div>
              </div>
              
              {/* Wind Speed */}
              <div className="mb-3">
                <label className="text-xs text-white/60 block mb-1">Wind Speed</label>
                <div className="flex gap-2">
                  <button
                    className={`flex-1 py-1 px-2 text-sm rounded ${unitSettings.windSpeed === UNITS.WIND_SPEED.KMH ? 'bg-blue-700' : 'bg-neutral-700'}`}
                    onClick={() => handleUnitSelect('windSpeed', UNITS.WIND_SPEED.KMH)}
                  >
                    km/h
                  </button>
                  <button
                    className={`flex-1 py-1 px-2 text-sm rounded ${unitSettings.windSpeed === UNITS.WIND_SPEED.MPH ? 'bg-blue-700' : 'bg-neutral-700'}`}
                    onClick={() => handleUnitSelect('windSpeed', UNITS.WIND_SPEED.MPH)}
                  >
                    mph
                  </button>
                </div>
              </div>
              
              {/* Precipitation */}
              <div>
                <label className="text-xs text-white/60 block mb-1">Precipitation</label>
                <div className="flex gap-2">
                  <button
                    className={`flex-1 py-1 px-2 text-sm rounded ${unitSettings.precipitation === UNITS.PRECIPITATION.MM ? 'bg-blue-700' : 'bg-neutral-700'}`}
                    onClick={() => handleUnitSelect('precipitation', UNITS.PRECIPITATION.MM)}
                  >
                    Millimeters (mm)
                  </button>
                  <button
                    className={`flex-1 py-1 px-2 text-sm rounded ${unitSettings.precipitation === UNITS.PRECIPITATION.INCHES ? 'bg-blue-700' : 'bg-neutral-700'}`}
                    onClick={() => handleUnitSelect('precipitation', UNITS.PRECIPITATION.INCHES)}
                  >
                    Inches (in)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownBtn;
