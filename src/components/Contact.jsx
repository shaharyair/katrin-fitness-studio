import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner8 } from "react-icons/im";
import { z } from "zod";
import Button from "./Button";
import Input from "./Input";
import SocialLinks from "./SocialLinks";
import Textarea from "./Textarea";

const Modal = dynamic(() => import("./Modal"));

const customErrorMessages = {
  name: "אנא הזיני שם מלא",
  phoneNumber: "מספר הטלפון צריך להכיל בדיוק 10 ספרות",
  message: "ההודעה יכולה להכיל עד 500 תווים",
};

const text = {
  title: "צרי קשר",
  submitButton: "שלחי",
};

const formFields = {
  name: "* שם מלא",
  phoneNumber: "* מספר טלפון",
  message: "הודעה",
  messagePlaceholder: "ספרי לי עלייך... אל תחסכי בפרטים 😎",
};

const modalMessages = {
  success:
    "<span>ההודעה נשלחה בהצלחה, <br /> אחזור אליך לאחר האימון&nbsp;&nbsp;💪</span>",
  fail: "<span>ההודעה לא נשלחה, <br /> נסי שוב מאוחר יותר</span>",
};

const schema = z.object({
  name: z
    .string()
    .min(1, { message: customErrorMessages.name })
    .max(50, { message: customErrorMessages.name }),
  phoneNumber: z
    .string()
    .regex(/^05\d{8}$/, { message: customErrorMessages.phoneNumber }),
  message: z
    .string()
    .max(500, { message: customErrorMessages.message })
    .optional(),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [honeypot, setHoneypot] = useState("");
  const [modalMessage, setModalMessage] = useState(null);

  async function onSubmit(data) {
    // Human will not fill this field
    if (honeypot) {
      return console.warn("Bot Detected");
    }

    try {
      const response = await fetch("/api/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setModalMessage(modalMessages.fail);
        throw new Error("Failed to send email");
      }

      setModalMessage(modalMessages.success);
      reset();
    } catch (err) {
      console.error(err);
      setModalMessage(modalMessages.fail);
    }
  }

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {modalMessage && (
          <Modal
            message={modalMessage}
            onButtonClick={() => setModalMessage(null)}
          />
        )}
      </AnimatePresence>

      <div className="relative h-full w-full bg-black py-10">
        {/* offset for scroll link */}
        <div className="absolute -top-16 left-0 bg-transparent" id="contact" />

        <div className="container flex flex-col items-center justify-center gap-4 text-right font-thin text-white lg:gap-6 lg:text-lg">
          <h1 className="text-2xl text-white lg:text-4xl">{text.title}</h1>
          <SocialLinks />
          {/* form container */}
          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap items-end justify-center gap-1.5 lg:w-3/5 lg:gap-3"
          >
            {/* hidden honeypot input */}
            <input
              type="text"
              className="hidden"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />

            {/* full name field */}
            <div className="flex w-full flex-auto flex-col items-end justify-center gap-1.5">
              <label htmlFor="name">{formFields.name}</label>
              <Input type="text" id="name" {...register("name")} />
              {errors.name && (
                <span className="text-red-500">{errors.name?.message}</span>
              )}
            </div>

            {/* phone num field */}
            <div className="flex w-full flex-auto flex-col items-end justify-center gap-1.5">
              <label htmlFor="phoneNumber">{formFields.phoneNumber}</label>
              <Input type="tel" id="phoneNumber" {...register("phoneNumber")} />
              {errors.phoneNumber && (
                <span className="text-red-500">
                  {errors.phoneNumber?.message}
                </span>
              )}
            </div>

            {/* message field */}
            <div className=" flex w-full flex-auto flex-col items-end justify-center gap-1.5">
              <label htmlFor="message">{formFields.message}</label>
              <Textarea
                placeholder={formFields.messagePlaceholder}
                id="message"
                {...register("message")}
              />
              {errors.message && (
                <span className="text-red-500">{errors.message?.message}</span>
              )}
            </div>

            {/* submit button */}
            <Button
              id="contact-submit-button"
              type="submit"
              className="ml-auto mt-3 flex w-full items-center justify-center gap-2.5 text-base drop-shadow-md lg:w-auto lg:text-lg"
            >
              {isSubmitting && (
                <ImSpinner8 className="mt-[1px] h-4 w-4 animate-spin" />
              )}
              {text.submitButton}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
