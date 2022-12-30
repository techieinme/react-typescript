import { useContext } from "react";
import { AuthUser, UserContext } from "./UserContext";

export const User = () => {
  const usercontext = useContext(UserContext);
  const handleLogin = () => {
    if (usercontext) {
      usercontext.setUser({
        name: "lashmi",
        email: "lk@gamil.com",
      });
    }
  };
  const handleLogout = () => {
    if (usercontext) {
      usercontext.setUser(null);
    }
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div> username {usercontext?.user?.name}</div>
      <div> email {usercontext?.user?.email}</div>
    </>
  );
};
