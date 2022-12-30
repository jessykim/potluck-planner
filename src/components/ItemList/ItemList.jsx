import ItemCard from "../ItemCard/ItemCard"

const ItemList = (props) => {
  if (props.items.length < 1) {
    return (
      <h1>No Items Added</h1>
    )
  }
  return (
    <>
      {props.items.map((item) => (
        <ItemCard
          key={item._id}
          item={item}
          user={props.user}
          potluckId={props.potluckId}
          handleDeleteItem={props.handleDeleteItem}
        />
      ))}
    </>
  )
}

export default ItemList