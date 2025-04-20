import { motion } from "framer-motion";
import "../styles/contact.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xsw5fca", "template_3z67ivc", e.target, "t5Edpw-UQhbLaAWPt")
      .then(() => alert("✅ Message sent!"))
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("❌ Failed to send message.");
      });

    e.target.reset(); // optional: reset form after submit
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={sendEmail} // ✅ this was missing!
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2>Let’s Connect 💬</h2>

      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
      >
        Send 🚀
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
