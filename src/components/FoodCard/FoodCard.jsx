const FoodCard = ({ food, user }) => {
  return (
    <article>
      <p>{user.name}</p>
      <p>{food.name}</p>
      <p>{food.type}</p>
      <p>{food.notes}</p>
    </article>
  )
}

export default FoodCard