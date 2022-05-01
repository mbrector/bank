import { React, useState, useEffect } from 'react'
import { getAccounts, getAccount, editAccount } from '../services/accounts-api'
import {useNavigate, useParams} from "react-router-dom"



function Transfer() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [customer, setCustomer] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        getAccounts()
        .then(res => setData(res.data))
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
   
<form onSubmit={transferAccounts}>
                Amount: <input name="amount" type="number"></input>
                <label>From Account:</label>
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
                    <label>To Account:</label>
                    <select name="account2">
                        {data.map((account, i) => {
                        return(<>
                            {id == data[i].clientID?
                            <option value={ `${account.amount} ${account._id}` }>${account.amount} -x{account.accountNumber} {account.accountType}
                            </option>
                            :null}</>
                        )}
                        )}
                    </select>
                    <input type='submit' />
            </form>

  )
}

export default Transfer