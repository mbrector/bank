import {React, useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createAccount } from '../services/accounts-api'
import { getClient } from '../services/clients-api'


function NewAccount() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [customer, setCustomer] = useState([])

    useEffect(() => {
        getClient(id)
        .then(res => setCustomer(res.data))  
    }, [])
    
    const createTheAccount = event => {
        const clientNumber = `${id}`
        const randomAccount = Math.floor(1000 + Math.random()*9000)
        event.preventDefault()
        let addition = {clientID: clientNumber, accountType: event.target.accountType.value, amount: event.target.amount.value, accountNumber: randomAccount}
        createAccount(addition)
        navigate(`/${id}`)
    }

    return (
        <div>
            <h2>{customer.firstName} {customer.lastName}</h2><br />
        <div className='allAccounts'>
            
            <form onSubmit={createTheAccount}>
                <br />
                <label><h3>Account Type:</h3></label>
                    <select name="accountType">
                    <option value="Checking">Checking</option>
                    <option value="Savings">Savings</option>
                    <option value="Money Market">Money Market</option>
                    </select>
                    <h3>Amount:</h3> <input type='number' name="amount" /><br /><br />
                    <input className="button" type='submit' /><br /><br /><br />
                    <button className='button' onClick={() => {navigate(`/${id}`)}}>Back</button><br /><br />
            </form>
        </div>
        </div>
    )
}

export default NewAccount