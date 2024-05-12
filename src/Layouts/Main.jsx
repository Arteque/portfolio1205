import { Link, NavLink, Outlet } from "react-router-dom"
function Main() {
  return (
    <>
    <header id="main-header">
        <nav>
            <div className="logo-container">
                <Link to="/">
                    <h1>Ahmed Lemssiah</h1>
                </Link>
            </div>
            <ul className="nav-items">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/uebermich">Wer bin ich?</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/kontakt">Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <Outlet />
    </main>
    <footer>Footer</footer>
    </>
  )
}

export default Main