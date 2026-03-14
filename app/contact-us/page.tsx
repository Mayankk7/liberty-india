"use client";

import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Contact form submission is currently unavailable.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCFAF3]">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form className="w-full max-w-md bg-white rounded shadow p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 text-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 text-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 text-lg min-h-[120px]"
          required
        />
        <button
          type="submit"
          className="bg-[#E07B39] text-white font-semibold rounded px-6 py-3 text-lg hover:bg-orange-600 transition-all"
        >
          Send Message
        </button>
        {status && <div className="text-center text-sm mt-2">{status}</div>}
      </form>
    </div>
  );
}
