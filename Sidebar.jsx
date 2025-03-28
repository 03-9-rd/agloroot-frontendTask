// src/components/Sidebar.jsx

import { useNavigate } from "react-router-dom";

const Sidebar = ({ logout }) => {
    const navigate = useNavigate();

    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-5">
            <h2 className="text-xl font-bold">Menu</h2>
            <ul className="mt-4">
                <li 
                    className="py-2 px-4 cursor-pointer hover:bg-gray-700"
                    onClick={() => navigate("/dashboard")}
                >
                    📋 Details Page
                </li>
                <li 
                    className="py-2 px-4 cursor-pointer hover:bg-red-600 mt-2" 
                    onClick={logout}
                >
                    🔴 Logout
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
