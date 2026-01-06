import pool from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getInitialsFromEmail } from "@/lib/utils";
// GET: List all waitlist entries
export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM waitlist");
    const countResult = await pool.query("SELECT COUNT(*) FROM waitlist");
    const count = parseInt(countResult.rows[0].count, 10);

    const data = result.rows.map((row) => ({
      ...row,
      initials: getInitialsFromEmail(row.email),
    }));

    return NextResponse.json({ status: true, count, data });
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return NextResponse.json({ status: false, count: 0, data: [] });
  }
}

// POST: Add a new entry to the waitlist
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ status: false, count: 0 });
    }
    await pool.query("INSERT INTO waitlist (email) VALUES ($1)", [email]);
    const countResult = await pool.query("SELECT COUNT(*) FROM waitlist");
    const count = parseInt(countResult.rows[0].count, 10);
    return NextResponse.json({ status: true, count });
  } catch (error) {
    return NextResponse.json({ status: false, count: 0 });
  }
}