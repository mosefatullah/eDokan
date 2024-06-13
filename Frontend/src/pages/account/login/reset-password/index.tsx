import { Link } from "react-router-dom";
import { resetPassword } from "../../../../utils/account";
import { useState } from "react";

export default function ResetPassword() {
  const [isSent, setIsSent] = useState<boolean>(false);
  function resetPasswordAction() {
    const username = (document.getElementById("username") as HTMLInputElement).value;
    resetPassword(username, (data) => {
      setIsSent(true);
      console.log(data);
    }, (error: { message: string }) => {
      alert(error.message);
    });
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 mx-auto lg:py-0">
        {isSent == false ? <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[470px] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link to="/account/login">
              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-full text-sm px-2 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 active:bg-gray-700 dark:active:bg-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
            </Link>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Reset Password</h1>
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); resetPasswordAction(); return false }}>
              <div>
                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset Password</button>
            </form>
          </div>
        </div> : (
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[470px] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Link to="/account/login">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-full text-sm px-2 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 active:bg-gray-700 dark:active:bg-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
              </Link>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Reset Password</h1>
              <hr className="border-gray-200 dark:border-gray-600" />
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Password reset link sent!</h2>
                <p className="text-gray-500 dark:text-gray-400">Please check your email for the password reset link.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}