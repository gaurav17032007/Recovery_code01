import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Nav.jsx";
import Pro1 from "./Component/pro1.jsx";
import Pro2 from "./Component/pro2.jsx";
import Pro3 from "./Component/pro3.jsx";
import Pro4 from "./Component/pro4.jsx";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Pro1 />} />
                <Route path="/about" element={<Pro2 />} />
                <Route path="/service" element={<Pro3 />} />
                <Route path="/contact" element={<Pro4 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;