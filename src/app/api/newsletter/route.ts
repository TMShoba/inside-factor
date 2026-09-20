import { NextRequest, NextResponse } from "next/server";

// In production, connect this to Resend, Mailchimp, Brevo, or a database.
// For now we validate and acknowledge — emails can be logged or forwarded.

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Placeholder: store or forward the subscription
    // Example: await resend.contacts.create({ email, audienceId: '...' })
    console.log(`[newsletter] new subscriber: ${email}`);

    return NextResponse.json({
      success: true,
      message: "You're on the list. Expect unfiltered updates from Inside Factor.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process subscription. Please try again." },
      { status: 500 }
    );
  }
}
