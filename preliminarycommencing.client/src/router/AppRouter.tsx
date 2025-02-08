import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Tracker from "../pages/Tracker";
import Chat from "../pages/Chat";
import Calculator from "../pages/Calculator";

import WeatherPage from "../pages/WeatherPage";

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element ={<HomePage />}>Home</Route>
                <Route path="/tracker" element ={<Tracker />}>Tracker</Route>
                <Route path="/calc" element ={<Calculator/>}>Calc</Route>
                <Route  path="/chat" element={<Chat />}>Chat</Route>
                <Route path="/weather" element={<WeatherPage />}>Weather</Route>
            </Routes>
        </Router>
    )

}
