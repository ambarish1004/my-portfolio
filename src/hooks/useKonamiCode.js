import { useEffect } from "react";

const useKonamiCode = (callback) => {
  useEffect(() => {
    const code = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let current = 0;

    const handleKey = (e) => {
      if (e.key === code[current]) {
        current++;
        if (current === code.length) {
          callback();
          current = 0;
        }
      } else {
        current = 0;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [callback]);
};

export default useKonamiCode;
