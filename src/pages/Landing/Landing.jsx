import { Link } from "react-router-dom"
import styles from './Landing.module.css'

const Landing = ({user}) => {
  return (
    <>
      <main>
        {user ? 
        <h1>Hello, {user.name}!</h1>
        :
        <h1>Welcome to Potluck Planner!</h1>
        }
        <div className={styles.cards}>
          <Link to="/potlucks/add">
            plan your next potluck
          </Link>
          <Link to="/potlucks">
            your collection of potlucks
          </Link>
        </div>
      </main>
    </>
  )
}

export default Landing