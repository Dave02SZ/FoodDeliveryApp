import './Navbar.css';

const AdminNavbar = () => {

    return(
        <nav className="navbar">
            <div className="navbar-logo-container">
                <a href="/admin">
                    <p>FOOD</p>
                    <p>DELIVERY</p>
                </a>
            </div>

            <div className="navbar-links-container">
                <a href="/admin/create">Új</a>
                <a href="/admin/orders">RENDELÉSEK</a>
            </div>

            <div className="navbar-actions-container">
                <a href="/" className="navbar-login-btn">KILÉPÉS</a>
                <a href="/">
                </a>
            </div>
        </nav>

    )
}

export default AdminNavbar
