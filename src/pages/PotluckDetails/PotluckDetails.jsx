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
      Details
    </main>
  )
}

export default PotluckDetails