import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Dummy data for unavailable dates
const unavailableDates = [
  new Date(2024, 6, 15),
  new Date(2024, 6, 16),
  new Date(2024, 7, 20),
];

export const AvailabilityCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleCalendarChange = (value: any) => {
    if (value instanceof Date) {
      setDate(value);
    }
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      if (unavailableDates.find(dDate => dDate.toDateString() === date.toDateString())) {
        return 'unavailable';
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <h3 className="text-2xl font-bold mb-4">Verifica Disponibilità</h3>
      <Calendar
        onChange={handleCalendarChange}
        value={date}
        tileClassName={tileClassName}
      />
      <style>{`
        .unavailable {
          background-color: #fecaca;
          color: #991b1b;
        }
      `}</style>
    </div>
  );
};
