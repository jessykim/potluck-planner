import { Link } from "react-router-dom"

const ItemCard = ({ item, user, potluckId }) => {
  return (
    <article>
      <p>{user.name}</p>
      <p>{item.name}</p>
      <p>{item.category}</p>
      <p>{item.notes}</p>
      <span>
        {item.provider === user.profile &&
          <>
            <Link 
              to={`/potlucks/${potluckId}/items/${item._id}`} 
              state={item}
            >
              Edit
            </Link>
            {/* <button onClick={() => handleDeleteItem(potluckId, item._id)}>Delete</button> */}
          </>
        }
      </span>
    </article>
  )
}

export default ItemCard