import { Link } from "react-router-dom"
import styles from './FoodCard.module.css'

const FoodCard = ({ food, user, potluckId, handleDeleteFood }) => {
  return (
    <div className={styles.foodCard}>
      <p>{food.provider.name}</p>
      <p>Bringing: {food.name}</p>
      <p>Category: {food.type}</p>
      {food.notes ? <p>Note: {food.notes}</p> : ""}
      {food.provider._id === user.profile &&
        <div className={styles.btns}>
          <Link 
            to={`/potlucks/${potluckId}/foods/${food._id}`} 
            state={food}
          >
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDeleteFood(potluckId, food._id)}>Delete</button>
        </div>
      }
    </div>
  )
}

export default FoodCard