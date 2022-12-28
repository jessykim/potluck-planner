import { NavLink } from "react-router-dom"
import styles from './NavBar.module.css'

import { BiHomeSmile } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { BsCalendarWeek } from 'react-icons/bs'
import { GrAdd } from 'react-icons/gr'
import { MdOutlineLogout } from 'react-icons/md'

const NavBar = ({ user, handleLogout }) => {
  const publicLinks = (
    <>
      <NavLink to="/login">LOG IN</NavLink>
      <NavLink to="/signup">SIGN UP</NavLink>
    </>
  )

  const protectedLinks = (
    <>
      <NavLink to="/"><BiHomeSmile /></NavLink>
      <NavLink to="/profiles"><FiUsers /></NavLink>
      <NavLink to="/potlucks"><BsCalendarWeek /></NavLink>
      <NavLink to="/potlucks/add"><GrAdd /></NavLink>
      <NavLink to="/logout" onClick={handleLogout}><MdOutlineLogout /></NavLink>
    </>
  )

  return (
    <nav className={styles.container}>
      <div className={styles.navdiv}>
        {user ? protectedLinks : publicLinks}
      </div>
    </nav>
  )
}

export default NavBar