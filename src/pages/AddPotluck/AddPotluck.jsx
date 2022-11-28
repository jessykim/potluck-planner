import { useState, useRef, useEffect } from "react"

function AddPotluck(props) {
  const [validForm, setValidForm] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
  })
  
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }
  
  const formElement = useRef()
  // console.log(formElement)

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])


  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddPotluck(formData)
  }

	return (
		<>
			<h1>Add Potluck</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Potluck's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="location-input" className="form-label">
						Location (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="location-input"
						name="location"
            value={formData.location}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="description-input" className="form-label">
						Description
					</label>
					<input 
						type="text"
						className="form-control"
						id="description-input"
						name="description"
            value={formData.description}
            onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Potluck
					</button>
				</div>
			</form>
		</>
	)
}

export default AddPotluck