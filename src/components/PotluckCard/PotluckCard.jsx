import { Link } from "react-router-dom"
import styles from './PotluckCard.module.css'

const PotluckCard = ({ potluck }) => {
  const start = new Date(potluck.start).toLocaleDateString()
  const starttime = new Date(potluck.start).toLocaleTimeString()

  return (
    <Link to={`/potlucks/${potluck._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{potluck.name}</h1>
          </span>
        </header>
        <p>{start} at {starttime}</p>
        <p>{potluck.location}</p>
      </article>
    </Link>
  )
}

export default PotluckCard