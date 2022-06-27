import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create-post">Create Post</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
