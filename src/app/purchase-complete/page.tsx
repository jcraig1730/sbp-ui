"use client";

import { createAppointment } from "@/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PurchaseCompletePage = () => {
  const query = useSearchParams();
  const start = query.get("start");
  const pkg = query.get("package") as
    | "package 1"
    | "package 2"
    | "package 3"
    | "lifestyle/newborn";
  const type = query.get("type") as "infant" | "standard" | "wedding";

  const [appointmentCreated, setAppointmentCreated] = useState(false);

  useEffect(() => {
    (async () => {
      await createAppointment({
        start: new Date(start!).toString(),
        summary: pkg!,
        type: type!,
      });

      setAppointmentCreated(true);
    })();
  }, [pkg, start, type]);

  if (!appointmentCreated) {
    return (
      <div>
        <h1>Payment Accepted</h1>
        <h2>Creating appointment, please do not close this page!</h2>
      </div>
    );
  }

  return (
    <div className="p-6 my-3 shadow-lg rounded-md mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">
        Success! Your Appointment is Confirmed! 🎉
      </h1>

      <p className="text-lg mb-4">Get Ready to Shine!✨</p>
      <p className="mb-4">
        Hello there! We&apos;re thrilled to let you know that your photo shoot
        appointment has been successfully booked. We can&apos;t wait to capture
        your special moments and turn them into lasting memories. 📸
      </p>

      <div className="bg-primary p-4 rounded-md mb-4 flex justify-center">
        <p className="font-bold">
          🌟 Date & Time 🌟
          <div className="font-normal text-center">
            {new Date(start!).toLocaleDateString()}
          </div>
          <div className="font-normal text-center">
            {new Date(start!).toLocaleTimeString()}
          </div>
        </p>
      </div>

      <p className="mb-4">
        Tip: Wear your favorite outfit, bring along any props that are
        meaningful to you, and most importantly, wear your beautiful smile.
        Let&apos;s create magic together!
      </p>

      <p className="mb-4">
        Remember, photos aren&apos;t just pictures; they&apos;re moments frozen
        in time. We&apos;re honored to be a part of your journey. Prepare to be
        dazzled!
      </p>

      <h2 className="text-xl font-semibold mb-4 text-center">
        🎈 Exciting Times Ahead! 🎈
      </h2>
      <p>
        If you have any questions or special requests before the big day, feel
        free to reach out. We&apos;re here to make this experience unforgettable
        for you.
      </p>

      <div className="mt-6">
        <p className="text-center">
          See you soon! Let&apos;s make memories to cherish forever!
        </p>
      </div>
    </div>
  );
};

export default PurchaseCompletePage;
