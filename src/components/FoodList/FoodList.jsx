import FoodCard from '../FoodCard/FoodCard'

const FoodList = (props) => {
  if (props.foods.length < 1) {
    return (
      <h1>No Food Added</h1>
    ) 
  }
  return (
    <>
      {props.foods.map((food) => (
        <FoodCard
          key={food._id}
          food={food}
          user={props.user}
          potluckId={props.potluckId}
          handleDeleteFood={props.handleDeleteFood}
        />
      ))}
    </>
  )
}

export default FoodList