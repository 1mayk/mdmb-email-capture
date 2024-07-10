import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    email: [
      {
        email: "maycon",
      },
      {
        id: 2,
      },
    ],
  });
}
