

import Footer from "../../Componens/Footer/Footer.tsx";
import AdminNavBar from "../../Componens/NavBar/AdminNavBar.tsx";
import NewItem from "../../Componens/NewItem/NewItem.tsx";

const AdminHomePage = () => {
    return (
        <>
            <div className="admin-home-page-container">
                <AdminNavBar />
                <NewItem />
                <Footer />
            </div>
        </>
    )
}

export default AdminHomePage