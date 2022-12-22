import DrinkCard from '../DrinkCard/DrinkCard'

const DrinkList = (props) => {
  if (props.drinks.length < 1) {
    return (
      <h1>No Drinks</h1>
    )
  }
  return (
    <>
      {props.drinks.map((drink) => (
        <DrinkCard
          key={drink._id}
          drink={drink}
          user={props.user}
          potluckId={props.potluckId}
          handleDeleteDrink={props.handleDeleteDrink}
        />
      ))}
    </>
  )
}

export default DrinkList