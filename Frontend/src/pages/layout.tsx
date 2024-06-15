import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useState } from "react"

Layout.defaultProps = {
    navbar: true,
    sidebar: true,
    footer: true
}

export default function Layout({ children, navbar, footer, sidebar }: { children: React.ReactNode, navbar: boolean, footer: boolean, sidebar: boolean }) {
    const [isSidebarOpen, setSidebar] = useState<boolean>(false);
    return (
        <div className="edokan-app bg-gray-950 text-white min-h-screen">
            <nav>{navbar && <Navbar isSidebarOpen={isSidebarOpen} setSidebar={setSidebar} />}</nav>
            <aside>{sidebar && <Sidebar isSidebarOpen={isSidebarOpen} setSidebar={setSidebar} />}</aside>

            <main className="sm:ml-64 relative mt-14">
                <div>{children}</div>
                <footer>{footer && <Footer />}</footer>
            </main>
        </div>
    )
}
