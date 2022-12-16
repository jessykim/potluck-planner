import { NavLink } from "react-router-dom"
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  const publicLinks = (
    <>
      <NavLink to="/login">LOG IN</NavLink>
      <NavLink to="/signup">SIGN UP</NavLink>
    </>
  )

  const protectedLinks = (
    <>
      {/* <NavLink to="/changePassword" onClick={handleLogout}>Change Password</NavLink> */}
      <NavLink to="/potlucks">potlucks</NavLink>
      <NavLink to="/potlucks/add">+ add</NavLink>
      {/* <NavLink to="/profiles">Profiles</NavLink> */}
      <NavLink to="/logout" onClick={handleLogout}>LOG OUT</NavLink>
    </>
  )

  return (
    <nav className={styles.container}>
      {/* <NavLink to={'/'}></NavLink> */}
      <div>
        {user ? protectedLinks : publicLinks}
      </div>
    </nav>
  )
}

export default NavBar