import { React, useState, useEffect } from 'react'
import { getAccounts, editAccount } from '../services/accounts-api'
import {useNavigate, useParams} from "react-router-dom"
import { getClient } from '../services/clients-api'


function Transfer() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [data, setData] = useState([])
    const [customer, setCustomer] = useState([])

    useEffect(() => {
        getAccounts()
        .then(res => setData(res.data))
        getClient(id)
        .then(res => setCustomer(res.data)) 
    }, [])
    
    const transferAccounts = event => {
        event.preventDefault()
        const transferAmount = Number(event.target.amount.value)
        const newAmount1 = Number(event.target.account1.value.split(" ")[0]) - transferAmount
        const newAmount2 = Number(event.target.account2.value.split(" ")[0]) + transferAmount
        const updated1 = {amount: newAmount1} 
        const updated2 = {amount: newAmount2}
        editAccount(event.target.account1.value.split(" ")[1], updated1)
        editAccount(event.target.account2.value.split(" ")[1], updated2)
        navigate(`/${id}`)
    }

  return (
   
<form onSubmit={transferAccounts}><br /><br />
<div><h2>{customer.firstName} {customer.lastName}</h2><br />
    <div className='allAccounts'>
                <h3>Transfer Amount: </h3><input name="amount" type="number"></input>
                <label><h3>From Account:</h3></label>
                    <select name="account1">
                        {data.map((account, i) => {
                        return(<>
                            {id == data[i].clientID?
                            <option value={ `${account.amount} ${account._id}` }>${account.amount} -x{account.accountNumber} {account.accountType}
                            </option>
                            :null}</>
                        )}
                        )}
                    </select>
                    <label><h3>To Account:</h3></label>
                    <select name="account2">
                        {data.map((account, i) => {
                        return(<>
                            {id == data[i].clientID?
                            <option value={ `${account.amount} ${account._id}` }>${account.amount} -x{account.accountNumber} {account.accountType}
                            </option>
                            :null}</>
                        )}
                        )}
                    </select><br /><br />
                    <input type='submit' /><br /><br />
                    <button className='button' onClick={() => {navigate(`/${id}`)}}>Back</button><br /><br />
                    </div>
                    </div>
            </form>

  )
}

export default Transfer