const RsvpCard = ({ rsvp, user }) => {
  // console.log(rsvp.party)
  return (
    <article>
      <p>{user.name}</p>
      <p>{rsvp.party}</p>
      <p>{rsvp.notes}</p>
      <p>{rsvp.rsvp}</p>
    </article>
  )
}

export default RsvpCard