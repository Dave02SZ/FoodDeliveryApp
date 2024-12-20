import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/MainPage/HomePage.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" index element={<HomePage />}/>
            </Routes>
        </Router>
    );
};

export default App;
