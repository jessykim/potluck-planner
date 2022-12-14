import { Link } from "react-router-dom"

const DrinkCard = ({ drink, user, potluckId }) => {
  console.log(drink.alcoholic)
  return (
    <article>
      <p>{user.name}</p>
      <p>{drink.name}</p>
      {drink.alcoholic ?
        <p>ALCOHOLIC</p>
        :
        <p>NON-ALCOHOLIC</p>
      }
      <p>{drink.quantity}</p>
      <p>{drink.notes}</p>
      <span>
        {drink.provider === user.profile &&
          <>
            <Link 
              to={`/potlucks/${potluckId}/drinks/${drink._id}`} 
              state={drink}
            >
              Edit
            </Link>
            {/* <button onClick={() => handleDeleteDrink(potluckId, drink._id)}>Delete</button> */}
          </>
        }
      </span>
    </article>
  )
}

export default DrinkCard