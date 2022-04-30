import {React} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createAccount } from '../services/accounts-api'


function NewAccount() {
    const { id } = useParams()
    const navigate = useNavigate()
    
    const createTheAccount = event => {
        const clientNumber = `${id}`
        event.preventDefault()
        let addition = {clientID: clientNumber, accountType: event.target.accountType.value, amount: event.target.amount.value, interestRate: event.target.interestRate.value, accountNumber: event.target.accountNumber.value}
        createAccount(addition)
        navigate(`/${id}`)
    }

    return (
        <div>
            
            <form onSubmit={createTheAccount}>
            Account Type: <input type='text' name="accountType" />     
            Amount: <input type='number' name="amount" />
            Interest Rate: <input type='number' name="interestRate" />
            Account Number: <input type='number' name="accountNumber" />
            <input type='submit' />
        </form>
        </div>
    )
}

export default NewAccount