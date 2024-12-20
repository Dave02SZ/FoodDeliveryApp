import Navbar from "../../Componens/NavBar/NavBar.tsx";
import HomePageContent from "../../Componens/HomePageContent/HomePageContent.tsx";
import Footer from "../../Componens/Footer/Footer.tsx";
import "./HomePage.css"

const HomePage = () => {
    return (
        <>
            <div className="home-page-container">
                <Navbar />
                <HomePageContent />
                <Footer />
            </div>
        </>
    )
}

export default HomePage