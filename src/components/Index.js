import {React, useState, useEffect} from 'react'
import {getClients} from '../services/clients-api'

function Index() {
const [data, setData] = useState([])
    useEffect(() => {
        getClients()
        .then(res => setData(res.data))
    }, [])
    console.log(data)

    return (
        <div>
            <h1>Client List:</h1>
            <ul className= "clients">
                {data.map((client, i) => {
                    return(
                        <li key = {i}>
                            <h2><a href = {`/${client._id}`}>{client.firstName} {client.lastName}</a></h2>
                        </li>               
                    )
                })}
            </ul>
        </div>
    )
}

export default Index