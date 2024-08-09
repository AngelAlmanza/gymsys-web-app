import { Loading, RoutesWithNotFound } from "@/core/components";
import { AuthGuard } from "@/core/guards";
import { store } from "@/core/store/store";
import { theme } from "@/core/theme";
import { ThemeProvider } from "@mui/material";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./core/enums";

const Login = lazy(() => import("@/features/auth/pages/Login"));
const Dashboard = lazy(() => import("@/features/dashboard/pages/Dashboard"));
const Members = lazy(() => import("@/features/members/pages/Members"));
const Plans = lazy(() => import("@/features/plans/pages/Plans"));
const Subscriptions = lazy(
  () => import("@/features/subscriptions/pages/Subscriptions"),
);
const Products = lazy(() => import("@/features/products/pages/Products"));
const Sales = lazy(() => import("@/features/sales/pages/Sales"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route
                path={PublicRoutes.START}
                element={<Navigate to={PrivateRoutes.DASHBOARD} />}
              />
              <Route
                path={PublicRoutes.LOGIN}
                element={<Login />}
              />
              <Route element={<AuthGuard />}>
                <Route
                  path={PrivateRoutes.DASHBOARD}
                  element={<Dashboard />}
                />
                <Route
                  path={PrivateRoutes.MEMBERS}
                  element={<Members />}
                />
                <Route
                  path={PrivateRoutes.PLANS}
                  element={<Plans />}
                />
                <Route
                  path={PrivateRoutes.SUBSCRIPTIONS}
                  element={<Subscriptions />}
                />
                <Route
                  path={PrivateRoutes.PRODUCTS}
                  element={<Products />}
                />
                <Route
                  path={PrivateRoutes.SALES}
                  element={<Sales />}
                />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </ThemeProvider>
      </Suspense>
    </Provider>
  );
}

export default App;
