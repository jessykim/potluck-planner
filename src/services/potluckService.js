import * as tokenService from "./tokenService"

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/potlucks`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (potluckData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(potluckData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (potluckData) => {
  try {
    const res = await fetch(`${BASE_URL}/${potluckData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(potluckData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deletePotluck = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}` 
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createRsvp = async (id, rsvpData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/rsvps`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rsvpData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateRsvp = async (potluckId, rsvpId, rsvpData) => {
  try {
    const res = await fetch(`${BASE_URL}/${potluckId}/rsvps/${rsvpId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rsvpData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteRsvp = async (potluckId, rsvpId) => {
  try {
    const res = await fetch(`${BASE_URL}/${potluckId}/rsvps/${rsvpId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createFood = async (id, foodData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/foods`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foodData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const foodIndex = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/foods`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateFood = async (potluckId, foodId, foodData) => {
  try {
    const res = await fetch(`${BASE_URL}/${potluckId}/foods/${foodId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foodData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteFood = async (potluckId, foodId) => {
  try {
    const res = await fetch(`${BASE_URL}/${potluckId}/foods/${foodId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createDrink = async (id, drinkData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/drinks`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(drinkData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const drinkIndex = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/drinks`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateDrink = async (potluckId, drinkId, drinkData) => {
  try {
    const res = await fetch(`${BASE_URL}/${potluckId}/drinks/${drinkId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(drinkData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteDrink = async (potluckId, drinkId) => {
  try {
    const res = await fetch(`${BASE_URL}/${potluckId}/drinks/${drinkId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
	create,
  index,
  show,
  update,
  deletePotluck,
  createRsvp,
  updateRsvp,
  deleteRsvp,
  createFood,
  foodIndex,
  updateFood,
  deleteFood,
  createDrink,
  drinkIndex,
  updateDrink,
  deleteDrink
}