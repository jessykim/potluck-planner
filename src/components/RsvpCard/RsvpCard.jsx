import { Link } from "react-router-dom"

const RsvpCard = ({ rsvp, user, potluckId, handleDeleteRsvp }) => {
  // console.log(rsvp.guest)
  // console.log(user.profile)
  // console.log(rsvp._id)
  return (
    <article>
      <p>{user.name}</p>
      <p>{rsvp.party}</p>
      <p>{rsvp.notes}</p>
      <p>{rsvp.rsvp}</p>
      <span>
        {rsvp.guest === user.profile &&
          <>
            <Link 
              to={`/potlucks/${potluckId}/rsvps/${rsvp._id}`} 
              state={rsvp}
            >
              Edit
            </Link>
            <button onClick={() => handleDeleteRsvp(potluckId, rsvp._id)}>Delete</button>
          </>
        }
      </span>
    </article>
  )
}

export default RsvpCard