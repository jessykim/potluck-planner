// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Logout from './pages/Logout/Logout'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddPotluck from './pages/AddPotluck/AddPotluck'
import PotluckList from './pages/PotluckList/PotluckList'
import PotluckDetails from './pages/PotluckDetails/PotluckDetails'
import EditPotluck from './pages/EditPotluck/EditPotluck'
import EditRsvp from './pages/EditRsvp/EditRsvp'
import EditFood from './pages/EditFood/EditFood'
import EditDrink from './pages/EditDrink/EditDrink'
import EditItem from './pages/EditItem/EditItem'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as potluckService from './services/potluckService'
// import * as profileService from './services/profileService'

// styles
import './App.css'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [potlucks, setPotlucks] = useState([])

  const handleLogout = () => {
    authService.logout()
		setUser(null)
		navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddPotluck = async (potluckData) => {
    const newPotluck = await potluckService.create(potluckData)
    setPotlucks([newPotluck, ...potlucks])
    navigate('/potlucks')
  }

  const handleUpdatePotluck = async (potluckData) => {
    const updatedPotluck = await potluckService.update(potluckData)
    setPotlucks(potlucks.map((p) => potluckData._id === p._id ? updatedPotluck : p))
    navigate('/potlucks')
  }

  const handleDeletePotluck = async (id) => {
    const deletedPotluck = await potluckService.deletePotluck(id)
    setPotlucks(potlucks.filter(p => p._id !== deletedPotluck._id))
    navigate('/potlucks')
  }

  useEffect(() => {
    const fetchAllPotlucks = async () => {
      const potluckData = await potluckService.index()
      setPotlucks(potluckData)
    }
    if (user) fetchAllPotlucks()
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/signup" element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route path="/login" element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route path="/logout" element={<Logout handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <navigate to="/login" />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/potlucks/add"
          element={<AddPotluck handleAddPotluck={handleAddPotluck} />}
        />
        <Route 
          path="/potlucks"
          element={
            <ProtectedRoute user={user}>
              <PotluckList potlucks={potlucks} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/potlucks/:id"
          element={
            <ProtectedRoute user={user}>
              <PotluckDetails user={user} handleDeletePotluck={handleDeletePotluck} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/potlucks/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditPotluck handleUpdatePotluck={handleUpdatePotluck} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/potlucks/:potluckId/rsvps/:rsvpId"
          element={
            <ProtectedRoute user={user}>
              <EditRsvp user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/potlucks/:potluckId/foods/:foodId"
          element={
            <ProtectedRoute user={user}>
              <EditFood user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/potlucks/:potluckId/drinks/:drinkId"
          element={
            <ProtectedRoute user={user}>
              <EditDrink user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/potlucks/:potluckId/items/:itemId"
          element={
            <ProtectedRoute user={user}>
              <EditItem user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
