import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwiElRUDReZHUjt90JN08EFg_Wsdbu5H4GciyEwRxdFLJKO15ba2Ms2F52y6HJCPbQUjQ/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Check your network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12" id="contact">
      <div className="max-w-xl mx-auto text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
           Contact me
        </h2>


        <div className="mt-8 bg-gray-100 p-6 rounded-xl shadow-md">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="text-left">
              <label className="block text-gray-600 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-200"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-200"
                required
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-200"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-[8px] rounded-lg transition-all"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
