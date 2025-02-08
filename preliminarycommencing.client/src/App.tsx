import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Navbar from "./components/Navbar";
import WeatherPage from "./pages/WeatherPage";
import HomePage from "./pages/HomePage";
import Tracker from "./pages/Tracker";
import Chat from "./pages/Chat";
import Calculator from './pages/Calculator';


function App() {

return(
    <Provider store={store}>
        <Router>
            <div className="container-main">
            <Navbar />
              <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tracker" element={<Tracker />} />
                    <Route path="/calc" element={<Calculator />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/weather" element={<WeatherPage />} /> 
               </Routes>   
            </div>
       
           </Router>

    </Provider>
)
}

export default App;