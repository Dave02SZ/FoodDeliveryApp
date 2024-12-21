import './Navbar.css';

const AdminNavbar = () => {

    return(
        <nav className="navbar">
            <div className="navbar-logo-container">
                <a href="/">
                    <p>FOOD</p>
                    <p>DELIVERY</p>
                </a>
            </div>

            <div className="navbar-links-container">
                <a href="#">RENDELÉS</a>
                <a href="#">RÓLUNK</a>
                <a href="#">RENDELÉSEK</a>
            </div>

            <div className="navbar-actions-container">
                <a href="/" className="navbar-login-btn">VISSZA USER</a>
                <a href="/">
                </a>
            </div>
        </nav>

    )
}

export default AdminNavbar
