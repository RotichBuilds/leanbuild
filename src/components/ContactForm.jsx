import React, { useState } from "react";

const ContactForm = ({ onClose, onSubmit }) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject) {
      alert("Please select a subject.");
      return;
    }
    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }
    if (onSubmit) {
      onSubmit({ subject, message, phone });
    }
  };

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        onClick={stopPropagation}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Submit Your Query</h2>

        <label htmlFor="phone" className="block font-medium mb-1">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="+254 7XX XXX XXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        <label htmlFor="subject" className="block font-medium mb-1">
          Select Subject
        </label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          <option value="" disabled>
            -- Choose a subject --
          </option>
          <option value="Construction">Construction</option>
          <option value="Smart Systems">Smart Systems</option>
          <option value="Sustainable Building">Sustainable Building</option>
        </select>

        <label htmlFor="message" className="block font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Write your message here..."
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
        />

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          >
            Go Back
          </button>
          <button
            type="submit"
            className="font-semibold py-2 px-4 rounded text-white bg-teal-600 hover:bg-teal-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;