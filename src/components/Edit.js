import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import {editClient, getClient} from '../services/clients-api'

function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()
    
    const [data, setData] = useState({})

    useEffect(() => {
        getClient(id)
        .then(res => setData(res.data))
    }, [])

    const editTheClient = event => {
        event.preventDefault()
        let updated = {firstName: event.target.firstName.value, lastName: event.target.lastName.value}
        editClient(id, updated)
        navigate(`/${id}`)
    }
  return (
      <div><br /><br />
    <div className='allAccounts'>
        <h2>Edit Client Details</h2>
        <form onSubmit={editTheClient}>
            First Name: <input type={'text'} name="firstName" defaultValue={data.firstName}/><br /><br />
            Last Name: <input type={'text'} name="lastName" defaultValue={data.lastName}/><br /><br />
            <input type='submit' /><br /><br />
        </form>
    </div>
    </div>
  )
}

export default Edit