// import { Link } from "react-router-dom"

const DrinkCard = ({ drink, user, potluckId }) => {
  // console.log(user.profile)
  return (
    <article>
      <p>{user.name}</p>
      <p>{drink.name}</p>
      <p>{drink.type}</p>
      <p>{drink.notes}</p>
      <span>
        {/* {drink.provider === user.profile &&
          <>
            <Link 
              to={`/potlucks/${potluckId}/drinks/${drink._id}`} 
              state={drink}
            >
              Edit
            </Link>
            <button onClick={() => handleDeleteDrink(potluckId, drink._id)}>Delete</button>
          </>
        } */}
      </span>
    </article>
  )
}

export default DrinkCard