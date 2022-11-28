// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddPotluck from './pages/AddPotluck/AddPotluck'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as potluckService from './services/potluckService'

// styles
import './App.css'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [potlucks, setPotlucks] = useState([])

  useEffect(() => {
    const fetchAllPotlucks = async () => {
      const potluckData = await potluckService.getAll()
      setPotlucks(potluckData)
    }
    fetchAllPotlucks()
  }, [])

  const handleLogout = () => {
    authService.logout()
		setUser(null)
		navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddPotluck = async newPotluckData => {
    const newPotluck = await potluckService.create(newPotluckData)
    setPotlucks([...potlucks, newPotluck])
    navigate('/potlucks')
  }

  return (
    <>
      <div className="App">
        <NavBar user={user} handleLogout={handleLogout} />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<Landing user={user} />} 
            />
            <Route
              path="/signup"
              element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
            />
            <Route
              path="/login"
              element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
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
              path="/changePassword"
              element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <navigate to="/login" />}
            />
            <Route 
              path="/add"
              element={<AddPotluck handleAddPotluck={handleAddPotluck} />}
            />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
