import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrderProvider } from "./Componens/OrdersPageContent/OrderContext.tsx";

import HomePage from "./Pages/MainPage/HomePage.tsx";
import AdminHomePage from "./Pages/AdminMainPage/AdminHomePage.tsx";
import CreatePage from "./Pages/CreatePage/CreatePage.tsx";
import OrdersPage from "./Pages/OrdersPage/OrdersPage.tsx";
import AdminOrdersPage from "./Pages/AdminOrdersPage/AdminOrdersPage.tsx";


const App = () => {
    return (
        <OrderProvider>
        <Router>
            <Routes>
                <Route path="/" index element={<HomePage />}/>
                <Route path="/admin" index element={<AdminHomePage />}/>
                <Route path={"admin/create"} index element={<CreatePage />}/>
                <Route path={"/orders"} index element={<OrdersPage />}/>
                <Route path={"/orders"} index element={<AdminOrdersPage />}/>
            </Routes>
        </Router>
        </OrderProvider>
    );
};

export default App;
