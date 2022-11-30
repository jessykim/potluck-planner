import { Link } from "react-router-dom"
import styles from './PotluckCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const PotluckCard = ({ potluck }) => {
  return (
    <Link to={`/potlucks/${potluck._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{potluck.name}</h1>
            <h2>{potluck.location}</h2>
            {/* <Icon category={blog.category} /> */}
          </span>
          {/* <AuthorInfo content={blog} /> */}
        </header>
        {/* <p>{potluck.description}</p> */}
      </article>
    </Link>
  )
}

export default PotluckCard