import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
