import { React, useState, useEffect } from 'react'
import { getAccounts, editAccount } from '../services/accounts-api'
import {useNavigate, useParams} from "react-router-dom"
import { getClient } from '../services/clients-api'


function EditAccount() {
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

    const transaction = event => {
        event.preventDefault()
        const transactionAmount = Number(event.target.amount.value)
        const newAmount1 = Number(event.target.account.value.split(" ")[0]) + transactionAmount
        const updated1 = {amount: newAmount1}
        editAccount(event.target.account.value.split(" ")[1], updated1)
        navigate(`/${id}`)   
    }

  return (
    <div>
        <form onSubmit={transaction}>
            <h2>{customer.firstName} {customer.lastName}</h2>
            <div className='allAccounts'>
                <h3>Amount: </h3><input id='amount' name="amount" type="number"></input><br />
                <h8>(Use a negative(-) for withdrawals)</h8>
                <label><h3>Account:</h3></label>
                <select name="account">
                    {data.map((account, i) => {
                        return(
                            <>{id == data[i].clientID?
                                <option value={ `${account.amount} ${account._id}` }>${account.amount} -x{account.accountNumber} {account.accountType}</option>
                            :null}</>
                            )}
                    )}
                </select><br /><br />
                <input type="submit"></input><br /><br />
                <button className='button' onClick={() => {navigate(`/${id}`)}}>Back</button><br /><br />
                <button className='button' onClick={() => {navigate(`/${id}/delete`)}}>Remove an Account</button><br /><br />
            </div>
        </form>
    </div>
  )
}

export default EditAccount