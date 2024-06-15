import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomeLayout from "./pages/welcome/layout";
import Layout from "./pages/layout";
import Welcome from "./pages/welcome/index";
import GetStarted from "./pages/welcome/get-started";
import Home from "./pages/index";
import Login from "./pages/account/login";
import Signup from "./pages/account/signup";
import ResetPassword from "./pages/account/login/reset-password";
import ChangePassword from "./pages/account/login/change-password";
import SignupCallback from "./pages/account/signup/callback";
import Account from "./pages/account";
import Error404 from './components/Error404';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/welcome"
          element={
            <WelcomeLayout flexBetween>
              <Welcome />
            </WelcomeLayout>
          }
        />
        <Route
          path="/welcome/get-started"
          element={
            <WelcomeLayout flexBetween>
              <GetStarted />
            </WelcomeLayout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/account"
          element={
            <Layout>
              <Account />
            </Layout>
          }
        />
        <Route
          path="/account/login"
          element={
            <WelcomeLayout flexBetween>
              <Login />
            </WelcomeLayout>
          }
        />
        <Route
          path="/account/login/reset-password"
          element={
            <WelcomeLayout flexBetween>
              <ResetPassword />
            </WelcomeLayout>
          }
        />
        <Route
          path="/account/login/change-password"
          element={
            <WelcomeLayout flexBetween>
              <ChangePassword />
            </WelcomeLayout>
          }
        />
        <Route
          path="/account/signup"
          element={
            <WelcomeLayout flexBetween>
              <Signup />
            </WelcomeLayout>
          }
        />
        <Route
          path="/account/signup/callback"
          element={
            <WelcomeLayout flexBetween>
              <SignupCallback />
            </WelcomeLayout>
          }
        />
        <Route
          path="*"
          element={
            <Layout flexBetween>
              <Error404 />
            </Layout>
          }
        />
        <Route
          path="/welcome/*"
          element={
            <WelcomeLayout flexBetween>
              <div className="flex items-center justify-center">
                <h1 className="text-2xl font-bold">404 Not Found!</h1>
              </div>
            </WelcomeLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
