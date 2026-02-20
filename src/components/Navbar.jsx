import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-green-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-xl tracking-wide">
        Freelance Marketplace
      </h1>

      <div className="space-x-6 font-medium">
        <Link className="hover:text-gray-200" to="/">Home</Link>

        {!token ? (
          <>
            <Link className="hover:text-gray-200" to="/login">Login</Link>
            <Link className="hover:text-gray-200" to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link className="hover:text-gray-200" to="/dashboard">Dashboard</Link>
            <button
              onClick={handleLogout}
              className="bg-white text-green-600 px-3 py-1 rounded font-semibold"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;