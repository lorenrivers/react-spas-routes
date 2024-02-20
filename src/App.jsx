import { Route, Routes, Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";

export default function App() {
  return (
    <div className="app">
      <h1>Welcome to my Web App</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
