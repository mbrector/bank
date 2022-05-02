import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import { getAccounts } from '../services/accounts-api'
import {getClient, deleteClient} from '../services/clients-api'


function Show() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [customer, setCustomer] = useState([])
    const [data, setData] = useState([])
    let total = 0
    

    useEffect(() => {
        getClient(id)
        .then(res => setCustomer(res.data))
        getAccounts()
        .then(res => setData(res.data))  
    }, [])

    data.sort((a, b)=>{
        const nameA = a.accountType.toUpperCase()
        const nameB = b.accountType.toUpperCase()
        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0
    })    

        const deleteTheClient = () => {
            deleteClient(id)
            navigate('/')
        }
        return (
            <div>
        <h2>{customer.firstName} {customer.lastName}</h2><br />
            <div  className= 'allAccounts'>
        {data.map((account, i) => {
            return(<div key = {i}>
                        {customer._id==data[i].clientID?
                        <div className="accounts" >
                            {console.log(total)}
                            {account.accountType}<br />               
                            ${account.amount}<br />
                            xxxxxx{account.accountNumber}<br /><br />
                            <p hidden>{total += account.amount}</p>
                        </div>
                        :null}
                    </div>
                    )
                })}
                <h2>${total}</h2>
                </div><br />
        <button onClick={() => {navigate(`/${id}/transfer`)}}>Transfer</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => {navigate(`/${id}/newaccount`)}}>Add Account</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => {navigate(`/${id}/Edit`)}}>Edit Client</button>&nbsp;&nbsp;&nbsp;
        <button onClick={deleteTheClient}>Remove Client</button> 
    </div>
  )
}

export default Show