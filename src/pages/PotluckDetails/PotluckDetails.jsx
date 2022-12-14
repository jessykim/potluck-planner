import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import styles from './PotluckDetails.module.css'

// Components
import Loading from '../Loading/Loading'
import RsvpForm from '../../components/RsvpForm/RsvpForm'
import RsvpList from "../../components/RsvpList/RsvpList"
import FoodForm from "../../components/FoodForm/FoodForm"
import FoodList from "../../components/FoodList/FoodList"
import DrinkForm from "../../components/DrinkForm/DrinkForm"
import DrinkList from "../../components/DrinkList/DrinkList"
import ItemForm from "../../components/ItemForm/ItemForm"
import ItemList from "../../components/ItemList/ItemList"

// Services
import * as potluckService from '../../services/potluckService'

const PotluckDetails = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [potluck, setPotluck] = useState(null)
  const [foods, setFoods] = useState([])
  const [drinks, setDrinks] = useState([])
  const [items, setItems] = useState([])
  
  const handleAddRsvp = async (rsvpData) => {
    const newRsvp = await potluckService.createRsvp(id, rsvpData)
    setPotluck({ ...potluck, rsvps: [...potluck.rsvps, newRsvp]})
  }

  const handleDeleteRsvp = async (potluckId, rsvpId) => {
    await potluckService.deleteRsvp(potluckId, rsvpId)
    setPotluck({ ...potluck, rsvps: potluck.rsvps.filter((rsvp) => rsvp._id !== rsvpId)})
  }

  const handleAddFood = async (foodData) => {
    const newFood = await potluckService.createFood(id, foodData)
    setFoods([newFood, ...foods])
  }

  const handleAddDrink = async (drinkData) => {
    const newDrink = await potluckService.createDrink(id, drinkData)
    setDrinks([newDrink, ...drinks])
  }

  const handleAddItem = async (itemData) => {
    const newItem = await potluckService.createItem(id, itemData)
    setItems([newItem, ...items])
  }

  const handleDeleteFood = async (potluckId, foodId) => {
    const deletedFood = await potluckService.deleteFood(potluckId, foodId)
    setFoods(foods.filter((food) => food._id !== deletedFood._id))
    navigate(`/potlucks/${potluckId}`)
  }

  const handleDeleteDrink = async (potluckId, drinkId) => {
    const deletedDrink = await potluckService.deleteDrink(potluckId, drinkId)
    setDrinks(drinks.filter((drink) => drink._id !== deletedDrink._id))
    navigate(`/potlucks/${potluckId}`)
  }

  const handleDeleteItem = async (potluckId, itemId) => {
    const deletedItem = await potluckService.deleteItem(potluckId, itemId)
    setItems(items.filter((item) => item._id !== deletedItem._id))
    navigate(`/potlucks/${potluckId}`)
  }
  
  useEffect(() => {
    const fetchPotluck = async () => {
      const data = await potluckService.show(id)
      setPotluck(data)
      const foodData = await potluckService.foodIndex(id)
      setFoods(foodData)
      const drinkData = await potluckService.drinkIndex(id)
      setDrinks(drinkData)
      const itemData = await potluckService.itemIndex(id)
      setItems(itemData)
    }
    fetchPotluck()
  }, [id, setFoods, setDrinks, setItems])
  
  if (!potluck) return <Loading />

  const start = new Date(potluck.start).toLocaleDateString()
  const starttime = new Date(potluck.start).toLocaleTimeString()
  const end = new Date(potluck.end).toLocaleDateString()
  const endtime = new Date(potluck.end).toLocaleTimeString()

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>{potluck.name}</h1>
          <span>
            Hosted by {potluck.host.name}
          </span>
        </header>
        <p>Begins: {start} at {starttime}</p>
        <p>Ends: {end} at  {endtime}</p>
        <p>{potluck.description}</p>
        {potluck.host._id === props.user.profile &&
          <div className={styles.btns}>
            <Link to={`/potlucks/${id}/edit`} state={potluck}><button>Edit</button></Link>
            <button onClick={() => props.handleDeletePotluck(id)}>Delete</button>
          </div>
        }
      </article>
      <div className="accordion" id={styles.accordion}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
              Guests
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#submitRSVP" aria-expanded="false" aria-controls="submitRSVP">
                  Submit RSVP
                </button>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#rsvpList" aria-expanded="false" aria-controls="rsvpList">
                  Guest List
                </button>
              </p>
              <section className="collapse" id="submitRSVP">
                <div className="card card-body">
                  <RsvpForm handleAddRsvp={handleAddRsvp} potluck={potluck} user={props.user} />
                </div>
              </section>
              <div className="collapse" id="rsvpList">
                <div className="card card-body">
                  <RsvpList rsvps={potluck.rsvps} user={props.user} potluckId={id} handleDeleteRsvp={handleDeleteRsvp} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Food
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addFood" aria-expanded="false" aria-controls="addFood">
                  Add Food
                </button>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#foodList" aria-expanded="false" aria-controls="foodList">
                  Food List
                </button>
              </p>
              <section className="collapse" id="addFood">
                <div className="card card-body">
                  <FoodForm handleAddFood={handleAddFood} user={props.user} />
                </div>
              </section>
              <div className="collapse" id="foodList">
                <div className="card card-body">
                  <FoodList foods={foods} user={props.user} potluckId={id} handleDeleteFood={handleDeleteFood} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Drinks
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addDrink" aria-expanded="false" aria-controls="addDrink">
                  Add Drink
                </button>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#drinkList" aria-expanded="false" aria-controls="drinkList">
                  Drink List
                </button>
              </p>
              <section className="collapse" id="addDrink">
                <div className="card card-body">
                  <DrinkForm handleAddDrink={handleAddDrink} user={props.user} />
                </div>
              </section>
              <div className="collapse" id="drinkList">
                <div className="card card-body">
                  <DrinkList drinks={drinks} user={props.user} potluckId={id} handleDeleteDrink={handleDeleteDrink} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
              Items
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
            <div className="accordion-body">
              <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#addItem" aria-expanded="false" aria-controls="addItem">
                  Add Item
                </button>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#itemList" aria-expanded="false" aria-controls="itemList">
                  Item List
                </button>
              </p>
              <section className="collapse" id="addItem">
                <div className="card card-body">
                  <ItemForm handleAddItem={handleAddItem} user={props.user} />
                </div>
              </section>
              <div className="collapse" id="itemList">
                <div className="card card-body">
                  <ItemList items={items} user={props.user} potluckId={id} handleDeleteItem={handleDeleteItem} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PotluckDetails