import {React, useState, useEffect} from 'react'
import {getClients} from '../services/clients-api'

function Index() {
const [data, setData] = useState([])
    useEffect(() => {
        getClients()
        .then(res => setData(res.data))
    }, [])
    
data.sort((a, b)=>{
    const nameA = a.lastName.toUpperCase()
    const nameB = b.lastName.toUpperCase()
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0
})

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