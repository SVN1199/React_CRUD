import axios from 'axios'
import React, { useState } from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import {API_URL} from '../Constants/URL'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()

    const postData = async() =>{
          await axios.post(API_URL, {
                firstName,
                lastName,
                checked
            })

            navigate('/read')
    }

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
                <Button onClick={postData}>SUBMIT</Button>
            </Form>
        </div>
    )
}

export default Create