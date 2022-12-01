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
  console.log('Potluck Id:', id)

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>{potluck.name.toUpperCase()}</h1>
          <span>
            {potluck.host.name}
          </span>
        </header>
        <p>{potluck.start}</p>
        <p>{potluck.end}</p>
        <p>{potluck.description}</p>
      </article>
      <section>
        <h1>Guests</h1>
      </section>
    </main>
  )
}

export default PotluckDetails