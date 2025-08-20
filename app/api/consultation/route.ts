import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Here you would typically save to database or send email
    // For now, we'll just log the consultation request
    console.log("New consultation request:", {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Consultation request submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing consultation request:", error)
    return NextResponse.json({ error: "Failed to submit consultation request" }, { status: 500 })
  }
}
