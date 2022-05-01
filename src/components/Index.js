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
            <div className= "clients">
                {data.map((client, i) => {
                    return(
                        <h2  key = {i}className= "client">
                            <a href = {`/${client._id}`}>{client.firstName} {client.lastName}</a>
                        </h2>               
                    )
                })}
            </div>
        </div>
    )
}

export default Index