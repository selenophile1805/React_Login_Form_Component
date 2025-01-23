import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be 8 characters long");
      return;
    } else if (password !== confirmpass) {
      setError("Passwords do not match!");
      return;
    } else if (!/[!@#$%]/.test(password)) {
      setError(
        "Password must include at least one special character (!, @, #, $, %)"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must include at least one uppercase letter");
      return;
    } else {
      setError("");
    }

    setUsers([...users, { fullName, email, password }]);
    setFullName("");
    setConfirmpass("");
    setEmail("");
    setPassword("");

    toast.success("Login Successful! ✅", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Login to Your Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Enter your credentials to access your dashboard.
        </p>
        <form className="space-y-4" onSubmit={submitHandler}>
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-base"
            type="text"
            value={fullName}
            placeholder="Full Name"
            required
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-base"
            type="email"
            value={email}
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-base"
            type="password"
            value={password}
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-base"
            type="password"
            value={confirmpass}
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmpass(e.target.value)}
          />
          {error && (
            <p className="text-red-500 text-center text-sm font-medium">
              {error}
            </p>
          )}
          <button
            className="w-full bg-blue-500 text-white font-medium text-lg py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
            type="submit"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
        <p className="text-gray-500 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline font-medium transition duration-200"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
