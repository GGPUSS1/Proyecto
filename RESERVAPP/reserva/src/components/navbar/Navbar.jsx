import { Link } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
  const {user} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
        <span className="logo" style={{color:"white",textDecoration:"none"}}>RESERVAS ONLINE</span>
        </Link>
        {user ? user.username:(
          <div className="navItems">
            <Link to="/register" className="navButton">Registro</Link>
            <Link to="/login" className="navButton">Acceder</Link>
        </div>
        )}

      </div>
    </div>
  )
}

export default Navbar