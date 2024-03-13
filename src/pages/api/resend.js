import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

export default async function ContactUs(req, res) {
  const { name, phoneNumber, message } = req.body;

  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const resend = new Resend(resendApiKey);

    const sendEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [process.env.MAIN_EMAIL],
      subject: `Katrin.co.il - הודעה חדשה - ${name}`,
      react: EmailTemplate(name, phoneNumber, message),
    });

    if (sendEmail.error) {
      return res.status(sendEmail.error.statusCode).json(sendEmail.error);
    }

    return res
      .status(200)
      .json({ status: "success", message: "Email was sent successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ status: "fail", error: "Internal Server Error" });
  }
}
