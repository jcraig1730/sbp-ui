import { Appointment } from "@/api/dtoTypes";

interface AppointmentSectionProps {
  appointments: Appointment[];
}

const AppointmentSection = (props: AppointmentSectionProps) => {
  const { appointments } = props;
  return (
    <div className="bg-accent text-secondary md:w-1/2 p-8  md:mx-8 lg:px-28 py-14 min-h-[50vh] mb-24">
      <h2 className="text-5xl mb-12">Appointments</h2>
      <div className="grid grid-cols-4 gap-y-4 max-w-xl">
        {appointments.length && appointments.length > 0 ? (
          appointments
            .filter(
              (a) =>
                new Date(a.startTime).getTime() > new Date(Date.now()).getTime()
            )
            .sort(
              (a, b) =>
                new Date(a.startTime).getTime() -
                new Date(b.startTime).getTime()
            )
            .map((appointment) => {
              return (
                <div
                  key={appointment.id}
                  className="grid grid-cols-4 col-span-4 border border-secondary p-4 rounded-lg"
                >
                  <div className="col-span-2">
                    <div className="text-xl">
                      <div className="whitespace-nowrap">
                        Date:{" "}
                        {new Date(appointment.startTime).toLocaleDateString()}
                      </div>

                      <div>
                        Time:{" "}
                        {new Date(appointment.startTime).toLocaleTimeString(
                          [],
                          {
                            hour: "numeric",
                            minute: "2-digit",
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center flex justify-center items-center text-2xl">
                    {appointment.type[0].toUpperCase() +
                      appointment.type.slice(1)}
                  </div>
                </div>
              );
            })
        ) : (
          <div className="min-h-[200px] flex justify-center items-center">
            No upcoming appointments
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentSection;
