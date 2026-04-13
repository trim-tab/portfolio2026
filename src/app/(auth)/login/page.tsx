import React from "react";

export default function page() {
  return (
    <>
      <form>
        <h2>Login</h2>

        <div className="flex">
          <div className="bg-amber-50">
            <label>Username or Email:</label>
            <input
              className="bg-white border"
              id="email"
              placeholder="email"
            ></input>
            <label>password</label>
            <input
              className="bg-white border"
              id="password"
              placeholder="password"
            ></input>
          </div>
        </div>
      </form>
    </>
  );
}
