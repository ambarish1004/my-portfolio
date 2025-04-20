import { motion } from "framer-motion";

const FlyingElement = ({ type = "plane", top, left, size }) => {
  const src =
    type === "plane"
      ? "/assets/plane.svg"
      : "/assets/planet.svg"; // Place in `public/assets/`

  return (
    <motion.img
      src={src}
      alt=""
      className="floating-asset"
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: size,
        zIndex: -1,
        pointerEvents: "none",
      }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut",
      }}
    />
  );
};

export default FlyingElement;
