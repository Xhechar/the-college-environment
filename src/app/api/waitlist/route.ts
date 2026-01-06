import sql from "@/lib/db";
import { NextResponse } from "next/server";
import { getInitialsFromEmail } from "@/lib/utils";

// GET: fetch waitlist + count
export async function GET() {
  try {
    const rows = await sql`
      SELECT * FROM waitlist
    `;

    const countResult = await sql`
      SELECT COUNT(*) FROM waitlist
    `;

    const count = Number(countResult[0].count);

    const data = rows.map((row: any) => ({
      ...row,
      initials: getInitialsFromEmail(row.email),
    }));

    return NextResponse.json({
      status: true,
      count: 115 + count,
      data,
    });
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return NextResponse.json({
      status: false,
      count: 0,
      data: [],
    });
  }
}

// POST: add email to waitlist
export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({
        status: false,
        count: 0,
      });
    }

    await sql`
      INSERT INTO waitlist (email)
      VALUES (${email})
    `;

    const countResult = await sql`
      SELECT COUNT(*) FROM waitlist
    `;

    const count = Number(countResult[0].count);

    return NextResponse.json({
      status: true,
      count: 115 + count,
    });
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return NextResponse.json({
      status: false,
      count: 0,
    });
  }
}
