

const PotluckList = (props) => {
  const potlucks = props.potlucks
  console.log(potlucks)
  return (
    <>
      <h1>Potluck List</h1>
      <div>
        {/* {potlucks.map((potluck, idx) => (
          <div key={idx}>
            <p>Potluck Name: {potluck.name}</p>
            <p>Location: {potluck.location}</p>
            <p>Description: {potluck.description}</p>
          </div>
        ))} */}
      </div>
    </>
  )
}

export default PotluckList