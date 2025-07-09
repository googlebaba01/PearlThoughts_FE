import React from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import {enUS} from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};
type CalendarEvent = {
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
  };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const events: CalendarEvent[] = [
  {
    title: "Available Slot",
    start: new Date(),
    end: new Date(new Date().getTime() + 60 * 60 * 1000),
    allDay: false,
  },
  // Add more events as needed
];

const AvailabilityCalendar: React.FC = () => (
  <div className="h-[400px] w-full bg-white rounded-lg overflow-hidden">
    <style>{`
      .rbc-month-view .rbc-date-cell, .rbc-header {
        color: #222 !important;
        font-weight: 600 !important;
      }
    `}</style>
    <Calendar
       localizer={localizer}
       events={events}
       startAccessor="start"
       endAccessor="end"
       titleAccessor="title" // Add this line
       style={{ height: "100%", borderRadius: "0.75rem" }}
       className="rbc-calendar"
    />
  </div>
);

export default AvailabilityCalendar;