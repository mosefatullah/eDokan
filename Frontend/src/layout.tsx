import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

Layout.defaultProps = {
    navbar: true,
    footer: true,
    flexBetween: false
}

export default function Layout({ children, navbar, footer, flexBetween }: { children: React.ReactNode, navbar: boolean, footer: boolean, flexBetween: boolean }) {
    return (
        <div className={"bg-gray-950 text-white relative" + (flexBetween && " min-h-screen flex flex-col justify-between")}>
            <nav>{navbar && <Navbar />}</nav>
            <main className="py-10">{children}</main>
            <footer>{footer && <Footer />}</footer>
        </div>
    )
}
