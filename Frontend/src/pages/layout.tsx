import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

Layout.defaultProps = {
    navbar: true,
    footer: true,
    flexBetween: false
}

export default function Layout({ children, navbar, footer, flexBetween }: { children: React.ReactNode, navbar: boolean, footer: boolean, flexBetween: boolean }) {
    return (
        <div className={"edokan-root bg-gray-50 dark:bg-gray-950 text-black dark:text-white" + (flexBetween && " min-h-screen flex flex-col justify-between")}>
            <nav className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-0">{navbar && <Navbar />}</nav>
            <main className="py-10">{children}</main>
            <footer>{footer && <Footer />}</footer>
        </div>
    )
}
