import { useState } from "react"
import PotluckForm from "../../components/PotluckForm/PotluckForm"

function AddPotluck(props) {
  const [potluckForm, setPotluckForm] = useState({
    name: '',
    start: '',
    end: '',
    location: '',
    description: '',
    
  })
  
  const handleChange = ({ target }) => {
    setPotluckForm({ ...potluckForm, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddPotluck(potluckForm)
  }

	return (
		<>
			<PotluckForm potluckForm={potluckForm} handleChange={handleChange} handleSubmit={handleSubmit} />
		</>
	)
}

export default AddPotluck