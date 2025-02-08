import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
 // Подключаем обычный CSS

const Navbar = () => {
    const [indicatorStyle, setIndicatorStyle] = useState({ left: "0px", width: "0px" });
    const navListRef = useRef<HTMLUListElement>(null);
    const location = useLocation();

    useEffect(() => {
        const updateIndicator = () => {
            const activeLink = navListRef.current?.querySelector(".active"); // Обычный className, а не styles.active

            if (activeLink) {
                const linkElement = activeLink as HTMLElement;
                const linkRect = linkElement.getBoundingClientRect();
                const parentRect = navListRef.current!.getBoundingClientRect();

                setIndicatorStyle({
                    left: `${linkRect.left - parentRect.left}px`, // Позиция относительно родителя
                    width: `${linkElement.offsetWidth}px` // Ширина активного элемента
                });
            }
        };

        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [location.pathname]);

    return (
        <nav className="navbar">
            <div className="navExtra"></div>

            <ul className="navList" ref={navListRef}>
                {/* Ползунок теперь корректно двигается */}
                <div className="indicator" style={indicatorStyle}></div>

                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/tracker" className={({ isActive }) => isActive ? "active" : ""}>Tracker</NavLink></li>
                <li><NavLink to="/calc" className={({ isActive }) => isActive ? "active" : ""}>Calculator</NavLink></li>
                <li><NavLink to="/chat" className={({ isActive }) => isActive ? "active" : ""}>Chat</NavLink></li>
                <li><NavLink to="/weather" className={({ isActive }) => isActive ? "active" : ""}>Weather</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
