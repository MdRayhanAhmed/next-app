import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  //Validate
  // If Valid, return 201
  // Else return 400
  if (body.name)
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
  return NextResponse.json({ Error: "Name is Required" }, { status: 400 });
}
