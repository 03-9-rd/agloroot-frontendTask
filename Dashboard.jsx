// src/pages/Dashboard.jsx
/*import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const mockData = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "David", email: "david@example.com" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [data, setData] = useState(mockData);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="dashboard-container min-h-screen flex flex-col">
      <nav className="navbar bg-blue-500 p-4 flex justify-between text-white">
        <h1 className="text-lg font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span>{user?.email}</span>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </nav>
      <div className="flex flex-grow">
        <aside className="sidebar w-1/4 bg-gray-200 p-4">
          <ul>
            <li className="p-2 bg-gray-300 rounded">Details</li>
          </ul>
        </aside>
        <main className="main-content flex-1 p-4">
          <h2 className="text-xl font-semibold mb-4">Data Table</h2>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
            className="border p-2 mb-4 w-full"
          />
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2 cursor-pointer" onClick={handleSort}>
                  Name {sortOrder === "asc" ? "🔼" : "🔽"}
                </th>
                <th className="border p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Prev
            </button>
            <span>Page {currentPage}</span>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  prev < Math.ceil(filteredData.length / itemsPerPage) ? prev + 1 : prev
                )
              }
              disabled={currentPage >= Math.ceil(filteredData.length / itemsPerPage)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;*/
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser) {
            navigate("/login");
        } else {
            setUser(storedUser);
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    if (!user) return null;

    return (
        <div className="flex h-screen">
            <Sidebar logout={logout} /> {/* ✅ Pass logout to Sidebar */}
            <div className="flex-1">
                <Navbar user={user} logout={logout} />
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Details Page</h2>
                    <DataTable />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
