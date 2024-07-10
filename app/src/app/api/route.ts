import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    email: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  });
}
