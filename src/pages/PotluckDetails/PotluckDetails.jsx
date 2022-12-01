import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './PotluckDetails.module.css'

// Services
import * as potluckService from '../../services/potluckService'

const PotluckDetails = (props) => {
  const { id } = useParams()
  const [potluck, setPotluck] = useState(null)

  useEffect(() => {
    const fetchPotluck = async () => {
      const data = await potluckService.show(id)
      setPotluck(data)
    }
    fetchPotluck()
  }, [id])

  // Verify state with a console.log or React Dev Tools:
  console.log('Potluck State:', potluck)

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{props.potluck.name.toUpperCase()}</h3>
          <h1>{props.potluck.name}</h1>
          <span>
            {/* <AuthorInfo content={blog} /> */}
          </span>
        </header>
        <p>{props.potluck.location}</p>
      </article>
      <section>
        <h1>Guests</h1>
        <p>{props.potluck.name}</p>
      </section>
    </main>
  )
}

export default PotluckDetails