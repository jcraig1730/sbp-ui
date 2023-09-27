import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { getOpenTimeslots } from "@/api";

type OpenSlot = { hour: number; minute: number; formatted: string };

type OpenSlots = OpenSlot[];

interface Schedule {
  [year: number]: {
    [month: number]: {
      [date: number]: OpenSlots;
    };
  };
}

interface SelectDateProps {
  selectDate: (date: Date) => void;
  selectedDate?: Date;
}

function SelectDate(props: SelectDateProps) {
  const [selectedDay, setSelectedDay] = useState<Date>();
  const [timeSlots, setTimeSlots] = useState<OpenSlots>([]);
  const [schedule, setSchedule] = useState<Schedule>({});
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<
    number | undefined
  >();
  useEffect(() => {
    const fetchBusyDays = async () => {
      try {
        const response = await getOpenTimeslots();
        setSchedule(response.data);
      } catch (error) {
        console.error("Error fetching busy days", error);
      }
    };
    fetchBusyDays();
  }, []);

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);

    const availableSlots = getAvailableTimeSlots(day);
    setSelectedTimeSlot(undefined);
    setTimeSlots(availableSlots.map((slot) => slot));
  };

  const getAvailableTimeSlots = (day: Date) => {
    if (
      schedule[day.getFullYear()] &&
      schedule[day.getFullYear()][day.getMonth()] &&
      schedule[day.getFullYear()][day.getMonth()][day.getDate()]
    ) {
      return schedule[day.getFullYear()][day.getMonth()][day.getDate()];
    }
    return [];
  };

  const renderTimeSlots = () => {
    return timeSlots.map((slot, idx) => (
      <button
        key={slot.formatted}
        className={`${
          selectedTimeSlot === idx ? "bg-accent" : "bg-primary"
        } text-white px-4 py-2 m-2`}
        onClick={() => {
          setSelectedTimeSlot(idx);
          handleTimeSlotClick(slot);
        }}
      >
        {slot.formatted}
      </button>
    ));
  };

  const handleTimeSlotClick = (slot: OpenSlot) => {
    const appointment = new Date(selectedDay!);
    appointment.setHours(slot.hour, slot.minute);
    props.selectDate(appointment);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="">
        <DayPicker onDayClick={handleDayClick} />
      </div>
      <h2 className="text-xl font-semibold">Available time slots:</h2>
      <h4 className="text-lg font-semibold">
        {selectedDay?.toLocaleDateString()}
      </h4>
      {selectedDay ? (
        <div className="mt-4">
          <div className="mt-2">{renderTimeSlots()}</div>
        </div>
      ) : (
        <div>Please select a day</div>
      )}

      <div
        className={`mt-8 text-lg ${props.selectedDate ? "block" : "hidden"}`}
      >
        Selected Date:{" "}
        {props.selectedDate && props.selectedDate.toLocaleDateString()} @{" "}
        {props.selectedDate?.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default SelectDate;
