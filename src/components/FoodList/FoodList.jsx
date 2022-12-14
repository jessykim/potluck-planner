import FoodCard from '../FoodCard/FoodCard'

const FoodList = (props) => {
  if (!props.foods) return <h4>No Food Added</h4>

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