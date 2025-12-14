import { db } from "@/firebase/admin";
import { createFeedback } from "@/lib/actions/general.actions";
import { NextResponse } from "next/server";
import { success } from "zod";

export async function GET() {
  return Response.json(
    {
      success: true,
      data: "THANK YOU!",
    },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const result = await createFeedback(data);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}
