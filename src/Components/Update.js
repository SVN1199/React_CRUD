import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import {API_URL} from '../Constants/URL'
import { useNavigate } from 'react-router-dom'

function Update() {
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [checked, setChecked] = useState(false)
  const [id, setId] = useState('')
  const navigate = useNavigate()

  const putData = async() =>{
    await axios.put(API_URL + id ,{
      firstName,
      lastName,
      checked,
    })
    navigate('/read')
  }

  useEffect(()=>{
    setFirstName(localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setChecked(localStorage.getItem('checked'))
    setId(localStorage.getItem('id'))
  },[])

  return (
    <div className='create'>
        <Form>
            <Form.Field>
                <label>FirstName</label>
                <input type="text" value={firstName} placeholder='Enter FirstName'  
                    onChange={(e)=>setFirstName(e.target.value)}
                /> 
            </Form.Field><br />
            <Form.Field>
                <label>LastName</label>
                <input type="text" value={lastName} placeholder='Enter LastName'  
                    onChange={(e)=>setLastName(e.target.value)}
                /> 
            </Form.Field><br />
            <Checkbox label='I agree the Terms and Conditions' value={checked} 
            onChange={()=>setChecked(!checked)}/>
            <Button onClick={putData}>Update</Button>
        </Form>
    </div>
)
}

export default Update