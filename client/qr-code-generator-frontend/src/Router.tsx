import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/home/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;