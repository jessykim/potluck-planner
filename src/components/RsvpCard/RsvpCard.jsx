import { Link } from "react-router-dom"
import styles from './RsvpCard.module.css'

const RsvpCard = ({ rsvp, user, potluckId, handleDeleteRsvp }) => {
  return (
    <div className={styles.rsvpCard}>
      <p>Guest: {rsvp.guest.name}</p>
      <p>Party of {rsvp.party}</p>
      {rsvp.notes ? <p>Note: {rsvp.notes}</p> : ""}
      <p>RSVP: {rsvp.rsvp}</p>
      {rsvp.guest._id === user.profile &&
        <div className={styles.btns}>
          <Link 
            to={`/potlucks/${potluckId}/rsvps/${rsvp._id}`} 
            state={rsvp}
          >
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDeleteRsvp(potluckId, rsvp._id)}>Delete</button>
        </div>
      }
    </div>
  )
}

export default RsvpCard