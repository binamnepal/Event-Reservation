import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnText, setBtnText] = useState("LogIn");
  const [btnClass, setBtnClass] = useState("");
  const [btnStyle, setBtnStyle] = useState({
    position: "absolute",
    left: "50%",
    top: "auto",
    transform: "translateX(-50%)",
  });

  const navigate = useNavigate();

  const handleMouseOver = () => {
    if (email.trim() === "" || password.trim() === "") {
      setBtnText("Plese fill the details first!");
      setBtnClass("warning");

      const container = document.querySelector(".login-box");
      const btn = document.querySelector(".btn");

      let maxX = container.clientWidth - btn.clientWidth - 20;
      let maxY = container.clientHeight - btn.clientHeight - 20;

      setBtnStyle({
        position: "absolute",
        left: Math.random() * maxX + "px",
        top: Math.random() * maxY + "px",
        transform: "none",
      });
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);

    if (email.trim() !== "" && password.trim() !== "") {
      setBtnText("Login");
      setBtnClass("success");
      setBtnStyle({
        position: "absolute",
        left: "50%",
        top: "auto",
        transform: "translateX(-50%) scale(1.1)",
      });
    } else {
      setBtnText("Fill the details first!   ");
      setBtnClass("warning");
    }
  };

  const handleLogin = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Please fill the details first!");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <label>Email</label>
      <input
        type="text"
        id="email"
        placeholder="Enter Email"
        value={email}
        onChange={handleInputChange}
      />
      <label>Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter Password"
        value={password}
        onChange={handleInputChange}
      />
      <button
        className={`btn ${btnClass}`}
        style={btnStyle}
        onMouseOver={handleMouseOver}
        onClick={handleLogin}
      >
        {btnText}
      </button>
    </div>
  );
}
export default Login;
