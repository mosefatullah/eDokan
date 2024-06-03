import Navbar from "./components/Navbar"

Layout.defaultProps = {
    navbar: true
}

export default function Layout({ children, navbar }: { children: React.ReactNode, navbar: boolean }) {
    return (
        <div className="bg-gray-950 text-white relative">
            <nav>{navbar && <Navbar />}</nav>
            <main>{children}</main>
        </div>
    )
}
