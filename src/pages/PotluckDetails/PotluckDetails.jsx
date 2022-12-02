import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './PotluckDetails.module.css'

// Components
import Loading from '../Loading/Loading'

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

  if (!potluck) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>{potluck.name}</h1>
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