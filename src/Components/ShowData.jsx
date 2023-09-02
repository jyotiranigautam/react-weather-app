import React from 'react'
import '../Components/showdata.css'

function ShowData({ text }) {
    return (
        <div className="section"  >
            <div className="card-container" >
                <div className="row">
                    <div className="card col-2"  >
                        <div className="description_card-icon">
                            <h5 class="card-title">Description</h5>
                            <p class="card-text">{text.description}</p>
                        </div>
                    </div>
                    <div className="card col-2"  >
                        <div className="description_card-icon">
                            <h5 class="card-title">Wind</h5>
                            <p class="card-text">{text.wind} m/s</p>
                        </div>
                    </div>

                    <div className="card col-2"  >
                        <div className="description_card-icon">
                            <h5 class="card-title">Temp Min</h5>
                            <p class="card-text"> {
                                text.temp_min !== undefined ? ((text.temp_min - 273.15).toFixed(2) + "°C") : null
                            }</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="card col-2"  >
                        <div className="description_card-icon">
                            <h5 class="card-title">Feels like</h5>
                            <p class="card-text">{
                                text.feels_like !== undefined ? ((text.feels_like - 273.15).toFixed(2) + "°C") : null
                            }</p>
                        </div>
                    </div>

                    <div className="card col-2"  >
                        <div className="description_card-icon">
                            <h5 class="card-title">Temp Max</h5>
                            <p class="card-text">{
                                text.temp_min !== undefined ? (<p>{(text.temp_max - 273.15).toFixed(2)}°C</p>) : null
                            }</p>
                        </div>
                    </div>

                    <div className="card col-2"  >
                        <div className="description_card-icon">
                            <h5 class="card-title">Humidity</h5>
                            <p class="card-text">{text.humidity}%</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}




export default ShowData;