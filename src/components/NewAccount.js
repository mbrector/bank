import {React} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createAccount } from '../services/accounts-api'

function NewAccount() {
    const { id } = useParams()
    const navigate = useNavigate()

    const createTheAccount = event => {
        const clientNumber = `${id}`
        event.preventDefault()
        let addition = {checkingAccount: event.target.checkingAccount.value, clientID: clientNumber}
        createAccount(addition)
        navigate(`/${id}`)
    }
    return (
        <div>
            <form onSubmit={createTheAccount}>
            Account: <input type={'text'} name="checkingAccount" />
            <input type='submit' />
        </form>
        </div>
    )
}

export default NewAccount