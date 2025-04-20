import { useRef } from "react";
import "../styles/magneticButton.css";

const MagneticButton = ({ children }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const resetPosition = () => {
    buttonRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <button
      ref={buttonRef}
      className="magnetic"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
