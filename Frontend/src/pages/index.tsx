import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CheckLogin from "../components/CheckAuth";
import { getUserInfo } from "../utils/account";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Main() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get("access_token");

    if (token) {
      localStorage.setItem("access-token", token);
      getUserInfo((info) => {
        if (info) {
          localStorage.setItem("user-info", JSON.stringify(info));
        } else {
          localStorage.removeItem("user-info");
        }
      });
      setTimeout(() => {
        window.history.replaceState({}, document.title, location.pathname);
      }, 10);
    }
  }, [location]);

  return (
    <CheckLogin>
      <div className="min-h-[120vh] p-4 md:p-8">
        <Splide aria-label="Homepage Banner" options={{
          rewind: true,
          width: "100%",
          height: "20rem",
        }}
          className="bg-gray-700">
          <SplideSlide>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Image 1" className="w-full" style={{
              aspectRatio: "16/9"
            }} />
          </SplideSlide>
          <SplideSlide>
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Image 2" className="w-full" style={{
              aspectRatio: "16/9"
            }} />
          </SplideSlide>
        </Splide>
      </div>
    </CheckLogin>
  )
}
