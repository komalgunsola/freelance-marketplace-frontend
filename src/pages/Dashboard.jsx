import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold text-green-600 mb-8">
        Welcome to Dashboard 🚀
      </h1>

      <div className="grid grid-cols-3 gap-8">

        {/* My Gigs */}
        <div
          onClick={() => navigate("/services")}
          className="bg-white shadow-lg p-8 rounded-xl hover:scale-105 transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold">My Gigs</h2>
          <p className="text-gray-500 mt-2">Manage your services</p>
        </div>

        {/* Orders */}
        <div
          onClick={() => alert("Orders Module (Demo UI)")}
          className="bg-white shadow-lg p-8 rounded-xl hover:scale-105 transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold">Orders</h2>
          <p className="text-gray-500 mt-2">Track your orders</p>
        </div>

        {/* Messages */}
        <div
          onClick={() => alert("Messages Module (Demo UI)")}
          className="bg-white shadow-lg p-8 rounded-xl hover:scale-105 transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-gray-500 mt-2">Chat with users</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;