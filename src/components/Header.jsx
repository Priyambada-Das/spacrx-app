import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed text-white flex items-center justify-between px-10 py-2 w-full">
      <div className="text-2xl font-bold text-center">
        <h3>SpaceX</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/capsules">CAPSULES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
