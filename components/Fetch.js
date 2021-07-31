import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
function Fetch() {
    const [ person, setperson] = useState([])
const url = 'https://swapi.dev/api/people/'
    useEffect(() => {
        axios.get(url)
        .then((res) => {
            console.log(res.data.results)
            setperson(res.data.results)
        }, [url])
    })
    return (
        <div>
            {
                person.map((person, index) => <Card key={index} user={person}/>)
            }
            
        </div>
    )
}

export default Fetch
