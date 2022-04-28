import {React} from 'react'
import {useNavigate} from "react-router-dom"
import {createClient} from '../services/clients-api'

function NewClient() {
    const navigate = useNavigate()

    const createTheClient = event => {
        event.preventDefault()
        let addition = {firstName: event.target.firstName.value, lastName: event.target.lastName.value}
        createClient(addition)
        navigate('/')
    }
  return (
    <div>
        <h2>Add a Client</h2>
        <form onSubmit={createTheClient}>
            First Name: <input type={'text'} name="firstName" />
            Last Name: <input type={'text'} name="lastName" />
            <input type='submit' />
        </form>
    </div>
  )
}

export default NewClient