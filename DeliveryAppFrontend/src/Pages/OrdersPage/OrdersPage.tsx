import Navbar from "../../Componens/NavBar/NavBar.tsx";

import Footer from "../../Componens/Footer/Footer.tsx";
import OrdersPageContent from "../../Componens/OrdersPageContent/OrdersPageContent.tsx";

const HomePage = () => {
    return (
        <>
            <div className="home-page-container">
                <Navbar />
                <OrdersPageContent />
                <Footer />
            </div>
        </>
    )
}

export default HomePage