import {React} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createAccount } from '../services/accounts-api'


function NewAccount() {
    const { id } = useParams()
    const navigate = useNavigate()
    
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
            
            <form onSubmit={createTheAccount}>
                <label>Account Type:</label>
                    <select name="accountType">
                    <option value="Checking">Checking</option>
                    <option value="Savings">Savings</option>
                    <option value="Money Market">Money Market</option>
                    </select>
            Amount: <input type='number' name="amount" />
                    <input type='submit' />
            </form>
        </div>
    )
}

export default NewAccount