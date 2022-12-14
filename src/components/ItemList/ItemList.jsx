import ItemCard from "../ItemCard/ItemCard"

const ItemList = (props) => {
  if (!props.items) return <h4>No Item Added</h4>

  return (
    <>
      {props.items.map((item) => (
        <ItemCard
          key={item._id}
          item={item}
          user={props.user}
          potluckId={props.potluckId}
          // handleDeleteFood={props.handleDeleteFood}
        />
      ))}
    </>
  )
}

export default ItemList