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
      <div class="accordion" id={styles.accordion}>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
              Guests
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <p>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#submitRSVP" aria-expanded="false" aria-controls="submitRSVP">
                  Submit RSVP
                </button>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#rsvpList" aria-expanded="false" aria-controls="rsvpList">
                  Guest List
                </button>
              </p>
              <div class="collapse" id="submitRSVP">
                <div class="card card-body">
                  <RsvpForm handleAddRsvp={handleAddRsvp} potluck={potluck} user={props.user} />
                </div>
              </div>
              <div class="collapse" id="rsvpList">
                <div class="card card-body">
                  <RsvpList rsvps={potluck.rsvps} user={props.user} potluckId={id} handleDeleteRsvp={handleDeleteRsvp} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Food
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              <FoodForm handleAddFood={handleAddFood} user={props.user} />
              <FoodList foods={foods} user={props.user} potluckId={id} handleDeleteFood={handleDeleteFood} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Drinks
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
              <DrinkForm handleAddDrink={handleAddDrink} user={props.user} />
              <DrinkList drinks={drinks} user={props.user} potluckId={id} handleDeleteDrink={handleDeleteDrink} />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
              Items
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
            <div class="accordion-body">
              <ItemForm handleAddItem={handleAddItem} user={props.user} />
              <ItemList items={items} user={props.user} potluckId={id} handleDeleteItem={handleDeleteItem} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PotluckDetails