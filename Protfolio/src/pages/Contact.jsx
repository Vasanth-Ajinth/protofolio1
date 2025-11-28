import React, { useState } from "react";
import "./Contacts.css";

function Contact() {
  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // remove old error
  };

  const validate = () => {

    if (!form.fullname || !form.phone || !form.email || !form.message) {
      return "All fields are required!";
    }

    if (!/^\d{10}$/.test(form.phone)) {
      return "Enter valid 10 digit mobile number!";
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return "Enter valid email!";
    }

    return "";
  };

  const shakeError = (msg) => {
    setError(msg);
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const validation = validate();
    if (validation) {
      shakeError(validation);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ fullname: "", phone: "", email: "", message: "" });

      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }, 1200);
  };

  return (
    <>
      {success && <div className="success-popup">✔ Message Sent!</div>}

      <form onSubmit={sendMessage} className={shake ? "shake" : ""}>

        <h1 style={{textAlign:'center'}}>Contact Us</h1>

        <input
          className={error && !form.fullname ? "error-input" : ""}
          name="fullname"
          value={form.fullname}
          onChange={handleChange}
          placeholder="Full Name"
        />

        <input
          className={error && !/^\d{10}$/.test(form.phone) ? "error-input" : ""}
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Mobile Number"
        />

        <input
          className={error && !/\S+@\S+\.\S+/.test(form.email) ? "error-input" : ""}
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <textarea
          className={error && !form.message ? "error-input" : ""}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
        ></textarea>

        {error && <p className="error-msg">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </>
  );
}

export default Contact;
