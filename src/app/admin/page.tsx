"use client";

import { useEffect, useState } from "react";
import Table from "../components/Table";

type Reservation = {
  id: number;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
};

export default function AdminPage() {
  const [data, setData] = useState<Reservation[]>([]);

  // گرفتن داده‌ها
  const fetchData = async () => {
    const res = await fetch("/api/reservations");
    const json = await res.json();
    setData(json);
  };

  // حذف رزرو
  const handleDelete = async (id: number) => {
    await fetch(`/api/reservations/${id}`, {
      method: "DELETE",
    });

    fetchData(); // رفرش
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
      Rezerve List 
      </h1>
      
      <Table data={data} handleDelete={handleDelete} />
    </div>
  );
}