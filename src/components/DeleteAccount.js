import { React, useState, useEffect } from 'react'
import { getAccounts, deleteAccount } from '../services/accounts-api'
import {useNavigate, useParams} from "react-router-dom"
import { getClient } from '../services/clients-api'

function DeleteAccount() {
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




    const deleteTheAccount = event => {
        event.preventDefault()
        deleteAccount(event.target.account.value)
        navigate(`/${id}`)
    }
  return (
    <div><form onSubmit={deleteTheAccount}>
    <h2>{customer.firstName} {customer.lastName}</h2>
        <div className='allAccounts'>
                <label><h3>Account:</h3></label>
                    <select name="account">
                        {data.map((account, i) => {
                        return(<>
                            {id == data[i].clientID?
                            <option value={ `${account._id}` }>${account.amount} -x{account.accountNumber} {account.accountType}
                            </option>
                            :null}</>
                        )}
                        )}
                    </select><br /><br />
                    <input type="submit" value="Delete Account"></input><br /><br />
                    <button className='button' onClick={() => {navigate(`/${id}`)}}>Back</button><br /><br />
                    
                    </div>
                    </form>
                    </div>
  )
}

export default DeleteAccount