import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Header from "./components/shared/Header";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/orders" element={<Order />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
