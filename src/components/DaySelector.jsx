import { useState, useRef, useEffect } from "react";

const DaySelector = ({ days, selectedDay, onSelectDay }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Format the date to display day and month (e.g., "Mon, Sep 25")
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  // Get day name (e.g., "Monday")
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // Close dropdown when clicking outside
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

  // If no days are provided or no selected day, return empty
  if (!days || days.length === 0 || !selectedDay) {
    return null;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{getDayName(selectedDay)}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-48 bg-blue-800 rounded-lg shadow-lg z-10">
          <div className="py-1">
            {days.map((day) => (
              <button
                key={day}
                className={`block w-full text-left px-4 py-2 hover:bg-blue-700 ${
                  day === selectedDay ? "bg-blue-600" : ""
                }`}
                onClick={() => {
                  onSelectDay(day);
                  setIsOpen(false);
                }}
              >
                {formatDate(day)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DaySelector;
