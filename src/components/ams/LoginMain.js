import React from "react";
import { useNavigate } from "react-router";

function LoginMain() {
  const navigate = useNavigate();

  const onClickSubmit = () => {
    navigate("/welcome");
  };
  return (
    <div>
      <input placeholder="Email" type="email" />
      <input placeholder="password" type="password" />

      <button title="Submit" onClick={onClickSubmit}>
        {" "}
        <p>Submit</p>{" "}
      </button>
    </div>
  );
}

export default LoginMain;
