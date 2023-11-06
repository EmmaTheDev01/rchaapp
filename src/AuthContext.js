import { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialAuthState = {
  user: null,
  loading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
    case "REGISTER_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        credentials
      );
      const { access_token, user } = response.data;
      localStorage.setItem("acess_token", access_token);
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.error });
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        userData
      );
      const { access_token, user } = response.data;
      localStorage.setItem("access_token", access_token);
      dispatch({ type: "REGISTER_SUCCESS", payload: user });
    } catch (error) {
      dispatch({
        type: "REGISTER_FAILURE",
        payload: error.response.data.error,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      axios
        .get("http://127.0.0.1:8000/api/auth/profile")
        .then((response) => {
          const user = response.data;
          dispatch({ type: "LOGIN_SUCCESS", payload: user });
        })
        .catch((error) => {
          localStorage.removeItem("access_token");
          dispatch({ type: "LOGOUT" });
        });
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
