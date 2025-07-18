// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import Logo from '../assets/Api_Pro.png'; // Replace with your actual logo path

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4"
    style={{
        background: "linear-gradient(180deg, #000428 0%, #004e92 100%)",
      }}
    >
      {/* Logo at the top */}
      <img src={Logo} alt="Logo" className="w-20 h-20 mb-6" />

      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 shadow-2xl shadow-black bg-[#004e92] focus:bg-[#004e9255] focus:shadow cursor-pointer text-white rounded-lg hover:bg-[#004e9299] transition"
        
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
