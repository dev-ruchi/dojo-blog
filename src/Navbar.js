import { link } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;