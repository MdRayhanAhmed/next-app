import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

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
  const validation = schema.safeParse(body);
  /// If Invalid, return 400
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // Fetch the user with the given id
  // If doesn't exist, return 404
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Update the user
  // Return the update user
  return NextResponse.json({ id, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch the user from db
  // If doesn't exist, return 404
  // Delete the user
  // Return 200

  // Fetch the user with the given id
  const { id } = await params;

  // If doesn't exist, return 404
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Delete the user
  // Return the update user
  return NextResponse.json({});
}
