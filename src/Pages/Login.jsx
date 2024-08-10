import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const hardcodedUsername = "admin";
  const hardcodedPassword = "admin@123";

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === hardcodedUsername && password === hardcodedPassword) {
      navigate("/dashboard/tunnel-view");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col py-14 rounded-xl bg-primary min-w-[550px] min-h-[450px] gap-y-12">
        <div className="flex flex-col items-center gap-y-8">
          <img src="/logo.svg" alt="Logo" />
          <h1 className="text-white text-2xl font-semibold">
            Login to your account
          </h1>
        </div>
        <form className="flex flex-col px-16 gap-y-3" onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-8 bg-primary p-5 border border-[#34415E] text-white rounded-md"
            placeholder="Username"
          />
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-8 w-full bg-primary p-5 border border-[#34415E] text-white rounded-md"
              placeholder="Password"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex items-center justify-between text-white">
            <div className="flex gap-x-3 my-1">
              <input
                type="checkbox"
                name="remember_me"
                className="bg-gradient-to-r from-indigo-400 to-sky-300"
              />
              <label htmlFor="remember_me">Remember Me</label>
            </div>
            <p>Forgot your password?</p>
          </div>
          <button
            type="submit"
            className="my-3 bg-[#6A75EA] p-2.5 text-white rounded font-semibold lg:text-xl text-base hover:bg-indigo-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
