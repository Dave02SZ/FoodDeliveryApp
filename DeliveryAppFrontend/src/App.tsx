import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/MainPage/HomePage.tsx";
import AdminHomePage from "./Pages/AdminMainPage/AdminHomePage.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<HomePage />}/>
                <Route path="/admin" index element={<AdminHomePage />}/>
            </Routes>
        </Router>
    );
};

export default App;
