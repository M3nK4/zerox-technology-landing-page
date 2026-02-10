import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black font-mono">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4" style={{ color: '#00ff99' }}>404</h1>
        <p className="text-xl text-gray-400 mb-6">Page not found</p>
        <a
          href="/"
          className="text-sm px-4 py-2 rounded-md transition-opacity hover:opacity-80"
          style={{ border: '1px solid #00ff99', color: '#00ff99' }}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
