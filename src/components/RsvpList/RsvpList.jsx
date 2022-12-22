import RsvpCard from '../RsvpCard/RsvpCard'

const RsvpList = (props) => {
  if (props.rsvps.length < 1) {
    return (
      <h1>No Reservations</h1>
    )
  }
  return (
    <>
      {props.rsvps.map((rsvp) => (
        <RsvpCard
          key={rsvp._id}
          rsvp={rsvp}
          user={props.user}
          potluckId={props.potluckId}
          handleDeleteRsvp={props.handleDeleteRsvp}
        />
      ))}
    </>
  )
}

export default RsvpList