import { NavLink } from "react-router-dom"
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  const publicLinks = (
    <ul>
      <li><NavLink to="/login">LOG IN</NavLink></li>
      <li><NavLink to="/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/logout" onClick={handleLogout}>LOG OUT</NavLink></li>
      <li><NavLink to="/changePassword" onClick={handleLogout}>Change Password</NavLink></li>
      <li><NavLink to="/potlucks">Potlucks</NavLink></li>
      <li><NavLink to="/potlucks/add">Add Potluck</NavLink></li>
      <li><NavLink to="/profiles">Profiles</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to={'/'}></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar