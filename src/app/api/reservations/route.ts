import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// گرفتن لیست رزروها
export async function GET() {
  const data = await prisma.reservation.findMany();
  return NextResponse.json(data);
}

// ثبت رزرو
export async function POST(req: Request) {
  const body = await req.json();

  const reservation = await prisma.reservation.create({
    data: {
      name: body.name,
      phone: body.phone,
      service: body.service,
      date: body.date,
      time: body.time,
    },
  });

  return NextResponse.json(reservation);
}