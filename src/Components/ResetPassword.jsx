import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(formData);
    fetch("/forgotpassword", {
      method: "POST",
      // "[object Object]" is not valid JSON if i dont json stringify
      body: JSON.stringify({
        email: formData.email,
      }),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message == "Password Reset Token has been sent to the registered email") {
          navigate("/");
        } else {
          alert(data.message);
        }
      });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, subscribe: e.target.checked });
  };

  return (
    <div className="form-wrapper">
      <div className="signup-form">
        <h2>Reset Password?</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
