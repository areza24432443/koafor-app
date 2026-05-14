"use client";

import { useState } from "react";

export default function Reserve() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Hairsort");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      service,
      date,
      time,
    }),
  });

  if (res.ok) {
    alert("✅  successfully reserved"); 

    //   clear form fields
    setName("");
    setPhone("");
    setService("Hairsort");
    setDate("");
    setTime("");
  } else {
    alert("❌ Error occurred while submitting reservation");
  }
};
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-yellow-500">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          Barber Kami 💈
        </h1>

        <p className="text-center text-gray-400 mb-6">
          online reservation form  
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          {/* service */}
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
          >
            <option>Haircut</option>
            <option>Beard Trim</option>
            <option>Haircut + Beard Trim</option>
            <option>Hair Dye</option>
          </select>

          {/* date */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          {/* time */}
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            Book Reservation
          </button>
        </form>
      </div>
    </div>
  );
}