import { useEffect } from "react";

const YourPage = () => {
  useEffect(() => {
    document.title = "Projects – Your Name";
  }, []);

  return <div>Projects content</div>;
};

export default YourPage;
