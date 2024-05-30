import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
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
