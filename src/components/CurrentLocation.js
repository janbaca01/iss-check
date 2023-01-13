import './CurrentLocation.css'
import { useState, useEffect } from 'react'
import MapIss from './MapIss'

const CurrentLocation = () => {
    const url = "http://api.open-notify.org/iss-now.json"
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")


    const getCurrentLocation = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setLatitude(data["iss_position"]["latitude"])
        setLongitude(data["iss_position"]["longitude"])
    }

    useEffect( () => {
        getCurrentLocation()
    }, [])

    return (
        <div className='content'>
            <header>
                <h1>ISS Check</h1>
            </header>
            <div className="location-area">
                <div>
                    <h2>ISS latitude:</h2>
                    <p>{latitude}</p>
                </div>
                <div>
                    <h2>ISS longitude</h2>
                    <p>{longitude}</p>   
                </div>
            </div>
            <MapIss />     
        </div>
    )

}

export default CurrentLocation