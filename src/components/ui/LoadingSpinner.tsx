import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading state
    const timer = setTimeout(() => setLoading(false), 6000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <ClipLoader loading={loading} size={50} color={"#3498db"} />
    </div>
  );
};

export default LoadingSpinner;
