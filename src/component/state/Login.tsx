import React, { useState } from "react";

interface AuthUserProps {
  name: string;
  email: string;
}
export const Login = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false);
  // const [isLoggedIn, setIsLoggedIn] = useState<AuthUserProps | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<AuthUserProps>(
    {} as AuthUserProps
  );
  /**
   * {} as AuthUserProps - > you don't need to check null check isloggedIn?.name
   * null - > you  need to check  isloggedIn?.name
   */
  const handleLogin = () => {
    setIsLoggedIn({ name: "lakshmi", email: "lakshmi@gamil.com" });
  };
  const handleLogout = () => {
    setIsLoggedIn({ name: "", email: "" });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* <div>{isLoggedIn?.name ? "UserLogin" : "User Logout "}</div> */}
      <div>{isLoggedIn.email ? "UserLogin" : "User Logout "}</div>
    </div>
  );
};
