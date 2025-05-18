import "./App.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Movie Recommendation App</h1>
      <Navbar />
      <Outlet />
    </div>
  );
}