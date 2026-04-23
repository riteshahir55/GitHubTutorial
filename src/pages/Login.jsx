import { useState } from "react";
import { login } from "../api/mockAuth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    setMessage("Loading...");
    try {
      await login(username, password);
      setMessage("Login Successful");
    } catch (err) {
      if (err.status === 401) {
        setMessage("Invalid credentials");
      } else {
        setMessage("Server error");
      }
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <input
        data-testid="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        data-testid="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button data-testid="login-btn" onClick={handleLogin}>
        Login
      </button>

      <p data-testid="message">{message}</p>
    </div>
  );
}

export default Login;