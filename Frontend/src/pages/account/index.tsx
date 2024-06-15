import { Link } from "react-router-dom";

export default function Account() {
    return (
        <div className="container mx-auto p-4 md:px-8 min-h-screen">
            <h1 className="text-3xl font-semibold text-center my-10">Account</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Profile</h2>
                    <p className="text-gray-500 dark:text-gray-400">View and edit your profile</p>
                    <Link to="/account/profile" className="block text-blue-500 mt-4">View Profile</Link>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Settings</h2>
                    <p className="text-gray-500 dark:text-gray-400">Change your account settings</p>
                    <Link to="/account/settings" className="block text-blue-500 mt-4">Change Settings</Link>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Earnings</h2>
                    <p className="text-gray-500 dark:text-gray-400">View your earnings</p>
                    <Link to="/account/earnings" className="block text-blue-500 mt-4">View Earnings</Link>
                </div>
            </div>
        </div>
    )
}
