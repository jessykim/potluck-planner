import { Link } from "react-router-dom"
import styles from './ItemCard.module.css'

const ItemCard = ({ item, user, potluckId, handleDeleteItem }) => {
  return (
    <div className={styles.itemCard}>
      <p>{user.name}</p>
      <p>Bringing: {item.name}</p>
      <p>Category: {item.category}</p>
      {item.notes ? <p>Note: {item.notes}</p> : ""}
      {item.provider === user.profile &&
        <div className={styles.btns}>
          <Link 
            to={`/potlucks/${potluckId}/items/${item._id}`} 
            state={item}
          >
            <button>Edit</button>
          </Link>
          <button onClick={() => handleDeleteItem(potluckId, item._id)}>Delete</button>
        </div>
      }
    </div>
  )
}

export default ItemCard