import { Link } from "react-router-dom"

const FoodCard = ({ food, user, potluckId, handleDeleteFood }) => {
  // console.log(user.profile)
  return (
    <article>
      <p>{user.name}</p>
      <p>{food.name}</p>
      <p>{food.type}</p>
      <p>{food.notes}</p>
      <span>
        {food.provider === user.profile &&
          <>
            <Link 
              to={`/potlucks/${potluckId}/foods/${food._id}`} 
              state={food}
            >
              Edit
            </Link>
            <button onClick={() => handleDeleteFood(potluckId, food._id)}>Delete</button>
          </>
        }
      </span>
    </article>
  )
}

export default FoodCard