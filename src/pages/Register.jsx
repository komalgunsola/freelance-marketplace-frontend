import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "Client",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    alert("Registered Successfully ✅");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-green-600">
          Register
        </h1>

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded"
          placeholder="Email"
        />

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded"
          placeholder="Password"
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded"
        >
          <option value="Client">Client</option>
          <option value="Freelancer">Freelancer</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-green-600 w-full text-white p-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;