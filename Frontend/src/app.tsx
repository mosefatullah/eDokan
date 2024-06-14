import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout";
import AppLayout from "./pages/app/layout";
import Home from "./pages/index";
import Dashboard from "./pages/app/index";
import Login from "./pages/account/login";
import Signup from "./pages/account/signup";
import ResetPassword from "./pages/account/login/reset-password";
import ChangePassword from "./pages/account/login/change-password";
import SignupCallback from "./pages/account/signup/callback";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout flexBetween>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/account/login"
          element={
            <Layout flexBetween>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/account/login/reset-password"
          element={
            <Layout flexBetween>
              <ResetPassword />
            </Layout>
          }
        />
        <Route
          path="/account/login/change-password"
          element={
            <Layout flexBetween>
              <ChangePassword />
            </Layout>
          }
        />
        <Route
          path="/account/signup"
          element={
            <Layout flexBetween>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/account/signup/callback"
          element={
            <Layout flexBetween>
              <SignupCallback />
            </Layout>
          }
        />
        <Route
          path="/app/"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />
        <Route
          path="*"
          element={
            <Layout flexBetween>
              <div className="flex items-center justify-center">
                <h1 className="text-2xl font-bold">404 Not Found!</h1>
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
