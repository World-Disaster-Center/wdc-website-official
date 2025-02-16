import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function PartnerWithUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const form = useRef();

  // Function to validate form fields
  const validateForm = () => {
    if (!firstName || !lastName || !email || !subject || !message) {
      toast.error("All fields are required!", { theme: "dark" });
      return false;
    }
    return true;
  };

  // Function to send the email
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setPending(true);
    emailjs
      .sendForm(
        "service_d3yy0xf", // Replace with your service ID
        "template_zsnn9zs", // Replace with your template ID
        form.current,
        "S6rrT9Cqk-qhVNtap", // Replace with your public key
      )
      .then(() => {
        setPending(false);
        toast.success("Message sent successfully!", { theme: "dark" });
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        setPending(false);
        toast.error(`Error: ${err.text}`);
      });
  };
  return (
    <div className="justify-center items-center flex flex-col p-8 mt-10 mx-28">
      <h1>Partner With WDC</h1>
      <div className="w-full lg:w-1/2 bg-gray-800 p-10 rounded-md shadow-lg relative min-h-[600px]">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Keep in Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="first_name"
                className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="last_name"
                className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="from_email"
              className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="mt-1 p-3 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-3 font-bold rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105">
              {pending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
