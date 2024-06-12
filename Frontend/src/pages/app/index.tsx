import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CheckLogin from "../../components/app/CheckLogin";

export default function Dashboard() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");

    if (accessToken) {
      localStorage.setItem("access-token", accessToken);
      setTimeout(() => {
        window.history.replaceState({}, document.title, location.pathname);
      }, 10);
    }
  }, [location]);
  return (
      <CheckLogin>
          <div className="min-h-[120vh] p-4 pt-6 md:p-8">Dashboard</div>
      </CheckLogin>
    )
}
