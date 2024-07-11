import { NextRequest, NextResponse } from "next/server";
import { storeEmail, readEmails } from "./services";

export async function GET() {
  const emailArr = readEmails();

  return NextResponse.json({
    emailArr,
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const email = data.email;

  storeEmail(email);
  const arrEmail = readEmails()

  return new NextResponse(arrEmail, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
