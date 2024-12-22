

import Footer from "../../Componens/Footer/Footer.tsx";
import AdminNavBar from "../../Componens/NavBar/AdminNavBar.tsx";
import AdminOrdersPageContent from "../../Componens/AdminOrdersPageContent/AdminOrdersPageContent.tsx";

const HomePage = () => {
    return (
        <>
            <div className="home-page-container">
                <AdminNavBar />
                <AdminOrdersPageContent />
                <Footer />
            </div>
        </>
    )
}

export default HomePage