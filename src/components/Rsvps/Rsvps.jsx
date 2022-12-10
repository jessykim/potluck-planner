import RsvpCard from '../RsvpCard/RsvpCard'

const Rsvps = (props) => {
  if (!props.rsvps) return <h4>No Reservations</h4>

  return (
    <>
      {props.rsvps.map((rsvp) => (
        <RsvpCard
          key={rsvp._id}
          rsvp={rsvp}
          user={props.user}
        />
      ))}
    </>
  )
}

export default Rsvps