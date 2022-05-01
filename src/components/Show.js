import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import { getAccounts } from '../services/accounts-api'
import {getClient, deleteClient} from '../services/clients-api'


function Show() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [customer, setCustomer] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        getClient(id)
        .then(res => setCustomer(res.data))
        getAccounts()
        .then(res => setData(res.data))
    }, [])

        const deleteTheClient = () => {
            deleteClient(id)
            navigate('/')
        }
  return (
    <div>
        <h2>{customer.firstName} {customer.lastName}</h2><br />


        {data.map((account, i) => {
            return(<div key = {i}>
                        {customer._id==data[i].clientID?
                        <div>
                            {account.accountType}<br />               
                            ${account.amount}<br />
                            xxxxxx{account.accountNumber}<br /><br />
                        </div>
                        :null}
                    </div>

                    )
                })}
        



        <button onClick={() => {navigate(`/${id}/newaccount`)}}>Add Account</button>
        <button onClick={() => {navigate(`/${id}/Edit`)}}>Edit Client</button>
        <button onClick={deleteTheClient}>Remove Client</button> 
    </div>
  )
}

export default Show