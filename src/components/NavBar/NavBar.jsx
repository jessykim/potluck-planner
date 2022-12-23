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
      <NavLink to="/">home</NavLink>
      <NavLink to="/profiles">profiles</NavLink>
      <NavLink to="/potlucks">potlucks</NavLink>
      <NavLink to="/potlucks/add">+ add</NavLink>
      <NavLink to="/logout" onClick={handleLogout}>LOG OUT</NavLink>
    </>
  )

  return (
    <nav className={styles.container}>
      {/* <NavLink to={'/'}></NavLink> */}
      <div className={styles.navdiv}>
        {user ? protectedLinks : publicLinks}
      </div>
    </nav>
  )
}

export default NavBar