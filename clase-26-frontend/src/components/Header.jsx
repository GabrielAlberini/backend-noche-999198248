import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="home-header">
      <h1>Welcome to Our Store</h1>
      <nav>
        <ul>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>)
}

export { Header }