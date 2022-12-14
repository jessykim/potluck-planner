import DrinkCard from '../DrinkCard/DrinkCard'

const DrinkList = (props) => {
  if (!props.drinks) return <h4>No Drinks Added</h4>

  return (
    <>
      {props.drinks.map((drink) => (
        <DrinkCard
          key={drink._id}
          drink={drink}
          user={props.user}
          potluckId={props.potluckId}
          // handleDeleteFood={props.handleDeleteFood}
        />
      ))}
    </>
  )
}

export default DrinkList