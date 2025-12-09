import { NextResponse } from 'next/server';

// POST /api/contact - Handle contact form submission
export async function POST(request) {
    try {
        const { name, email, phone, subject, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // In production, you would:
        // 1. Save to database
        // 2. Send email notification
        // 3. Send confirmation email to user

        // For now, log the contact submission
        console.log('Contact form submission:', {
            name,
            email,
            phone,
            subject,
            message,
            timestamp: new Date().toISOString(),
        });

        // TODO: Add email sending logic here
        // Example with nodemailer:
        // await sendEmail({
        //   to: 'info@nagaare.com',
        //   subject: `Contact Form: ${subject}`,
        //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
        // });

        return NextResponse.json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.',
        });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to submit contact form' },
            { status: 500 }
        );
    }
}
