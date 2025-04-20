import ContactForm from "../components/ContactForm";
import FlyingElement from "../components/FlyingElement";

const Contact = () => {
  return (
    <div id="contact" style={{ position: "relative", padding: "6rem 1rem", minHeight: "100vh" }}>
      <FlyingElement type="plane" top="20%" left="5%" size="50px" />
      <FlyingElement type="planet" top="70%" left="80%" size="80px" />
      <ContactForm />
    </div>
  );
};

export default Contact;
