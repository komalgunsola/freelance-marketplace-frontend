import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-green-500 to-green-700 text-white min-h-[80vh] flex flex-col justify-center items-center text-center">

      <h1 className="text-5xl font-bold mb-4">
        Find Freelance Services Easily 🚀
      </h1>

      <p className="text-lg mb-6 max-w-xl">
        Hire top freelancers or showcase your skills.
      </p>

      <button
        onClick={() => navigate("/services")}
        className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition"
      >
        Explore Services
      </button>

    </div>
  );
}

export default Home;