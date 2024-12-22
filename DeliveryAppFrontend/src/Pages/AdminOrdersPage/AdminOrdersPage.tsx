import Navbar from "../../Componens/NavBar/NavBar.tsx";

import Footer from "../../Componens/Footer/Footer.tsx";
import AdminHomePageContent from "../../Componens/HomePageContent/AdminHomePageContent.tsx";

const HomePage = () => {
    return (
        <>
            <div className="home-page-container">
                <Navbar />
                <AdminHomePageContent />
                <Footer />
            </div>
        </>
    )
}

export default HomePage