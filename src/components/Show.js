import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import {getClient, deleteClient} from '../services/clients-api'

function Show() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [customer, setCustomer] = useState({})
    useEffect(() => {
        getClient(id)
        .then(res => setCustomer(res.data))
    }, [])

        const deleteTheClient = () => {
            deleteClient(id)
            navigate('/')
        }

  return (
    <div>
        <h2>{customer.firstName} {customer.lastName}</h2><br />
        <button onClick={() => {navigate(`/${id}/newaccount`)}}>Add Account</button>
        <button onClick={() => {navigate(`/${id}/Edit`)}}>Edit Client</button>
        <button onClick={deleteTheClient}>Remove Client</button> 
    </div>
  )
}

export default Show