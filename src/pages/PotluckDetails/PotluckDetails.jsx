import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import styles from './PotluckDetails.module.css'

// Components
import Loading from '../Loading/Loading'
import RsvpForm from '../../components/RsvpForm/RsvpForm'
import Rsvps from "../../components/Rsvps/Rsvps"

// Services
import * as potluckService from '../../services/potluckService'

const PotluckDetails = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [potluck, setPotluck] = useState(null)

  const handleAddRsvp = async (rsvpData) => {
    const newRsvp = await potluckService.createRsvp(id, rsvpData)
    setPotluck({ ...potluck, rsvps: [...potluck.rsvps, newRsvp]})
    navigate(`/potlucks/${id}`)
  }

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
      <span>
        {potluck.host._id === props.user.profile &&
          <>
            <Link to={`/potlucks/${id}/edit`} state={potluck}>Edit</Link>
            <button onClick={() => props.handleDeletePotluck(id)}>Delete</button>
          </>
        }
      </span>
      <section>
        <h1>Guest List</h1>
        <RsvpForm handleAddRsvp={handleAddRsvp} potluck={potluck} user={props.user} />
        <Rsvps rsvps={potluck.rsvps} user={props.user} />
      </section>
      <section>

      </section>
    </main>
  )
}

export default PotluckDetails