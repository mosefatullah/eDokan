import { useLocation } from "react-router-dom"
import { signupCallback } from "../../../../utils/account"

export default function SignupCallback() {
    const location = useLocation().hash
    const params = new URLSearchParams(location.substring(1));
    const token = params.get("access_token");

    if (token) {
        signupCallback(token)
    } else {
        window.location.href = "/account/signup"
    }
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <div className="w-12 h-12 border-2 dark:border-gray-700 border-t-primary-600 dark:border-t-primary-600 rounded-full animate-spin"></div>
            <h1 className="text-xl font-medium">Creating your account...</h1>
        </div>
    )
}
