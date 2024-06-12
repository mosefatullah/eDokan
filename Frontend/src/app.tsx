import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout";
import AppLayout from "./pages/app/layout";
import Home from "./pages/index";
import Dashboard from "./pages/app/index";
import Login from "./pages/account/login";
import Signup from "./pages/account/signup";

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
          path="/account/signup"
          element={
            <Layout flexBetween>
              <Signup />
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
            <></>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
