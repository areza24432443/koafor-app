import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;   // 👈 مهم‌ترین تغییر

  const numericId = Number(id);

  await prisma.reservation.delete({
    where: { id: numericId },
  });

  return NextResponse.json({ success: true });
}