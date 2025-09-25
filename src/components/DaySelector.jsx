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
      <div
        className="flex items-center gap-2.5 px-4 py-2 bg-neutral-800 rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium">{getDayName(selectedDay)}</div>
        <img
          src="/src/assets/images/icon-dropdown.svg"
          alt="Arrow Down"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
          className="transition-transform duration-300"
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-64 bg-neutral-800 rounded-lg shadow-lg z-10">
          <div className="py-1">
            {days.map((day) => (
              <button
                key={day}
                className={`block w-full text-left px-4 py-2 hover:bg-neutral-700 ${
                  day === selectedDay ? "bg-blue-700" : ""
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
