import { useEffect, useState } from 'react'
import { verifyToken } from '../../utils/account';

export default function CheckLogin(
    { children }: { children: React.ReactElement }
) {
    const [isLogin, setIsLogin] = useState<boolean | null>(null);

    useEffect(() => {
        setTimeout(() => {
            if (window.localStorage.getItem("access-token") !== null) {
                verifyToken(
                    () => {
                        setIsLogin(false);
                        window.location.href = "/account/login";
                    },
                    () => {
                        setIsLogin(true);
                    }
                );
            } else {
                setIsLogin(false);
                window.location.href = "/account/login";
            }
        }, 1000);
    }, []);
    return (
        <>
            {isLogin === null ? (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-12 h-12 border-2 dark:border-gray-700 border-t-primary-600 dark:border-t-primary-600 rounded-full animate-spin"></div>
                </div>
            ) : (
                children
            )}
        </>
    )
}
