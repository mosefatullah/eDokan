import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import AppLayout from "./pages/app/layout";
import Home from "./pages/index";
import Dashboard from "./pages/app/index";

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
          path="/app/"
          element={
            <AppLayout flexBetween>
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
