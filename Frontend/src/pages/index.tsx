import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-center text-5xl font-semibold mb-4 leading-tight">Blending Physical Stalls Into the Digital Landscape</h1>
          <p className="text-center text-xl text-gray-500">eDokan revolutionizes the retail experience, seamlessly integrating physical stalls into the online realm, elevating productivity and skyrocketing sales.</p>
          <div className="flex justify-center mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="147" height="24" fill="none"><path fill="url(#ab)" d="m3.04 7.62-.038 5.003.119-.004a.726.726 0 0 0 .365-.1c.366-.23 1.188-.915 1.2-2.454.003-.456.203-1.063.407-1.567.18-.444-.126-.943-.598-.928l-1.454.05Zm1.234 2.346.143 2.491-.143-2.49Zm5.507-.522-.115-2.493.115 2.493Zm19.941-1.749.11 2.494-.11-2.494Zm23.356-1.573.041 2.499-.04-2.5Zm27.835-1.497.01 2.5-.01-2.5Zm26.468-.886-.071 2.503.071-2.503Zm11.345-.131.074-2.503-.074 2.503Zm9.122-.095-.122 2.503.122-2.503Zm11.259.073.1-2.503-.1 2.503Zm4.929-2.546.051 5 .119-.006a.728.728 0 0 0 .364-.107c.362-.236 1.172-.935 1.156-2.473-.005-.456.184-1.066.38-1.574.172-.446-.144-.94-.616-.915l-1.454.075ZM3.041 7.62a2.416 2.416 0 0 1 .294.007c.043.004.23.02.458.085A2.379 2.379 0 0 1 5.51 9.918c.043 1.085-.594 1.772-.808 1.977-.256.245-.5.38-.592.428-.207.11-.381.165-.423.179-.07.022-.127.037-.157.044-.06.016-.108.025-.126.029a2.23 2.23 0 0 1-.089.015l.063-.008a52.578 52.578 0 0 1 .826-.1l.16-.019.053-.006-.286-4.982a65.077 65.077 0 0 0-1.43.177 2.583 2.583 0 0 0-.354.087 2.645 2.645 0 0 0-1.016.607c-.216.205-.853.892-.81 1.977a2.379 2.379 0 0 0 1.717 2.207c.228.065.416.08.46.085a2.46 2.46 0 0 0 .304.008l.039-5.004Zm1.376 4.837c1.83-.18 3.617-.356 5.478-.519l-.229-4.987c-1.893.165-3.706.343-5.535.524l.286 4.982Zm5.478-.519c6.666-.582 13.265-1.178 19.937-1.749l-.22-4.988c-6.674.571-13.304 1.17-19.946 1.75l.23 4.987Zm19.937-1.749c7.444-.637 15.599-1.125 23.287-1.568l-.081-4.998c-7.685.442-15.904.934-23.426 1.578l.22 4.988ZM53.12 8.621c9.25-.533 18.571-1.078 27.803-1.495l-.019-5.002c-9.27.419-18.625.967-27.865 1.499l.081 4.998Zm27.803-1.495c8.842-.4 17.88-.776 26.388-.884l.142-5.006c-8.596.11-17.706.49-26.549.888l.02 5.002Zm26.388-.884c3.79-.048 7.553-.087 11.343-.131l.147-5.006c-3.777.044-7.557.083-11.348.131l-.142 5.006Zm11.343-.131c3.091-.037 6.191-.117 9.073-.095l.245-5.006c-2.945-.023-6.182.06-9.171.095l-.147 5.006Zm9.073-.095c3.746.03 7.416.077 11.281.073l.2-5.006c-3.835.004-7.458-.043-11.236-.073l-.245 5.006Zm11.281.073c1.398-.001 3.375.039 5.08-.05l-.051-4.999c-1.537.08-3.262.041-4.829.043l-.2 5.006Z" style={{ mixBlendMode: "multiply" }} /><path fill="url(#bc)" d="m29.444 18.785-.084 5.005.12-.003a.725.725 0 0 0 .365-.097c.368-.226 1.196-.904 1.221-2.444.008-.456.212-1.061.422-1.564.184-.443-.118-.945-.59-.933l-1.454.036Zm.798 2.369.201 2.484-.2-2.484Zm3.695-.428-.158-2.49.158 2.49Zm13.38-1.41.152 2.49-.152-2.49Zm15.673-1.177.048 2.498-.048-2.498Zm18.68-1.024.001 2.501-.002-2.501Zm17.764-.436-.119 2.503.119-2.503Zm7.615.061.122-2.503-.122 2.503Zm6.123.06-.194 2.502.194-2.502Zm7.558.264.162-2.502-.162 2.502Zm3.3-2.461.052 5 .119-.007a.727.727 0 0 0 .363-.107c.362-.235 1.172-.934 1.156-2.472-.005-.456.184-1.066.38-1.574.172-.447-.144-.94-.616-.915l-1.454.075Zm-94.586 4.182a2.439 2.439 0 0 1 1.057.213c.108.048 1.347.593 1.393 2.11a2.593 2.593 0 0 1-.481 1.573 2.65 2.65 0 0 1-1.279.965c-.14.05-.256.075-.26.075a1.997 1.997 0 0 1-.065.015 21.076 21.076 0 0 1 .24-.038l.394-.06-.401-4.969a27.851 27.851 0 0 0-.862.13c-.034.007-.097.017-.158.03l-.086.018a2.594 2.594 0 0 0-1.001.473 2.659 2.659 0 0 0-.551.572 2.594 2.594 0 0 0-.482 1.573c.046 1.517 1.285 2.062 1.393 2.111a2.405 2.405 0 0 0 1.065.213l.084-5.004Zm1 4.853a211.72 211.72 0 0 1 3.651-.423l-.316-4.98c-1.283.135-2.51.284-3.737.434l.401 4.97Zm3.651-.423c4.483-.47 8.897-.952 13.374-1.41l-.303-4.98c-4.479.458-8.94.945-13.387 1.41l.316 4.98Zm13.374-1.41c4.962-.507 10.408-.855 15.57-1.168l-.097-4.997c-5.155.312-10.697.666-15.776 1.185l.303 4.98Zm15.57-1.168c6.21-.375 12.452-.762 18.632-1.021l-.003-5.002c-6.237.262-12.53.651-18.726 1.026l.096 4.997Zm18.632-1.021c5.934-.249 11.97-.47 17.644-.434l.237-5.006c-5.806-.037-11.95.189-17.884.438l.003 5.002Zm17.644-.434c2.544.016 5.063.041 7.612.061l.244-5.006c-2.53-.02-5.073-.045-7.619-.061l-.237 5.006Zm7.612.061c2.116.017 4.141-.012 6.051.059l.389-5.003c-2.003-.074-4.231-.047-6.196-.062l-.244 5.006Zm6.051.059c2.501.092 4.984.203 7.59.265l.324-5.005c-2.563-.06-4.976-.169-7.525-.263l-.389 5.003Zm7.59.265c.87.02 2.3.098 3.514.035l-.052-5c-.963.05-2.018-.013-3.138-.04l-.324 5.005Z" style={{ mixBlendMode: "multiply" }} /><defs><linearGradient id="ab" x1="139.076" x2="2.974" y1="3.028" y2="9.197" gradientUnits="userSpaceOnUse"><stop stop-color="#E02CD3" /><stop offset=".447" stop-color="#6243EB" /><stop offset="1" stop-color="#0952FF" /></linearGradient><linearGradient id="bc" x1="120.707" x2="29.341" y1="16.506" y2="19.594" gradientUnits="userSpaceOnUse"><stop stop-color="#E02CD3" /><stop offset=".447" stop-color="#6243EB" /><stop offset="1" stop-color="#0952FF" /></linearGradient></defs></svg>
          </div>
        </div>
        <div className="bg-white border dark:border-0 dark:bg-gray-900 rounded">
          <div className="relative w-full min-h-14 bg-gray-50 dark:bg-gray-800 flex items-center gap-1 rounded-t pr-2 border-b dark:border-0">
            <input type="text" placeholder="Search for products or stalls" className="w-full h-full bg-gray-50 dark:bg-gray-800 px-4 py-2"
              onKeyUp={(e) => {
                const cursorBlink = document.getElementById("cursorBlink");
                if (cursorBlink) {
                  cursorBlink.style.display = "none";
                }
                if (e.target.value === "") {
                  cursorBlink.style.display = "block";
                }
              }}
            />
            <p id="cursorBlink" className="animate-[cursor_1s_ease-in-out_infinite] text-gray-600 text-xl dark:text-white absolute left-[11.8px] -mt-1">|</p>
            <button className="hover:text-white bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 px-4 py-2 rounded active:bg-gray-800 active:transform active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l5-5m0 0l-5-5m5 5H4" />
              </svg>
            </button>
          </div>
          <ul className="w-full p-4 h-[380px] overflow-y-auto rounded-b flex flex-col gap-4">
            <li className="flex gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Rokomari.com_Monogram.svg/450px-Rokomari.com_Monogram.svg.png" className="w-24 h-24 bg-white rounded object-contain object-center" alt="Rokomari.com" />
              <div>
                <h2 className=" text-lg font-semibold">Rokomari.com</h2>
                <p className="text-gray-400">Online Bookstore</p>
                <div className="rating flex items-center gap-1 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>

                </div>
              </div>
              <div className="ms-auto">
                <button className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg">View</button>
              </div>
            </li>
            <li className="flex gap-4">
              <img src="https://media.islamicity.org/wp-content/uploads/2020/09/house-wisdom-05.jpg" className="w-24 h-24 bg-white rounded object-contain object-center" alt="Bayt Al Hikmah" />
              <div>
                <h2 className=" text-lg font-semibold">Bayt Al Hikmah</h2>
                <p className="text-gray-400">Offline Library</p>
                <div className="rating flex items-center gap-1 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>

                </div>
              </div>
              <div className="ms-auto">
                <button className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg">View</button>
              </div>
            </li>
            <li className="flex gap-4">
              <img src="https://discover.daraz.com/images/Group_1083-1644460875.svg" className="w-24 h-24 bg-white rounded object-contain object-center" alt="Daraz" />
              <div>
                <h2 className=" text-lg font-semibold">Daraz</h2>
                <p className="text-gray-400">Online Shopping</p>
                <div className="rating flex items-center gap-1 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </div>
              </div>
              <div className="ms-auto">
                <button className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg">View</button>
              </div>
            </li>
            <li className="flex gap-4">
              <img src="https://freelogopng.com/images/1679248342nagad.png" className="w-24 h-24 bg-white rounded object-contain object-center" alt="Nagad" />
              <div>
                <h2 className=" text-lg font-semibold">Nagad</h2>
                <p className="text-gray-400">Online Mobile Banking</p>
                <div className="rating flex items-center gap-1 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>

                </div>
              </div>
              <div className="ms-auto">
                <button className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg">View</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center">
      </div>
    </div>
  )
}
