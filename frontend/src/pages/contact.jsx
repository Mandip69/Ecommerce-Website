import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Load values from .env (Vite)
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplate = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 1️⃣ Send email to you
    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log("Message sent to you:", result.text);

        // 2️⃣ Send auto-reply to user
        emailjs
          .send(
            serviceID,
            autoReplyTemplate,
            {
              from_name: form.current.from_name.value,
              to_email: form.current.from_email.value,
            },
            publicKey
          )
          .then(
            () => console.log("Auto-reply sent to user"),
            (err) => console.log("Auto-reply failed:", err)
          );

        setStatus(
          "Message sent successfully! You will also receive a confirmation email."
        );
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        setStatus("Something went wrong. Try again.");
      }
    );
  };

  return (
    <section className="bg-gray-50 text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-blue-500">Contact Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Have a question or want to order a custom frame? Reach out to us!
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <p>Samakhusi, Kathmandu, Nepal</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <p>+977 9841469235</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <p>samratframehouse197@gmail.com</p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=100070090202056"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition font-semibold"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white p-8 rounded-xl shadow-lg space-y-4"
            >
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  name="from_email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input
                  name="from_phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-lg resize-none"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#0066cc] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Send Message
              </button>

              {status && (
                <p className="text-green-500 mt-2 text-center font-medium">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
         <iframe
  title="Samrat Frame House Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.172202813447!2d85.31304791505492!3d27.73611848278838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900495b20d1%3A0x7f4427c7a159a2d9!2sSamakhusi%20Tokha%20Rd%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1696200000000!5m2!1sen!2snp"
  width="100%"
  height="400"
  style={{ border: 0, borderRadius: "12px" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


        </div>
      </div>
    </section>
  );
}
