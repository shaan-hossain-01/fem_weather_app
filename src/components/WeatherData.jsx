import { useState, useEffect } from "react";
import DailyForecastItem from "./DailyForecastItem";
import HourlyForecastList from "./HourlyForecastList";
import MainData from "./MainData";
import DaySelector from "./DaySelector";

const WeatherData = ({ data }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [availableDays, setAvailableDays] = useState([]);

  // Extract available days from hourly data
  useEffect(() => {
    if (data?.hourly?.time && Array.isArray(data.hourly.time)) {
      // Get unique days from hourly forecast times
      const uniqueDays = data.hourly.time.reduce((days, timeStr) => {
        // Get the date part only (without time) to group by day
        const dateOnly = timeStr.split("T")[0];
        if (!days.includes(dateOnly)) {
          days.push(dateOnly);
        }
        return days;
      }, []);

      setAvailableDays(uniqueDays);

      // Set the first day as default selected
      if (uniqueDays.length > 0 && !selectedDay) {
        setSelectedDay(uniqueDays[0]);
      }
    }
  }, [data, selectedDay]);

  if (!data) return <p>No data available</p>;

  return (
    <div className="grid grid-cols-3 gap-4 min-h-96 mt-12 h-[693px]">
      <div className="h-full w-full col-span-2 flex flex-col gap-8">
        {/* Weather Information will go here */}
        <MainData data={data} />
        <div className="flex flex-1 flex-col gap-4">
          <h3>Daily forecast</h3>
          <DailyForecastItem data={data} />
        </div>
      </div>

      <div className="bg-blue-800 h-full w-full flex flex-col gap-4 p-4 rounded">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Next 8 hours</h3>
          {availableDays.length > 0 && (
            <DaySelector
              days={availableDays}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
            />
          )}
        </div>
        <HourlyForecastList data={data} selectedDay={selectedDay} />
      </div>
    </div>
  );
};

export default WeatherData;
