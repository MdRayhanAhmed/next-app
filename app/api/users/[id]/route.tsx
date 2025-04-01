import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //Fetch data from a db
  // If not found, return 404 error
  // Else return data
  const { id } = await params;
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id, name: "Rayhan" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate the request body
  // If Invalid, return 400
  // Fetch the user with the given id
  // If doesn't exist, return 404
  // Update the user
  // Return the update user

  /// Validate the request body
  const { id } = await params;
  const body = await request.json();

  /// If Invalid, return 400
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  // Fetch the user with the given id
  // If doesn't exist, return 404
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Update the user
  // Return the update user
  return NextResponse.json({ id, name: body.name });
}
