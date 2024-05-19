const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo to the left side */}
      <img src="favicon.ico" alt="Logo" className="h-8" />

      {/* Links to different pages */}
      <ul>
        <li>
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="/image" className="hover:text-gray-300">
            Gallery
          </a>
        </li>
        <li>
          <a href="/upload" className="hover:text-gray-300">
            Contribute
          </a>
        </li>
        <li>
          <a className="account-bubble">A</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
