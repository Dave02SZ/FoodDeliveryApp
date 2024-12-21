import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/MainPage/HomePage.tsx";
import AdminHomePage from "./Pages/AdminMainPage/AdminHomePage.tsx";
import CreatePage from "./Pages/CreatePage/CreatePage.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<HomePage />}/>
                <Route path="/admin" index element={<AdminHomePage />}/>
                <Route path={"admin/create"} index element={<CreatePage />}/>
            </Routes>
        </Router>
    );
};

export default App;
