import { useState } from "react"

function AddPotluck(props) {
	return (
		<>
			<h1>Add Potluck</h1>
			<form autoComplete="off">
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Potluck's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
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
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Potluck
					</button>
				</div>
			</form>
		</>
	)
}

export default AddPotluck