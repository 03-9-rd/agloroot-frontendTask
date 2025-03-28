import { useNavigate } from "react-router-dom";

const Navbar = ({ user, logout, deleteAccount }) => {
    const navigate = useNavigate();

    return (
        <nav className="bg-blue-600 text-white flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="relative group">
                <button className="bg-blue-500 px-4 py-2 rounded">
                    {user?.email}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-md rounded hidden group-hover:block">
                    <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                        Logout
                    </button>
                    <button onClick={deleteAccount} className="block w-full text-left px-4 py-2 hover:bg-red-200 text-red-600">
                        Delete Account
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
