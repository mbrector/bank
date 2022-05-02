import { React, useState, useEffect } from 'react'
import { getAccounts, editAccount, deleteAccount } from '../services/accounts-api'
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

    const deposit = event => {
        event.preventDefault()
        const depositAmount = event.target.amount.value
        const newAmount1 = Number(event.target.account.value.split(" ")[0]) + depositAmount
        const updated1 = {amount: newAmount1}
        editAccount(event.target.account.value.split(" ")[1], updated1)
        navigate(`/${id}`)
        
    }

    const withdraw = event => {
        event.preventDefault()
        const withdrawAmount = Number(event.target.amount.value)
        const newAmount2 = Number(event.target.account.value.split(" ")[0]) - withdrawAmount
        const updated2 = {amount: newAmount2}
        editAccount(event.target.account.value.split(" ")[1], updated2)
        navigate(`/${id}`)
    }

    const deleteTheAccount = () => {
        // deleteAccount(??)
        navigate(`/${id}`)
    }

  return (
    <div><h2>{customer.firstName}{customer.lastName}</h2>
        <div className='allAccounts'>EditAccount
        <h3>Amount: </h3><input name="amount" type="number"></input>
                <label><h3>Account:</h3></label>
                    <select name="account">
                        {data.map((account, i) => {
                        return(<>
                            {id == data[i].clientID?
                            <option value={ `${account.amount} ${account._id}` }>${account.amount} -x{account.accountNumber} {account.accountType}
                            </option>
                            :null}</>
                        )}
                        )}
                    </select><br /><br />
                    <button className='button' onClick={deposit}>Deposit</button><br /><br />
                    <button className='button' onClick={withdraw}>Withdraw</button><br /><br />
                    <button className='button' onClick={() => {navigate(`/${id}`)}}>Back</button><br /><br />
                    </div>
    </div>
  )
}

export default EditAccount