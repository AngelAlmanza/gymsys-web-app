import { PrivateRoutes } from "@/core/enums";
import { useAppDispatch } from "@/core/store/hooks";
import { setIsAuthenticated } from "@/core/store/slices";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    console.log("Login");
    dispatch(setIsAuthenticated(true));
    navigate(PrivateRoutes.DASHBOARD);
  };

  return {
    handleLogin,
  };
};
