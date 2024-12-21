

import Footer from "../../Componens/Footer/Footer.tsx";
import "./AdminHomePage.css"
import AdminNavBar from "../../Componens/NavBar/AdminNavBar.tsx";
import AdminHomePageContent from "../../Componens/HomePageContent/AdminHomePageContent.tsx";

const AdminHomePage = () => {
    return (
        <>
            <div className="admin-home-page-container">
                <AdminNavBar />
                <AdminHomePageContent />
                <Footer />
            </div>
        </>
    )
}

export default AdminHomePage