import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { API_URL } from '../Constants/URL'
import { useNavigate } from 'react-router-dom'

function Read() {
  const [apiData, setApiData] = useState([])
  const navigate = useNavigate()

  const deleteUser = async(id) =>{
    await axios.delete(API_URL + id)
    getCallApi()
  }

  const updateUser = ({id, firstName, lastName, checked}) =>{
    localStorage.setItem('id',id)
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('lastName',lastName)
    localStorage.setItem('checked',checked)
    navigate('/update')
  }

  const getCallApi = async() =>{
      const resp = await axios.get(API_URL)
      setApiData(resp.data)
    }

  useEffect(()=>{
    getCallApi()
  }, [])

  return (
    <div>
       <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                 FirstName
              </Table.HeaderCell>
              <Table.HeaderCell>
                 LastName
              </Table.HeaderCell>
              <Table.HeaderCell>
                 CHECKED
              </Table.HeaderCell>
              <Table.HeaderCell>
                 DELETE
              </Table.HeaderCell>
              <Table.HeaderCell>
                 UPDATE
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              apiData.map(data => (
                  <Table.Row key={data.id}>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>{data.checked ? 'Checked' : 'Not Checked'}</Table.Cell>
                    <Table.Cell>
                      <Button onClick={()=> deleteUser(data.id)}>Delete</Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Button onClick={()=> updateUser(data)}>Update</Button>
                    </Table.Cell>
                  </Table.Row>
              ))
            }
          </Table.Body>
       </Table>
    </div>
  )
}

export default Read