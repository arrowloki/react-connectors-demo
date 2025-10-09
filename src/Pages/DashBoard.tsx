import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient.ts";
import Apps from "./Apps.tsx";

const DashBoard = () => {
  const [user, setUser] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const navigate = useNavigate();
  const fetchData = async () => {
    const { data } = await axiosClient.get("/auth/me");
    setUser(data.username);
    setEmail(data.email);
    console.log(data);
  };

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    fetchData();
  }, [navigate]);
  return (
    <div>
      <div className="flex">
        <span title={email ?? ""}>{user}</span>
        <button onClick={handleLogout} className="bg-black text-amber-100">
          Logout
        </button>
      </div>
      <div>{user && <Apps />}</div>
    </div>
  );
};

export default DashBoard;
