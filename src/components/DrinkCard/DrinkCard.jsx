import { Link } from "react-router-dom"
import styles from './DrinkCard.module.css'

const DrinkCard = ({ drink, user, potluckId, handleDeleteDrink }) => {
  return (
    <div className={styles.drinkCard}>
      <p>{user.name}</p>
      <p>Bringing: {drink.name}</p>
      {drink.alcoholic ?
        <p>ALCOHOLIC</p>
        :
        <p>NON-ALCOHOLIC</p>
      }
      {drink.quantity ? <p>Quantity: {drink.quantity}</p> : ""}
      {drink.notes ? <p>{drink.notes}</p> : ""}
      {drink.provider === user.profile &&
        <div className={styles.btns}>
          <Link 
            to={`/potlucks/${potluckId}/drinks/${drink._id}`} 
            state={drink}
          >
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDeleteDrink(potluckId, drink._id)}>Delete</button>
        </div>
      }
    </div>
  )
}

export default DrinkCard