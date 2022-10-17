import { Button } from "antd"
import {React, useState } from "react"

function Form() {
    // const[name, setName] = useState("")
// console.log("Your name is " +name)

const[formData, setFormData] =useState({
    "firstName": "",
    "lastName":"",
    "email":"",
    "comment":"",
    "isMarried": true,
    "employment":"",
    "fav":""
})
// console.log(formData.fav)
    const handleChange= (event)=>{
    //     console.log(event.target.value)
    //     console.log("changed")
    //setName(event.target.value)
    // console.log(event.target.name)
    // check previos data, spread it and ovveride with the new data
    // How? lets see
    const{name, value, type,checked} =event.target
    setFormData(prevFormData =>{
        // spread the current data
        return{
            ...prevFormData,
            // override with the inputs
            // [event.target.name]: event.target.value
            [name]: type === "checkbox" ? checked : value
        }
    })
    }

    const style ={
        marginTop: "20px",
        marginLeft: "10px",
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        //submitToApi(formData)
        console.log(formData)
    }
  return (
    <form style={style} onSubmit={handleSubmit}> 
     <label>
   First name
   <input
    type="text"
    placeholder='Enter first name'
    onChange={handleChange}
    name="firstName"
    value={formData.firstName}
    />
    </label>
<br/>
    <label>
   Last name
   <input
    type="text"
    placeholder='Enter second name'
    onChange={handleChange}
    name="lastName"
    value={formData.lastName}
    />
    </label>

    <label>
   Email
   <input
    type="email"
    placeholder='Enter email'
    onChange={handleChange}
    name="email"
    value={formData.email}
    />
    </label>
    <br/>
    <label>
        comments
        <textarea
        onChange={handleChange}
        name="comment"
        value={formData.comment}
         />
    </label>
    <br></br>
    <label>
  Status
   <input
    type="checkbox"
    onChange={handleChange}
    id="isMarried"
    name="isMarried"
    checked={formData.isMarried}
    />
    </label>
    <br></br>
    <fieldset>
        <legend>Current employment status</legend>
        <label>
            Unemployed
        <input
        type="radio"
        id ="unemployed"
        name="employment"
        value="unemployed"
        checked={formData.employment === "unemployed"}
        onChange={handleChange}

        />
        </label>

        <label>
            Part-time
        <input
        type="radio"
        id ="part-time"
        name="employment"
        value="part-time"
        checked={formData.employment==="part-time"}
        onChange={handleChange}

        />
        </label>

        <label>
            Full time
        <input
        type="radio"
        id ="full-time"
        name="employment"
        value="full-time"
        checked={formData.employment==="full-time"}
        onChange={handleChange}
        />
        </label>
    </fieldset>
    <select 
    id="fav"
    value={formData.fav}
    onChange={handleChange}
    name="fav"
    >
<option value="red">Red</option>
<option value="yellow">Yellow</option>
<option value="orange">Orange</option>
    </select>
    <br/>
    <br/>
    <input 
    type="submit"
    />
    {/* <Button type="submit">Submit</Button> */}
  </form>
  )
}

export default Form