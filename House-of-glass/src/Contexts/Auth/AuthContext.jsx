import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate;
  const [isLogged, setIsLogged] = useState(false);
  const token = localStorage.getItem("Token");
  const [userDetails, setUserDetails] = useState({
    cartList: [],
    wishList: [],
    firstName: "",
  });

  useEffect(() => {
    if (token) {
      setIsLogged(true);
    }
  }, [isLogged]);

  const logoutHandler = () => {
    localStorage.removeItem("Token");
    setIsLogged(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        userDetails,
        setUserDetails,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
